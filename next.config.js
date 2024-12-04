/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'techcrunch.com',
      'venturebeat.com',
      'arstechnica.com',
      'nytimes.com',
      'technologyreview.com'
    ],
  }
}

module.exports = nextConfig
