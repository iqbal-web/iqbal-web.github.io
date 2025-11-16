import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Uncomment the next line for static export (cPanel deployment)
  // output: 'export',
  // trailingSlash: true,
  
  images: {
    // For static export, use unoptimized images
    // unoptimized: true,
    
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
