/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_URL: 'http://localhost:3000'
  },
  images: {
    domains: ['moacyrsantana.vercel.app', 'localhost', '*']
  }
}

module.exports = nextConfig
