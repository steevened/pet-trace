/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    BASE_URL:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3001/api'
        : 'http://localhost:3001/api',
  },
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'images.unsplash.com',
      'unsplash.com',
      'images.pexels.com',
    ],
  },
};

module.exports = nextConfig;
