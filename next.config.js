const { truncate } = require('fs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:["cdn.allthings.how", ]
  },
  future: {
    webpack5: true
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      events: false,
      // path: false
    };

    return config;
  },
}

module.exports = nextConfig
