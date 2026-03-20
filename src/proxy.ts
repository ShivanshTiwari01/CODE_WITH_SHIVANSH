import { NextResponse } from 'next/server';
import type { NextRequest, NextFetchEvent } from 'next/server';

export function proxy(request: NextRequest, event: NextFetchEvent) {
  if (request.nextUrl.pathname === '/') {
    try {
      const apiUrl = new URL('/api/track-visit', request.url);

      const trackingPromise = fetch(apiUrl.toString(), {
        method: 'POST',
        headers: {
          'user-agent': request.headers.get('user-agent') || '',
          'x-forwarded-for': request.headers.get('x-forwarded-for') || '',
          'cf-connecting-ip': request.headers.get('cf-connecting-ip') || '',
          'x-real-ip': request.headers.get('x-real-ip') || '',
        },
      }).catch((error) => {
        console.error('Proxy tracking error (ignored):', error);
      });

      event.waitUntil(trackingPromise);
    } catch (e) {
      console.error('Proxy error (ignored):', e);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/',
};
