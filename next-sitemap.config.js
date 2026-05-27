/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://nueera.io',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/coming-soon'],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/coming-soon'],
      },
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq per page
    const customConfig = {
      '/': { changefreq: 'daily', priority: 1.0 },
      '/services': { changefreq: 'weekly', priority: 0.9 },
      '/pricing': { changefreq: 'weekly', priority: 0.9 },
      '/about': { changefreq: 'monthly', priority: 0.8 },
      '/portfolio': { changefreq: 'weekly', priority: 0.8 },
      '/case-study': { changefreq: 'weekly', priority: 0.8 },
      '/blog': { changefreq: 'daily', priority: 0.8 },
      '/blog/post': { changefreq: 'daily', priority: 0.7 },
      '/contact': { changefreq: 'monthly', priority: 0.7 },
      '/team': { changefreq: 'monthly', priority: 0.6 },
      '/testimonials': { changefreq: 'monthly', priority: 0.6 },
      '/help-center': { changefreq: 'monthly', priority: 0.5 },
      '/privacy': { changefreq: 'yearly', priority: 0.3 },
      '/terms': { changefreq: 'yearly', priority: 0.3 },
    };

    const override = customConfig[path] || {};

    return {
      loc: path,
      changefreq: override.changefreq || config.changefreq,
      priority: override.priority || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async () => {
    return [];
  },
};
