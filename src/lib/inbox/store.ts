// Repositório de dados do Inbox.
// Implementação em memória, persistida em globalThis para sobreviver ao HMR do
// Next em dev. A interface `InboxRepository` isola a UI/rotas do backend, então
// dá para trocar por Postgres/Supabase depois sem mexer no restante do código.

import type {
  Agent,
  Contact,
  Conversation,
  ConversationView,
  InboundMessage,
  Message,
} from "./types";
import type { InboxRepository } from "./repository";

interface Db {
  agents: Map<string, Agent>;
  contacts: Map<string, Contact>;
  conversations: Map<string, Conversation>;
  messages: Map<string, Message[]>; // conversationId -> mensagens ordenadas
  seq: number;
}

// Relógio e ids determinísticos evitam Date.now()/Math.random() no módulo, o que
// mantém o seed estável e testável. Cada chamada avança o contador `seq`.
function makeId(db: Db, prefix: string): string {
  db.seq += 1;
  return `${prefix}_${db.seq.toString(36).padStart(4, "0")}`;
}

function nowIso(offsetMinutes = 0): string {
  // Base fixa para o seed; ingestões reais passam o próprio timestamp.
  const base = Date.parse("2026-07-30T13:00:00.000Z");
  return new Date(base + offsetMinutes * 60_000).toISOString();
}

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]!.toUpperCase())
    .join("");
}

function seed(): Db {
  const db: Db = {
    agents: new Map(),
    contacts: new Map(),
    conversations: new Map(),
    messages: new Map(),
    seq: 0,
  };

  const henrique: Agent = { id: "ag_hp", name: "Henrique Pimentel", initials: "HP" };
  const bot: Agent = { id: "ag_bot", name: "Assistente IA", initials: "IA" };
  db.agents.set(henrique.id, henrique);
  db.agents.set(bot.id, bot);

  const seedData: Array<{
    contact: Omit<Contact, "id" | "initials">;
    status: Conversation["status"];
    assignee: string | null;
    tags: string[];
    unread: number;
    thread: Array<{ dir: Message["direction"]; text: string; min: number }>;
  }> = [
    {
      contact: { name: "Marina Alves", handle: "+5511998877665", channel: "whatsapp" },
      status: "open",
      assignee: null,
      tags: ["lead", "consultoria"],
      unread: 2,
      thread: [
        { dir: "in", text: "Oi! Vi o site e queria entender a consultoria de IA.", min: -42 },
        { dir: "out", text: "Olá, Marina! Claro. Você busca aplicar IA em qual processo?", min: -40 },
        { dir: "in", text: "Atendimento no WhatsApp da clínica, 24h.", min: -3 },
        { dir: "in", text: "Dá pra integrar com meu número atual?", min: -2 },
      ],
    },
    {
      contact: { name: "Dr. Paulo Nunes", handle: "+5521970012233", channel: "whatsapp" },
      status: "pending",
      assignee: "ag_hp",
      tags: ["médico", "geo"],
      unread: 0,
      thread: [
        { dir: "in", text: "Preciso aparecer nas respostas do ChatGPT. É possível?", min: -180 },
        { dir: "out", text: "Sim. Trabalhamos GEO para consultórios. Te mando um diagnóstico.", min: -175 },
      ],
    },
    {
      contact: { name: "Loja Encanto", handle: "loja.encanto", channel: "instagram" },
      status: "open",
      assignee: "ag_bot",
      tags: ["varejo"],
      unread: 1,
      thread: [
        { dir: "in", text: "Vocês fazem automação de DM no Instagram?", min: -20 },
        { dir: "out", text: "Fazemos! Respostas automáticas + repasse pro time humano.", min: -18 },
        { dir: "in", text: "Perfeito, quero uma demonstração.", min: -6 },
      ],
    },
    {
      contact: { name: "Rafael Souza", handle: "@rafa_souza", channel: "telegram" },
      status: "closed",
      assignee: "ag_hp",
      tags: ["suporte"],
      unread: 0,
      thread: [
        { dir: "in", text: "Bug resolvido? O disparo voltou a funcionar.", min: -1440 },
        { dir: "out", text: "Resolvido sim. Qualquer coisa é só chamar. Abraço!", min: -1438 },
      ],
    },
  ];

  for (const item of seedData) {
    const contact: Contact = {
      id: makeId(db, "ct"),
      initials: initials(item.contact.name),
      ...item.contact,
    };
    db.contacts.set(contact.id, contact);

    const conversationId = makeId(db, "cv");
    const messages: Message[] = item.thread.map((m) => ({
      id: makeId(db, "ms"),
      conversationId,
      direction: m.dir,
      text: m.text,
      at: nowIso(m.min),
      status: m.dir === "out" ? "read" : "delivered",
      author: m.dir === "in" ? contact.name : db.agents.get(item.assignee ?? "ag_hp")!.name,
    }));
    db.messages.set(conversationId, messages);

    const last = messages[messages.length - 1]!;
    db.conversations.set(conversationId, {
      id: conversationId,
      contactId: contact.id,
      channel: contact.channel,
      status: item.status,
      assigneeId: item.assignee,
      tags: item.tags,
      unreadCount: item.unread,
      lastMessageAt: last.at,
      lastMessagePreview: last.text,
    });
  }

  return db;
}

