import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUTPUT_DIR = path.resolve('showcase_images', 'raw_captures');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // 1. MacBook Hero Capture (1512 x 982 - MacBook 14" retina aspect)
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'macbook_home.png') });

  // 2. iPad Tablet Capture (820 x 1180)
  await page.setViewport({ width: 820, height: 1180, deviceScaleFactor: 2 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'ipad_home.png') });

  // 3. iPhone Mobile Capture (393 x 852 - iPhone 15 Pro)
  await page.setViewport({ width: 393, height: 852, deviceScaleFactor: 2 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'iphone_home.png') });

  // Route captures for section slides
  const sections = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'skills', path: '/skills' },
    { name: 'projects', path: '/projects' },
    { name: 'experience', path: '/experience' },
    { name: 'contact', path: '/contact' }
  ];

  for (const s of sections) {
    // Desktop capture
    await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 2 });
    await page.goto(`http://localhost:5173${s.path}`, { waitUntil: 'networkidle0' });
    await page.screenshot({ path: path.join(OUTPUT_DIR, `desktop_${s.name}.png`) });

    // Mobile capture
    await page.setViewport({ width: 393, height: 852, deviceScaleFactor: 2 });
    await page.goto(`http://localhost:5173${s.path}`, { waitUntil: 'networkidle0' });
    await page.screenshot({ path: path.join(OUTPUT_DIR, `mobile_${s.name}.png`) });
  }

  await browser.close();
  console.log('Captures completed successfully.');
}

capture().catch(console.error);

