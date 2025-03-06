#!/usr/bin/env node

/**
 * SEO Check Script
 *
 * This script checks for common SEO issues in the codebase:
 * - Missing alt attributes on images
 * - Missing meta descriptions
 * - Missing titles
 * - Missing canonical links
 * - Missing structured data
 * - Missing heading hierarchy
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const srcDir = path.resolve(__dirname, '../src');
const publicDir = path.resolve(__dirname, '../public');

console.log('🔍 Running SEO Check...');

// Check for missing alt attributes on images
console.log('\n📊 Checking for missing alt attributes on images...');
try {
  const grepResult = execSync(
    `grep -r "<img" ${srcDir} --include="*.tsx" --include="*.jsx" | grep -v "alt="`,
    { encoding: 'utf8' }
  );
  console.log('⚠️ Found images without alt attributes:');
  console.log(grepResult);
} catch (error) {
  if (error.status === 1) {
    console.log('✅ All images have alt attributes. Great job!');
  } else {
    console.error('Error checking alt attributes:', error.message);
  }
}

// Check for heading hierarchy in components
console.log('\n📊 Checking heading hierarchy...');
try {
  const h1Count = execSync(`grep -r "<h1" ${srcDir} --include="*.tsx" --include="*.jsx" | wc -l`, {
    encoding: 'utf8',
  }).trim();
  console.log(`Found ${h1Count} h1 tags in the codebase.`);

  if (h1Count > 10) {
    console.log('⚠️ There may be too many H1 tags. Each page should have only one H1 tag.');
  } else {
    console.log('✅ H1 tag count looks reasonable.');
  }
} catch (error) {
  console.error('Error checking heading hierarchy:', error.message);
}

// Check for PageMeta component usage
console.log('\n📊 Checking for PageMeta usage in page components...');
try {
  const pageFiles = execSync(`find ${srcDir}/pages -name "*.tsx" -o -name "*.jsx"`, {
    encoding: 'utf8',
  })
    .trim()
    .split('\n');

  let missingMetaPages = [];
  for (const pageFile of pageFiles) {
    if (pageFile) {
      const content = fs.readFileSync(pageFile, 'utf8');
      if (!content.includes('PageMeta')) {
        missingMetaPages.push(path.basename(pageFile));
      }
    }
  }

  if (missingMetaPages.length > 0) {
    console.log('⚠️ The following pages are missing PageMeta component:');
    console.log(missingMetaPages.join('\n'));
    console.log('Consider adding PageMeta to these pages for better SEO.');
  } else {
    console.log('✅ All page components are using PageMeta. Great job!');
  }
} catch (error) {
  console.error('Error checking PageMeta usage:', error.message);
}

// Check sitemap.xml
console.log('\n📊 Checking sitemap.xml...');
const sitemapPath = path.join(publicDir, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  console.log('✅ sitemap.xml exists.');

  // Check if all routes are in sitemap
  try {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    const routerPath = path.join(srcDir, 'router.tsx');
    const routerContent = fs.readFileSync(routerPath, 'utf8');

    // Extract routes from router.tsx using regex
    const routeRegex = /<Route\s+path="([^"]+)"/g;
    let match;
    let missingRoutes = [];

    while ((match = routeRegex.exec(routerContent)) !== null) {
      const route = match[1];
      if (route !== '*' && !sitemapContent.includes(`https://seedao.xyz${route}`)) {
        missingRoutes.push(route);
      }
    }

    if (missingRoutes.length > 0) {
      console.log('⚠️ The following routes are missing from sitemap.xml:');
      console.log(missingRoutes.join('\n'));
      console.log('Consider adding these routes to your sitemap.');
    } else {
      console.log('✅ All routes are included in the sitemap.');
    }
  } catch (error) {
    console.error('Error checking routes in sitemap:', error.message);
  }
} else {
  console.log('⚠️ sitemap.xml does not exist. Consider generating one.');
}

// Check robots.txt
console.log('\n📊 Checking robots.txt...');
const robotsPath = path.join(publicDir, 'robots.txt');
if (fs.existsSync(robotsPath)) {
  console.log('✅ robots.txt exists.');

  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  if (!robotsContent.includes('Sitemap:')) {
    console.log(
      '⚠️ robots.txt does not reference the sitemap. Consider adding a Sitemap: directive.'
    );
  } else {
    console.log('✅ robots.txt references the sitemap.');
  }
} else {
  console.log('⚠️ robots.txt does not exist. Consider creating one.');
}

console.log('\n✨ SEO Check completed!');
console.log(
  'Remember to regularly check your website with tools like Lighthouse, PageSpeed Insights, and Google Search Console for more comprehensive SEO analysis.'
);
