import { NextRequest } from 'next/server';
import defaultProxy, { proxy, config } from '@/proxy';
import { checkRateLimit } from '@/lib/security';

jest.mock('@/lib/security', () => ({
  checkRateLimit: jest.fn(),
}));

describe('Middleware Proxy Handler', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (checkRateLimit as jest.Mock).mockReturnValue({ isAllowed: true, currentCount: 1 });
  });

  const createRequest = (urlPath: string, options: any = {}) => {
    const url = `http://localhost${urlPath}`;
    const headers = new Headers(options.headers || {});
    return new NextRequest(url, {
      method: options.method || 'GET',
      headers,
      body: options.body,
    });
  };

  it('should ignore non-API routes and pass-through directly', async () => {
    const request = createRequest('/about-us');
    const response = await proxy(request);
    
    // NextResponse.next() typically returns a specific response object
    expect(response.status).toBe(200);
  });

  it('should block API requests with Content-Length greater than 10KB (413 Payload Too Large)', async () => {
    const request = createRequest('/api/apply', {
      method: 'POST',
      headers: {
        'content-length': '20000',
      },
    });

    const response = await proxy(request);
    expect(response.status).toBe(413);
    
    const body = await response.json();
    expect(body.error).toContain('Payload Too Large');
  });

  it('should block API requests that hit the rate limit (429 Too Many Requests)', async () => {
    (checkRateLimit as jest.Mock).mockReturnValueOnce({ isAllowed: false, currentCount: 11 });

    const request = createRequest('/api/apply', {
      method: 'GET',
    });

    const response = await proxy(request);
    expect(response.status).toBe(429);
    
    const body = await response.json();
    expect(body.error).toContain('Too many requests');
    expect(response.headers.get('Retry-After')).toBe('60');
  });

  describe('CSRF Protections on POST API requests', () => {
    it('should block request if no Origin or Referer header is present', async () => {
      const request = createRequest('/api/apply', {
        method: 'POST',
      });

      const response = await proxy(request);
      expect(response.status).toBe(403);
      
      const body = await response.json();
      expect(body.error).toContain('Origin or Referer header required');
    });

    it('should block request if Origin host does not match Request host', async () => {
      const request = createRequest('/api/apply', {
        method: 'POST',
        headers: {
          'origin': 'http://attacker-site.com',
        },
      });

      const response = await proxy(request);
      expect(response.status).toBe(403);
      
      const body = await response.json();
      expect(body.error).toContain('Forbidden origin');
    });

    it('should block request if Origin header is malformed', async () => {
      const request = createRequest('/api/apply', {
        method: 'POST',
        headers: {
          'origin': 'not-a-valid-url',
        },
      });

      const response = await proxy(request);
      expect(response.status).toBe(403);
      
      const body = await response.json();
      expect(body.error).toContain('Invalid origin header');
    });

    it('should block request if Referer host does not match Request host when Origin is absent', async () => {
      const request = createRequest('/api/apply', {
        method: 'POST',
        headers: {
          'referer': 'http://attacker-site.com/some-path',
        },
      });

      const response = await proxy(request);
      expect(response.status).toBe(403);
      
      const body = await response.json();
      expect(body.error).toContain('Forbidden referer');
    });

    it('should block request if Referer header is malformed', async () => {
      const request = createRequest('/api/apply', {
        method: 'POST',
        headers: {
          'referer': 'invalid-referer-url',
        },
      });

      const response = await proxy(request);
      expect(response.status).toBe(403);
      
      const body = await response.json();
      expect(body.error).toContain('Invalid referer header');
    });

    it('should pass-through if Origin matches Request host', async () => {
      const request = createRequest('/api/apply', {
        method: 'POST',
        headers: {
          'origin': 'http://localhost',
        },
      });

      const response = await proxy(request);
      expect(response.status).toBe(200);
    });

    it('should pass-through if Referer matches Request host and Origin is absent', async () => {
      const request = createRequest('/api/apply', {
        method: 'POST',
        headers: {
          'referer': 'http://localhost/apply-form',
        },
      });

      const response = await proxy(request);
      expect(response.status).toBe(200);
    });
  });

  describe('Middleware Proxy Config', () => {
    it('should export config with matcher', () => {
      expect(config).toBeDefined();
      expect(config.matcher).toBe('/api/:path*');
    });

    it('should export proxy as default', () => {
      expect(defaultProxy).toBe(proxy);
    });
  });
});
