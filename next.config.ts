import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "graphql-pokemon2.vercel.app",
      },
      {
        protocol: "https",
        hostname: "img.pokemondb.net",
      },
    ],
  },
};

export default nextConfig;
