/** @type {import('next').NextConfig} */
const nextConfig = {
  domain: "https://www.datocms-assets.com/",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.datocms-assets.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
