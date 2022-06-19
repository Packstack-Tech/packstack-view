module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/register',
        destination: 'https://packstack.io/register',
        permanent: true,
        basePath: false
      },
      {
        source: '/login',
        destination: 'https://packstack.io/login',
        permanent: true,
        basePath: false
      },
      {
        source: '/',
        destination: 'https://packstack.io',
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
