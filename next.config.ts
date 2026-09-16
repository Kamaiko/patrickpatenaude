import type { NextConfig } from "next";

/** Export statique publié sur Vercel : aucune Server Action, aucune route API, aucun
 *  middleware. `next/image` reste sans optimiseur serveur — les images arriveront déjà à la bonne
 *  taille (voir `docs/assets-a-generer.md`). */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
