#!/usr/bin/env node
// Download lambda.ai assets to public/

import { promises as fs } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import https from 'node:https';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const assets = [
  // GPU product images
  { url: 'https://lambda.ai/hubfs/VR200.jpg', dest: 'public/images/gpu/vr200.jpg' },
  { url: 'https://lambda.ai/hubfs/gb300.png', dest: 'public/images/gpu/gb300.png' },
  { url: 'https://lambda.ai/hubfs/NVIDIA%20HGX%20B300%20(1).png', dest: 'public/images/gpu/b300.png' },
  { url: 'https://lambda.ai/hubfs/b200.png', dest: 'public/images/gpu/b200.png' },
  // Lambda logo + social icons
  { url: 'https://lambda.ai/hubfs/raw_assets/Lambda%20Marketing%20Website/122/js_client_assets/assets/logo-white-amFAN7ru.svg', dest: 'public/images/logo-white.svg' },
  { url: 'https://lambda.ai/hubfs/raw_assets/Lambda%20Marketing%20Website/122/js_client_assets/assets/linkedin-608YWfcb.svg', dest: 'public/images/social/linkedin.svg' },
  { url: 'https://lambda.ai/hubfs/raw_assets/Lambda%20Marketing%20Website/122/js_client_assets/assets/x-Dm1IIASF.svg', dest: 'public/images/social/x.svg' },
  { url: 'https://lambda.ai/hubfs/raw_assets/Lambda%20Marketing%20Website/122/js_client_assets/assets/youtube-BUg7SWc3.svg', dest: 'public/images/social/youtube.svg' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, async (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve, reject);
      }
      if (res.statusCode !== 200) return reject(new Error(`${url} → ${res.statusCode}`));
      await fs.mkdir(dirname(dest), { recursive: true });
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', async () => {
        await fs.writeFile(dest, Buffer.concat(chunks));
        console.log(`✓ ${dest} (${(Buffer.concat(chunks).length / 1024).toFixed(1)} KB)`);
        resolve();
      });
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function runBatched(items, size) {
  for (let i = 0; i < items.length; i += size) {
    const batch = items.slice(i, i + size);
    await Promise.all(batch.map((a) => download(a.url, join(ROOT, a.dest)).catch((e) => console.error(`✗ ${a.url}: ${e.message}`))));
  }
}

await runBatched(assets, 4);
console.log('\nDone.');
