/** HTTP 410 for permanently retired specialist-site URLs. */
export default function handler(request, response) {
  response.statusCode = 410;
  response.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
  response.setHeader('Content-Type', 'text/html; charset=utf-8');
  response.end(
    '<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Gone</title></head><body><h1>Gone</h1><p>This page has been permanently removed from this website.</p></body></html>',
  );
}
