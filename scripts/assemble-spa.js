#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function exists(p) {
  try {
    return fs.existsSync(p);
  } catch {
    return false;
  }
}

function copyRecursive(src, dest) {
  if (!exists(src)) return false;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!exists(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    const destDir = path.dirname(dest);
    if (!exists(destDir)) fs.mkdirSync(destDir, { recursive: true });
    fs.copyFileSync(src, dest);
  }
  return true;
}

function findClientDir() {
  const candidates = [
    'dist',
    'dist/client',
    'build',
    'build/client',
    '.output/public',
    '.output/static',
    'client',
    'public'
  ];

  for (const c of candidates) {
    const p = path.resolve(c);
    if (exists(path.join(p, 'index.html'))) return p;
  }
  // fallback: search recursively for first index.html within 2 levels
  const root = process.cwd();
  const entries = fs.readdirSync(root, { withFileTypes: true });
  for (const e of entries) {
    if (e.isDirectory()) {
      const p1 = path.join(root, e.name);
      if (exists(path.join(p1, 'index.html'))) return p1;
      const sub = fs.readdirSync(p1, { withFileTypes: true });
      for (const s of sub) {
        if (s.isDirectory()) {
          const p2 = path.join(p1, s.name);
          if (exists(path.join(p2, 'index.html'))) return p2;
        }
      }
    }
  }
  return null;
}

function writeHtaccess(dest) {
  const content = `# SPA rewrite and basic caching
RewriteEngine On
RewriteBase /

# If the requested resource is not a file or directory, rewrite to index.html
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [L,QSA]

# Prevent directory listing
Options -Indexes

# Basic caching rules
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access plus 0 seconds"
  ExpiresByType text/css "access plus 1 week"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType image/* "access plus 1 month"
</IfModule>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript application/json
</IfModule>
`;
  fs.writeFileSync(path.join(dest, '.htaccess'), content, 'utf8');
}

async function main() {
  console.log('Looking for client build directory...');
  const clientDir = findClientDir();
  if (!clientDir) {
    console.error('Could not find a client build directory containing index.html.\nMake sure `npm run build` produced a client bundle or adjust the build output.');
    process.exit(2);
  }
  console.log('Found client directory:', clientDir);

  const outDir = path.resolve('dist');
  // remove existing outDir
  if (exists(outDir)) {
    console.log('Removing existing', outDir);
    fs.rmSync(outDir, { recursive: true, force: true });
  }
  fs.mkdirSync(outDir, { recursive: true });

  console.log('Copying client files to', outDir);
  copyRecursive(clientDir, outDir);

  // Ensure index.html is present
  if (!exists(path.join(outDir, 'index.html'))) {
    console.error('index.html not found in assembled dist. Aborting.');
    process.exit(3);
  }

  console.log('Writing .htaccess to dist');
  writeHtaccess(outDir);

  console.log('SPA assembly complete. Upload the contents of', outDir, 'to your cPanel subdomain document root.');
}

main();
