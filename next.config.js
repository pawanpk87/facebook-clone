/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "scontent.fbho3-2.fna.fbcdn.net",
      "images.pexels.com",
      "www.pexels.com",
      "scontent.fbho3-1.fna.fbcdn.net",
    ],
  },
};

module.exports = nextConfig;
