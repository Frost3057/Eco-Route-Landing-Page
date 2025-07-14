/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|jpeg|svg)$/i,
      type: 'asset/resource'
    })
    return config
  },
}

export default nextConfig
