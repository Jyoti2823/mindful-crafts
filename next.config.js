/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mindshant',
  assetPrefix: '/mindshant/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Disable server-side features not supported in static export
  experimental: {},
}

module.exports = nextConfig
