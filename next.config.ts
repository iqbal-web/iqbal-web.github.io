import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export static HTML for GitHub Pages
  output: 'export',
  // Set basePath for GitHub Pages repo deployment
  basePath: '/iqbal-web.github.io',
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
