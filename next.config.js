/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: 'pdf-loader',
    });
    return config;
  },
};

// const withManifest = require('next-manifest');
// module.exports = withManifest();
