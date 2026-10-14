import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const CAPTURES_DIR = path.resolve('presentation_showcase', 'raw_captures');

if (!fs.existsSync(CAPTURES_DIR)) {
  fs.mkdirSync(CAPTURES_DIR, { recursive: true });
}

const routes = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'skills', path: '/skills' },
  { name: 'projects', path: '/projects' },
  { name: 'experience', path: '/experience' },
  { name: 'contact', path: '/contact' }
];

async function captureAll() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  for (const r of routes) {
    console.log(`Capturing ${r.name}...`);
    // Desktop: 1440x900 viewport, 2x scale factor for Retina sharpness
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
    await page.goto(`http://localhost:5173${r.path}`, { waitUntil: 'networkidle0' });
    await new Promise(res => setTimeout(res, 2000));
    await page.screenshot({ path: path.join(CAPTURES_DIR, `desktop_${r.name}.png`) });

    // Mobile: 393x852 (iPhone 15 Pro viewport), 2x scale factor
    await page.setViewport({ width: 393, height: 852, deviceScaleFactor: 2 });
    await page.goto(`http://localhost:5173${r.path}`, { waitUntil: 'networkidle0' });
    await new Promise(res => setTimeout(res, 2000));
    await page.screenshot({ path: path.join(CAPTURES_DIR, `mobile_${r.name}.png`) });
  }

  await browser.close();
  console.log('All screen captures finished successfully!');
}

captureAll().catch(console.error);

