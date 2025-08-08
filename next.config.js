/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://garantgruz.ru' : '',
  // SEO optimizations
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig
