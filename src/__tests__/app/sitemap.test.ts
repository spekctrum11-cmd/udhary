import sitemap from '@/app/sitemap';
import { getAllBlogs } from '@/lib/api/blog';

jest.mock('@/lib/api/blog', () => ({
  getAllBlogs: jest.fn(),
}));

describe('sitemap metadata route', () => {
  const originalEnv = process.env.NODE_ENV;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    process.env.NODE_ENV = originalEnv;
  });

  it('should return correct sitemap array in development mode', () => {
    process.env.NODE_ENV = 'development';
    
    // Mock blog API to return one blog with a date, and one without a date to cover both branches
    (getAllBlogs as jest.Mock).mockReturnValue([
      { slug: 'post-with-date', title: 'Post 1', date: '2026-06-15', content: 'content' } as any,
      { slug: 'post-without-date', title: 'Post 2', date: undefined, content: 'content' } as any,
    ]);

    const result = sitemap();
    
    // Check that we have static routes + blog pages
    expect(result.length).toBeGreaterThan(14);
    
    // Check base URLs
    expect(result[0].url).toContain('http://localhost:3000');
    
    // Check priority checks
    const homeEntry = result.find((item) => item.url === 'http://localhost:3000');
    expect(homeEntry?.priority).toBe(1.0);

    const applyEntry = result.find((item) => item.url === 'http://localhost:3000/apply');
    expect(applyEntry?.priority).toBe(0.9);

    const aboutEntry = result.find((item) => item.url === 'http://localhost:3000/about-us');
    expect(aboutEntry?.priority).toBe(0.8);
  });

  it('should return production base URLs in production mode', () => {
    process.env.NODE_ENV = 'production';
    (getAllBlogs as jest.Mock).mockReturnValue([]);
    const result = sitemap();
    expect(result[0].url).toContain('https://www.udhary.com');
  });
});
