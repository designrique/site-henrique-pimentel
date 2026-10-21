import type { NextConfig } from "next";

// DIGIF-165: este worktree deixa de ser static export porque o gate do guia exige
// runtime Node (API route + leitura de cookie HttpOnly no servidor).
// trailingSlash e images.unoptimized permanecem. O deploy real nao e alterado aqui.
const nextConfig: NextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  outputFileTracingIncludes: {
    "/guia-claude-design/baixar": ["./private/guides/claude-design.pdf"],
  },
};

export default nextConfig;
