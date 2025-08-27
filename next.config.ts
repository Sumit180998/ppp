import type { NextConfig } from "next";

const nextConfig: NextConfig = {
// next.config.js

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ppp-6ij7.vercel.app",
        pathname: "/**",
      },
    ],
  },



};

export default nextConfig;
