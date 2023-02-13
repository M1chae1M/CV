/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: 'pdf-loader',
    });
    return config;
  },
};