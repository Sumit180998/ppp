import type { NextConfig } from "next";

const nextConfig: NextConfig = {
// next.config.js

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://github.com/",
        pathname: "/**",
      },
    ],
  },



};

export default nextConfig;
