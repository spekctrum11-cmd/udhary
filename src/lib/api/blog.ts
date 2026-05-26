import { blogs, BlogPost } from '@/data/blogs';

export function getAllBlogs(): BlogPost[] {
  return blogs;
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((b) => b.slug === slug);
}

export function getRelatedBlogs(currentSlug: string, limit: number = 3): BlogPost[] {
  return blogs.filter((b) => b.slug !== currentSlug).slice(0, limit);
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  // Strip HTML tags to get pure text length
  const plainText = content.replace(/<[^>]*>?/gm, '');
  const wordCount = plainText.split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
}
