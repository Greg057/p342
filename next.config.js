/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/p342' : '',
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
}

module.exports = nextConfig