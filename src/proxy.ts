import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { checkRateLimit } from './lib/security';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only apply strict validation and rate limiting on API endpoints
  if (pathname.startsWith('/api/')) {
    
    // 1. Validate Payload Size (DoS Mitigation)
    // We restrict payloads to a maximum of 10 KB to prevent server resource exhaustion.
    const contentLengthHeader = request.headers.get('content-length');
    if (contentLengthHeader) {
      const contentLength = parseInt(contentLengthHeader, 10);
      if (!isNaN(contentLength) && contentLength > 10240) { // 10 KB
        return new NextResponse(
          JSON.stringify({ error: 'Payload Too Large. Limit is 10KB.' }),
          {
            status: 413,
            headers: { 'Content-Type': 'application/json' },
          }
        );
      }
    }

    // 2. Rate Limiting (Brute Force & DoS Protection)
    // Retrieve client IP address
    const ip = (request as any).ip || request.headers.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1';
    
    // 10 requests per minute per IP address
    const rateLimit = checkRateLimit(ip, 10, 60000);
    if (!rateLimit.isAllowed) {
      return new NextResponse(
        JSON.stringify({ error: 'Too many requests. Please try again in a minute.' }),
        {
          status: 429,
          headers: { 
            'Content-Type': 'application/json',
            'Retry-After': '60'
          },
        }
      );
    }

    // 3. CSRF Validation (Cross-Site Request Forgery Protection)
    // State-changing POST requests are required to match the host origin or referrer.
    const origin = request.headers.get('origin');
    const referer = request.headers.get('referer');
    const requestHost = request.nextUrl.host;

    if (request.method === 'POST') {
      if (origin) {
        try {
          const originUrl = new URL(origin);
          if (originUrl.host !== requestHost) {
            return new NextResponse(
              JSON.stringify({ error: 'CSRF Protection: Forbidden origin.' }),
              { status: 403, headers: { 'Content-Type': 'application/json' } }
            );
          }
        } catch {
          return new NextResponse(
            JSON.stringify({ error: 'CSRF Protection: Invalid origin header.' }),
            { status: 403, headers: { 'Content-Type': 'application/json' } }
          );
        }
      } else if (referer) {
        try {
          const refererUrl = new URL(referer);
          if (refererUrl.host !== requestHost) {
            return new NextResponse(
              JSON.stringify({ error: 'CSRF Protection: Forbidden referer.' }),
              { status: 403, headers: { 'Content-Type': 'application/json' } }
            );
          }
        } catch {
          return new NextResponse(
            JSON.stringify({ error: 'CSRF Protection: Invalid referer header.' }),
            { status: 403, headers: { 'Content-Type': 'application/json' } }
          );
        }
      } else {
        return new NextResponse(
          JSON.stringify({ error: 'CSRF Protection: Origin or Referer header required for state-changing operations.' }),
          { status: 403, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }
  }

  return NextResponse.next();
}

// Ensure proxy runs only for API endpoints to maximize performance
export const config = {
  matcher: '/api/:path*',
};

export default proxy;
