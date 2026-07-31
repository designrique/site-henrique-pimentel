// Domínio do módulo de atendimento multicanal (Inbox).
// Modelo autoral — não deriva de nenhum sistema de terceiros.

export type Channel = "whatsapp" | "instagram" | "telegram" | "webchat";

export type ConversationStatus = "open" | "pending" | "closed";

export type MessageDirection = "in" | "out";

export type MessageStatus = "queued" | "sent" | "delivered" | "read" | "failed";

export type MediaKind = "image" | "audio" | "video" | "document" | "sticker";

export interface MediaAttachment {
  kind: MediaKind;
  /** Id da mídia no provedor (baixado sob demanda via proxy). */
  externalId?: string;
  mimeType?: string;
  filename?: string;
}

export interface Agent {
  id: string;
  name: string;
  initials: string;
}

export interface Contact {
  id: string;
  name: string;
  /** Telefone E.164 (WhatsApp) ou handle do canal. */
  handle: string;
  channel: Channel;
  initials: string;
}

export interface Message {
  id: string;
  conversationId: string;
  direction: MessageDirection;
  text: string;
  /** ISO-8601 UTC. */
  at: string;
  status: MessageStatus;
  /** Nome de quem escreveu: agente (out) ou contato (in). */
  author: string;
  /** ID da mensagem no provedor externo (ex.: wamid do WhatsApp). */
  externalId?: string;
  /** Anexo de mídia, quando a mensagem não é só texto. */
  media?: MediaAttachment;
}

export interface Conversation {
  id: string;
  contactId: string;
  channel: Channel;
  /** Canal exato (linha em channels) em que a conversa entrou, para respostas. */
  channelId?: string | null;
  status: ConversationStatus;
  assigneeId: string | null;
  tags: string[];
  unreadCount: number;
  /** ISO-8601 UTC da última mensagem. */
  lastMessageAt: string;
  lastMessagePreview: string;
}

export interface ConversationView extends Conversation {
  contact: Contact;
  assignee: Agent | null;
}

export interface ConversationFilter {
  status?: ConversationStatus;
  channel?: Channel;
  query?: string;
}

/** Mensagem de entrada já normalizada, vinda de qualquer canal. */
export interface InboundMessage {
  channel: Channel;
  contactHandle: string;
  contactName: string;
  text: string;
  externalId?: string;
  at?: string;
  /** Id do canal no provedor (ex.: phone_number_id) — roteia para o tenant. */
  channelExternalId?: string;
  /** Id interno do canal (channels.id) resolvido no webhook, para vincular à conversa. */
  channelId?: string;
  /** Anexo de mídia, quando a mensagem recebida não é só texto. */
  media?: MediaAttachment;
}
