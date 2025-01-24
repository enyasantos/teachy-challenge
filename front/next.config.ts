import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    SWAPI_URL: process.env.SWAPI_URL,
  },
};

export default nextConfig;
