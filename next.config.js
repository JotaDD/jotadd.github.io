/** @type {import('next').NextConfig} */
const {i18n} =require('./next-i18next.config');
const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**'
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '**'
      }
    ]
  },

};

module.exports = nextConfig;
