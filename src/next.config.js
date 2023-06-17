/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/vjsrinivas/yolo-explained/tree/gh-pages' : '',
  output: 'export',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
