/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,

  // Tell Next to emit a static-exportable site:
  output: 'export',
  // Optional but recommended for clean URLs on GitHub Pages:
  trailingSlash: true,

  images: {
    domains: ['v0.blob.com'], // your external image host
  },

  // If you're deploying to https://adavyas.github.io (a USER site),
  // you _do not_ need a basePath. If this were a project page
  // (username.github.io/repo-name), you'd add:
  // basePath: '/repo-name',
  // assetPrefix: '/repo-name/',
};

module.exports = nextConfig;
