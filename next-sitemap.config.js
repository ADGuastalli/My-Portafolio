/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://porfolio-guastalli-alexis.vercel.app",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 1.0,
  sitemapSize: 5000,
  exclude: ["/dashboard"],
};
