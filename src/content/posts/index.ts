import type { PostEntry } from "@/lib/posts";

import oQueEGeoMedicos from "./o-que-e-geo-medicos";
import chatgptDecideCitar from "./chatgpt-decide-citar";
import baselineFatima from "./baseline-fatima";
import siteCfmSafeNextjs from "./site-cfm-safe-nextjs";
import geistVsInter from "./geist-vs-inter";
import postgresSwarmSupabase from "./postgres-swarm-supabase";
import iptablesDockerBridgeFix from "./iptables-docker-bridge-fix";
import frameworkGeoExtracaoIa from "./framework-geo-extracao-ia";
import atendenteIaWhatsApp24h from "./atendente-ia-whatsapp-24h";
import captacaoAutomaticaClientes from "./captacao-automatica-clientes";
import siteAtivoCaptacao from "./site-ativo-captacao";
import comoAparecerNoChatgpt from "./como-aparecer-no-chatgpt";
import socialSearchUltrapassaGoogle from "./social-search-ultrapassa-google-2026";
import agenticAiCampanhasMarketing from "./agentic-ai-campanhas-marketing-2026";
import influencerMarketingRoi from "./influencer-marketing-roi-2026";
import comunidadesPrivadasLealdade from "./comunidades-privadas-lealdade-marca-2026";

export const postRegistry: PostEntry[] = [
  agenticAiCampanhasMarketing,
  influencerMarketingRoi,
  comunidadesPrivadasLealdade,
  socialSearchUltrapassaGoogle,
  comoAparecerNoChatgpt,
  frameworkGeoExtracaoIa,
  atendenteIaWhatsApp24h,
  captacaoAutomaticaClientes,
  siteAtivoCaptacao,
  oQueEGeoMedicos,
  chatgptDecideCitar,
  baselineFatima,
  siteCfmSafeNextjs,
  geistVsInter,
  postgresSwarmSupabase,
  iptablesDockerBridgeFix,
];
