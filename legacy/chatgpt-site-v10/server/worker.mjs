// STATIC_ASSETS is generated from public files by scripts/build-worker.py.
const STATIC_ASSETS = /*__ASSETS__*/ {};

export default {
  async fetch(request) {
    const url = new URL(request.url);
    // Cached pages must reload instead of using the retired mail relay.
    if (url.pathname === '/api/contact') return Response.json({ ok: false, code: 'reload_required' }, { status: 410, headers: { 'Cache-Control': 'no-store' } });
    if (!['GET', 'HEAD'].includes(request.method)) return new Response('Method not allowed', { status: 405 });
    const pathname = url.pathname;
    if (pathname === '/en' || pathname === '/es') return Response.redirect(`${url.origin}${pathname}/`, 308);
    const file = STATIC_ASSETS[pathname.endsWith('/') ? pathname + 'index.html' : pathname];
    if (!file) return new Response('Not found', { status: 404 });
    const body = request.method === 'HEAD' ? null : Uint8Array.from(atob(file.body), (char) => char.charCodeAt(0));
    return new Response(body, {
      headers: {
        'Content-Type': file.type,
        'Cache-Control': 'no-cache',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Content-Security-Policy': "default-src 'self'; img-src 'self' data:; script-src 'self'; style-src 'self'; connect-src 'self'; base-uri 'none'; form-action 'self' https://formsubmit.co; frame-ancestors 'self' https://chatgpt.com"
      }
    });
  }
};
