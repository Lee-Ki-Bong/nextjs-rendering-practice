import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  experimental: {
    ppr: "incremental",
  },
};

export default nextConfig;
