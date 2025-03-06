const fs = require('fs');
const path = require('path');

// Define the base URL of your website
const baseUrl = 'https://seedao.xyz';

// Define your routes with their priorities and change frequencies
const routes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/intro', priority: 0.8, changefreq: 'monthly' },
  { path: '/journey', priority: 0.8, changefreq: 'monthly' },
  { path: '/build', priority: 0.8, changefreq: 'monthly' },
  { path: '/privacy', priority: 0.5, changefreq: 'yearly' },
  { path: '/tos', priority: 0.5, changefreq: 'yearly' },
];

// Get current date in YYYY-MM-DD format for lastmod
const today = new Date().toISOString().split('T')[0];

// Generate sitemap XML content
let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

// Add each route to the sitemap
routes.forEach((route) => {
  sitemap += '  <url>\n';
  sitemap += `    <loc>${baseUrl}${route.path}</loc>\n`;
  sitemap += `    <lastmod>${today}</lastmod>\n`;
  sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`;
  sitemap += `    <priority>${route.priority}</priority>\n`;
  sitemap += '  </url>\n';
});

sitemap += '</urlset>';

// Write the sitemap to the public directory
const publicDir = path.resolve(__dirname, '../public');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

console.log('Sitemap generated successfully!');
