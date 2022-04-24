/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['pt'],
    defaultLocale: 'pt'
  },
  images: {
    domains: ['tailwindui.com']
  }
}

module.exports = nextConfig
