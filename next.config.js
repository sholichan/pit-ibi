/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
}
module.exports = nextConfig
