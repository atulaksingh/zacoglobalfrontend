// next.config.js
const withVideos = require('next-videos');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withVideos], {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'django',
        port: '8000',
        pathname: '/media/**',
      },
    ],
  },
});
