/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/csr',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
