import robots from '@/app/robots';

describe('robots metadata route', () => {
  const originalEnv = process.env.NODE_ENV;

  afterEach(() => {
    (process.env as any).NODE_ENV = originalEnv;
  });

  it('should return dev localhost sitemap in development mode', () => {
    (process.env as any).NODE_ENV = 'development';
    const result = robots();
    expect(result.sitemap).toBe('http://localhost:3000/sitemap.xml');
    expect(result.rules).toEqual({
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/static/'],
    });
  });

  it('should return production sitemap in production mode', () => {
    (process.env as any).NODE_ENV = 'production';
    const result = robots();
    expect(result.sitemap).toBe('https://www.udhary.com/sitemap.xml');
  });
});
