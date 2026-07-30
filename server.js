'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname);
const port = Number(process.env.PORT || 8787);
const host = process.env.HOST || '127.0.0.1';

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.wav': 'audio/wav',
  '.mp3': 'audio/mpeg'
};

function sendText(res, statusCode, message) {
  res.writeHead(statusCode, {
    'Content-Type': 'text/plain; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff'
  });
  res.end(message);
}

function resolveRequestedFile(requestUrl) {
  let pathname;

  try {
    pathname = decodeURIComponent(new URL(requestUrl, 'http://localhost').pathname);
  } catch (_) {
    return null;
  }

  const relativePath = pathname === '/'
    ? 'index.html'
    : pathname.replace(/^[/\\]+/, '');

  const filePath = path.resolve(root, relativePath);
  const insideRoot = filePath === root || filePath.startsWith(root + path.sep);

  return insideRoot ? filePath : null;
}

const server = http.createServer((req, res) => {
  if (!['GET', 'HEAD'].includes(req.method || 'GET')) {
    sendText(res, 405, 'Method not allowed');
    return;
  }

  const filePath = resolveRequestedFile(req.url || '/');

  if (!filePath) {
    sendText(res, 403, 'Forbidden');
    return;
  }

  fs.stat(filePath, (statError, stats) => {
    if (statError) {
      sendText(res, statError.code === 'ENOENT' ? 404 : 500,
        statError.code === 'ENOENT' ? 'Not found' : 'Server error');
      return;
    }

    const finalPath = stats.isDirectory()
      ? path.join(filePath, 'index.html')
      : filePath;

    fs.readFile(finalPath, (readError, data) => {
      if (readError) {
        sendText(res, readError.code === 'ENOENT' ? 404 : 500,
          readError.code === 'ENOENT' ? 'Not found' : 'Server error');
        return;
      }

      res.writeHead(200, {
        'Content-Type': mimeTypes[path.extname(finalPath).toLowerCase()]
          || 'application/octet-stream',
        'Cache-Control': 'no-store',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'no-referrer'
      });

      if (req.method === 'HEAD') {
        res.end();
        return;
      }

      res.end(data);
    });
  });
});

server.on('error', error => {
  console.error(`Could not start KeyLock: ${error.message}`);
  process.exitCode = 1;
});

server.listen(port, host, () => {
  console.log('');
  console.log('KeyLock V13 is running.');
  console.log(`Open: http://localhost:${port}`);
  console.log('Press Ctrl+C to stop the server.');
  console.log('');
});
