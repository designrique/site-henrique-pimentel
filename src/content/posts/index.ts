import type { PostEntry } from "@/lib/posts";

import oQueEGeoMedicos from "./o-que-e-geo-medicos";
import chatgptDecideCitar from "./chatgpt-decide-citar";
import baselineFatima from "./baseline-fatima";
import siteCfmSafeNextjs from "./site-cfm-safe-nextjs";
import geistVsInter from "./geist-vs-inter";
import postgresSwarmSupabase from "./postgres-swarm-supabase";
import iptablesDockerBridgeFix from "./iptables-docker-bridge-fix";

export const postRegistry: PostEntry[] = [
  oQueEGeoMedicos,
  chatgptDecideCitar,
  baselineFatima,
  siteCfmSafeNextjs,
  geistVsInter,
  postgresSwarmSupabase,
  iptablesDockerBridgeFix,
];
