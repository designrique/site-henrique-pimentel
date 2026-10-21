import type { NextConfig } from "next";

// DIGIF-165: o gate do guia exige runtime Node (API route + cookie HttpOnly no servidor).
// O site deixa o static export e roda com `next start`, que e o start command do deploy.
// images.unoptimized permanece; o PDF privado precisa ser tracado no bundle do servidor.
const nextConfig: NextConfig = {
  images: { unoptimized: true },
  outputFileTracingIncludes: {
    "/guia-claude-design/baixar": ["./private/guides/claude-design.pdf"],
  },
};

export default nextConfig;
