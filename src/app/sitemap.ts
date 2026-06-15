import { MetadataRoute } from 'next';
import { getAllBlogs } from '@/lib/api/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://www.udhary.com';

  // Core pages
  const staticRoutes = [
    '',
    '/about-us',
    '/apply',
    '/award',
    '/blog',
    '/career',
    '/contact-us',
    '/disclaimer',
    '/emi-calculator',
    '/faqs',
    '/gallery',
    '/knowledge-center',
    '/privacy-policy',
    '/refund-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route === '/apply' || route === '/contact-us' ? 0.9 : 0.8,
  }));

  // Dynamic Blog pages
  const blogs = getAllBlogs().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    // If the post has a date, use it; otherwise use the current date
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogs];
}
