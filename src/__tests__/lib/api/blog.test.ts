import { getAllBlogs, getBlogBySlug, getRelatedBlogs, calculateReadingTime, formatDate } from '@/lib/api/blog';

describe('Blog API Library', () => {
  it('should return all blogs', () => {
    const list = getAllBlogs();
    expect(list.length).toBeGreaterThan(0);
    expect(list[0]).toHaveProperty('title');
    expect(list[0]).toHaveProperty('slug');
  });

  it('should find a blog by slug and return undefined if not found', () => {
    const list = getAllBlogs();
    const slug = list[0].slug;
    const blog = getBlogBySlug(slug);
    expect(blog).toBeDefined();
    expect(blog?.slug).toBe(slug);

    const nonExistent = getBlogBySlug('this-slug-does-not-exist');
    expect(nonExistent).toBeUndefined();
  });

  it('should get related blogs excluding the current blog and matching limits', () => {
    const list = getAllBlogs();
    const slug = list[0].slug;
    
    const related = getRelatedBlogs(slug, 2);
    expect(related.length).toBeLessThanOrEqual(2);
    expect(related.some((b) => b.slug === slug)).toBe(false);

    // Test default limit parameter
    const relatedDefault = getRelatedBlogs(slug);
    expect(relatedDefault.length).toBeLessThanOrEqual(3);
  });

  describe('calculateReadingTime', () => {
    it('should calculate reading time correctly based on word count', () => {
      // 150 words = 1 min
      const content = 'word '.repeat(150).trim();
      expect(calculateReadingTime(content)).toBe(1);

      // 350 words = 2 min
      const content2 = 'word '.repeat(350).trim();
      expect(calculateReadingTime(content2)).toBe(2);

      // Empty content should return minimum 1 min
      expect(calculateReadingTime('')).toBe(1);
    });

    it('should strip HTML tags before calculating word count', () => {
      const content = '<div>' + '<span>word</span> '.repeat(150).trim() + '</div>';
      expect(calculateReadingTime(content)).toBe(1);
    });
  });

  describe('formatDate', () => {
    it('should format a date string to a human readable format', () => {
      const dateStr = '2026-06-15';
      const formatted = formatDate(dateStr);
      expect(formatted).toContain('June 15, 2026');
    });
  });
});
