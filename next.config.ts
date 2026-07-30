import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // O app roda com runtime de servidor (necessário para o módulo de
  // Atendimento: rotas de API, webhook do WhatsApp e envio com token no
  // servidor). Um export estático não suportaria esses handlers dinâmicos.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
