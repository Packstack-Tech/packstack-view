module.exports = {
    siteUrl: 'https://packstack.io',
    generateRobotsTxt: true,
    exclude: ['/server-sitemap.xml'],
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://packstack.io/server-sitemap.xml',
      ],
    },
  }