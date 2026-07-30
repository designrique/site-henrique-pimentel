// Contrato do repositório do Inbox + seletor de backend.
//
// A UI e as rotas dependem apenas desta interface (assíncrona). Existem duas
// implementações: em memória (demo/dev, sem banco) e Supabase (produção,
// multi-tenant com RLS). `getInboxRepository()` escolhe a certa por ambiente.

import type {
  Agent,
  Conversation,
  ConversationFilter,
  ConversationView,
  ConversationStatus,
  InboundMessage,
  Message,
} from "./types";

export interface InboxRepository {
  listConversations(filter?: ConversationFilter): Promise<ConversationView[]>;
  getConversation(id: string): Promise<ConversationView | null>;
  listMessages(conversationId: string): Promise<Message[]>;
  appendOutbound(conversationId: string, text: string, agentId: string): Promise<Message | null>;
  ingestInbound(
    inbound: InboundMessage,
  ): Promise<{
    conversation: Conversation;
    message: Message;
    created: boolean;
    /** true quando a mensagem já existia (reenvio do provedor) e foi ignorada. */
    duplicate?: boolean;
  }>;
  setStatus(conversationId: string, status: ConversationStatus): Promise<ConversationView | null>;
  markRead(conversationId: string): Promise<void>;
  listAgents(): Promise<Agent[]>;
}

import { inMemoryRepository } from "./store";
import { isSupabaseConfigured, createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseRepository, resolveCurrentOrg } from "./store.supabase";

/**
 * Devolve o repositório apropriado para a requisição atual.
 *
 * - Sem Supabase configurado → repositório em memória (demo).
 * - Com Supabase, mas sem usuário autenticado ou sem organização → cai no
 *   modo demo por enquanto (a UI de login/onboarding entra na próxima fase).
 * - Autenticado e com organização → repositório Supabase, isolado por tenant.
 */
export async function getInboxRepository(): Promise<InboxRepository> {
  if (!isSupabaseConfigured()) return inMemoryRepository;

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return inMemoryRepository;

  const orgId = await resolveCurrentOrg(supabase, user.id);
  if (!orgId) return inMemoryRepository;

  return createSupabaseRepository(supabase, orgId, user.id);
}
