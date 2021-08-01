module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:slug(\d{1,})/:path*',
        destination: '/pack/:slug*/:path*', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
}
