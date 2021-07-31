module.exports = {
    siteUrl: 'https://packstack.io',
    generateRobotsTxt: true,
    exclude: ['/server-sitemap.xml'],
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://example.com/server-sitemap.xml',
      ],
    },
  }