// https://github.com/iamvishnusankar/next-sitemap
const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://codybrunner.com'
    : 'localhost:3000'

module.exports = {
  changefreq: 'weekly',
  exclude: ['/api/*', '/server-sitemap.xml'],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [`${baseUrl}/server-sitemap.xml`],
    policies: [
      {
        allow: '/',
        userAgent: '*',
      },
      {
        disallow: '/api',
        userAgent: '*',
      },
    ],
  },
  siteUrl: baseUrl,
}