// Singleton — sobrevive ao hot-reload do Next em desenvolvimento.
const globalRef = globalThis as unknown as { __inboxDb?: Db };
function db(): Db {
  if (!globalRef.__inboxDb) globalRef.__inboxDb = seed();
  return globalRef.__inboxDb;
}

function toView(conv: Conversation): ConversationView {
  const d = db();
  return {
    ...conv,
    contact: d.contacts.get(conv.contactId)!,
    assignee: conv.assigneeId ? d.agents.get(conv.assigneeId) ?? null : null,
  };
}

export const inMemoryRepository: InboxRepository = {
  async listConversations(filter) {
    const d = db();
    let list = Array.from(d.conversations.values());
    if (filter?.status) list = list.filter((c) => c.status === filter.status);
    if (filter?.channel) list = list.filter((c) => c.channel === filter.channel);
    if (filter?.query) {
      const q = filter.query.toLowerCase();
      list = list.filter((c) => {
        const contact = d.contacts.get(c.contactId);
        return (
          contact?.name.toLowerCase().includes(q) ||
          contact?.handle.toLowerCase().includes(q) ||
          c.lastMessagePreview.toLowerCase().includes(q)
        );
      });
    }
    return list
      .sort((a, b) => b.lastMessageAt.localeCompare(a.lastMessageAt))
      .map(toView);
  },

  async getConversation(id) {
    const conv = db().conversations.get(id);
    return conv ? toView(conv) : null;
  },

  async listMessages(conversationId) {
    return db().messages.get(conversationId) ?? [];
  },

  async appendOutbound(conversationId, text, agentId) {
    const d = db();
    const conv = d.conversations.get(conversationId);
    if (!conv) return null;
    const agent = d.agents.get(agentId);
    const message: Message = {
      id: makeId(d, "ms"),
      conversationId,
      direction: "out",
      text,
      at: new Date().toISOString(),
      status: "sent",
      author: agent?.name ?? "Agente",
    };
    d.messages.get(conversationId)!.push(message);
    conv.lastMessageAt = message.at;
    conv.lastMessagePreview = text;
    if (conv.status === "closed") conv.status = "open";
    return message;
  },

  async ingestInbound(inbound) {
    const d = db();
    // Reusa contato pelo handle+canal; senão cria.
    let contact = Array.from(d.contacts.values()).find(
      (c) => c.handle === inbound.contactHandle && c.channel === inbound.channel,
    );
    if (!contact) {
      contact = {
        id: makeId(d, "ct"),
        name: inbound.contactName || inbound.contactHandle,
        handle: inbound.contactHandle,
        channel: inbound.channel,
        initials: initials(inbound.contactName || inbound.contactHandle),
      };
      d.contacts.set(contact.id, contact);
    }

    // Reusa conversa aberta/pendente do contato; senão abre uma nova.
    let conv = Array.from(d.conversations.values()).find(
      (c) => c.contactId === contact!.id && c.status !== "closed",
    );
    if (!conv) {
      conv = {
        id: makeId(d, "cv"),
        contactId: contact.id,
        channel: inbound.channel,
        status: "open",
        assigneeId: null,
        tags: [],
        unreadCount: 0,
        lastMessageAt: inbound.at ?? new Date().toISOString(),
        lastMessagePreview: "",
      };
      d.conversations.set(conv.id, conv);
      d.messages.set(conv.id, []);
    }

    const message: Message = {
      id: makeId(d, "ms"),
      conversationId: conv.id,
      direction: "in",
      text: inbound.text,
      at: inbound.at ?? new Date().toISOString(),
      status: "delivered",
      author: contact.name,
      externalId: inbound.externalId,
    };
    d.messages.get(conv.id)!.push(message);
    conv.lastMessageAt = message.at;
    conv.lastMessagePreview = inbound.text;
    conv.unreadCount += 1;
    if (conv.status === "closed") conv.status = "open";

    return { conversation: conv, message };
  },

  async setStatus(conversationId, status) {
    const conv = db().conversations.get(conversationId);
    if (!conv) return null;
    conv.status = status;
    return toView(conv);
  },

  async markRead(conversationId) {
    const conv = db().conversations.get(conversationId);
    if (conv) conv.unreadCount = 0;
  },

  async listAgents() {
    return Array.from(db().agents.values());
  },
};
