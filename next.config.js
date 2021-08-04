module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/register',
        destination: 'https://app.packstack.io/register',
        permanent: true,
        basePath: false
      },
      {
        source: '/login',
        destination: 'https://app.packstack.io',
        permanent: true,
        basePath: false
      },
      {
        source: '/:slug(\\d{1,})/:path*',
        destination: '/pack/:slug*/:path*', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
}
