/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:["cdn.allthings.how", ]
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      // path: false
    };

    return config;
  },
}

module.exports = nextConfig
