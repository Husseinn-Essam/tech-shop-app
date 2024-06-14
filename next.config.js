/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.freeiconspng.com",
        port: "",
        pathname: "/uploads/laptop-png-8.png",
      },
    ],
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// Wrap the nextConfig with withBundleAnalyzer
module.exports = withBundleAnalyzer(nextConfig);