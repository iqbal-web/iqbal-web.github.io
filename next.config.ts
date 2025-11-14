import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
	  {
        protocol: 'https',
        hostname: 'ps.w.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
