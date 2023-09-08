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

module.exports = nextConfig;
