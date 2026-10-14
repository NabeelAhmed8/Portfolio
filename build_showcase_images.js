import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const CAPTURES_DIR = path.resolve('showcase_images', 'raw_captures');
const OUTPUT_DIR = path.resolve('showcase_images');

function getBase64(filename) {
  const filePath = path.join(CAPTURES_DIR, filename);
  if (!fs.existsSync(filePath)) return '';
  const data = fs.readFileSync(filePath);
  return `data:image/png;base64,${data.toString('base64')}`;
}

const macbookHomeImg = getBase64('macbook_home.png');
const ipadHomeImg = getBase64('ipad_home.png');
const iphoneHomeImg = getBase64('iphone_home.png');

const desktopAboutImg = getBase64('desktop_about.png');
const desktopSkillsImg = getBase64('desktop_skills.png');
const desktopProjectsImg = getBase64('desktop_projects.png');
const desktopExperienceImg = getBase64('desktop_experience.png');
const desktopContactImg = getBase64('desktop_contact.png');

// Shared CSS styles
const baseStyles = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1080px;
    height: 1350px;
    background: #080808;
    color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 60px 50px 50px;
    background-image: 
      radial-gradient(circle at 50% 25%, #181818 0%, #080808 75%),
      linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 100% 100%, 40px 40px, 40px 40px;
  }

  .header-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #ffffff;
    padding-bottom: 16px;
    text-transform: uppercase;
  }
  .header-brand {
    font-size: 18px;
    font-weight: 900;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .header-tag {
    background: #ffffff;
    color: #000000;
    font-size: 12px;
    font-weight: 900;
    padding: 4px 10px;
    letter-spacing: 1.5px;
  }
  .header-meta {
    font-size: 12px;
    font-weight: 700;
    color: #a3a3a3;
    letter-spacing: 1px;
    font-family: monospace;
  }

  .footer-bar {
    border-top: 1px solid #262626;
    padding-top: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: #737373;
    font-family: monospace;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .footer-bar .left {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  .status-dot {
    width: 8px;
    height: 8px;
    background: #ffffff;
    display: inline-block;
  }

  /* MacBook Mockup Component */
  .macbook-wrap {
    width: 840px;
    margin: 0 auto;
    position: relative;
    filter: drop-shadow(0 40px 60px rgba(0,0,0,0.9));
  }
  .macbook-screen-lid {
    background: #171717;
    border: 2px solid #333333;
    border-radius: 18px 18px 0 0;
    padding: 12px 14px 0;
    position: relative;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.15);
  }
  .macbook-titlebar {
    height: 32px;
    background: #000000;
    border-bottom: 1px solid #262626;
    display: flex;
    align-items: center;
    padding: 0 12px;
    border-radius: 6px 6px 0 0;
    gap: 8px;
    position: relative;
  }
  .traffic-dots {
    display: flex;
    align-items: center;
    gap: 7px;
  }
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .dot-red { background: #FF5F56; }
  .dot-yellow { background: #FFBD2E; }
  .dot-green { background: #27C93F; }
  .browser-url {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 10px;
    font-family: monospace;
    color: #737373;
    background: #141414;
    padding: 3px 20px;
    border-radius: 4px;
    border: 1px solid #262626;
  }
  .macbook-display {
    width: 100%;
    height: 480px;
    background: #000000;
    overflow: hidden;
    position: relative;
  }
  .macbook-display img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    display: block;
  }
  .macbook-chassis {
    height: 18px;
    background: linear-gradient(to bottom, #2b2b2e, #1a1a1c);
    border-radius: 0 0 16px 16px;
    position: relative;
    box-shadow: 0 10px 25px rgba(0,0,0,0.8);
    border: 1px solid #333333;
    border-top: none;
  }
  .macbook-notch {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 130px;
    height: 5px;
    background: #0d0d0f;
    border-radius: 0 0 6px 6px;
  }

  /* iPad Mockup */
  .ipad-mockup {
    width: 440px;
    background: #141414;
    border: 2px solid #333333;
    border-radius: 24px;
    padding: 12px;
    filter: drop-shadow(0 30px 45px rgba(0,0,0,0.85));
    position: relative;
  }
  .ipad-screen {
    width: 100%;
    height: 460px;
    background: #000;
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid #262626;
  }
  .ipad-screen img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    display: block;
  }

  /* iPhone Mockup */
  .iphone-mockup {
    width: 250px;
    background: #171717;
    border: 2px solid #383838;
    border-radius: 42px;
    padding: 10px;
    filter: drop-shadow(0 35px 50px rgba(0,0,0,0.9));
    position: relative;
  }
  .iphone-screen {
    width: 100%;
    height: 480px;
    background: #000;
    border-radius: 34px;
    overflow: hidden;
    position: relative;
    border: 1px solid #222222;
  }
  .dynamic-island {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 82px;
    height: 22px;
    background: #000000;
    border-radius: 20px;
    z-index: 10;
  }
  .iphone-screen img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    display: block;
  }
`;

// Slide 1: 3 Devices Multi-Device Composition
function getSlide1Html() {
  return `<!DOCTYPE html>
<html>
<head><style>
${baseStyles}
.composition {
  position: relative;
  width: 100%;
  height: 960px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.laptop-pos {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
.ipad-pos {
  position: absolute;
  bottom: 40px;
  left: 20px;
  z-index: 3;
  transform: rotate(-3deg);
}
.iphone-pos {
  position: absolute;
  bottom: 20px;
  right: 60px;
  z-index: 4;
  transform: rotate(2deg);
}
.title-overlay {
  text-align: center;
  margin-top: 10px;
}
.title-overlay h1 {
  font-size: 32px;
  font-weight: 900;
  letter-spacing: -1px;
  text-transform: uppercase;
}
.title-overlay p {
  font-size: 14px;
  color: #a3a3a3;
  margin-top: 6px;
  font-family: monospace;
}
</style></head>
<body>
  <div class="header-bar">
    <div class="header-brand">
      <span class="header-tag">SHOWCASE 01</span>
      <span>RESPONSIVE ECOSYSTEM</span>
    </div>
    <div class="header-meta">NABEEL AHMED DHILLON • 2024</div>
  </div>

  <div class="composition">
    <!-- MacBook in Center Background -->
    <div class="laptop-pos macbook-wrap">
      <div class="macbook-screen-lid">
        <div class="macbook-titlebar">
          <div class="traffic-dots">
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
          </div>
          <div class="browser-url">nabeeldhillon.dev</div>
        </div>
        <div class="macbook-display" style="height: 470px;">
          <img src="${macbookHomeImg}" />
        </div>
      </div>
      <div class="macbook-chassis">
        <div class="macbook-notch"></div>
      </div>
    </div>

    <!-- iPad on the left foreground -->
    <div class="ipad-pos ipad-mockup">
      <div class="ipad-screen" style="height: 480px;">
        <img src="${ipadHomeImg}" />
      </div>
    </div>

    <!-- iPhone on the right foreground -->
    <div class="iphone-pos iphone-mockup">
      <div class="iphone-screen">
        <div class="dynamic-island"></div>
        <img src="${iphoneHomeImg}" />
      </div>
    </div>
  </div>

  <div class="footer-bar">
    <div class="left">
      <span><span class="status-dot"></span> ARCHITECTURAL BRUTALISM</span>
      <span>REACT • VITE • TAILWIND</span>
    </div>
    <div>FULL-STACK PORTFOLIO</div>
  </div>
</body>
</html>`;
}

// Individual Section Slides (Slides 2 to 7)
function getSectionSlideHtml({ slideNum, sectionTag, title, subtitle, desktopImg, desc }) {
  return `<!DOCTYPE html>
<html>
<head><style>
${baseStyles}
.section-body {
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 980px;
  justify-content: center;
}
.section-intro {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid #262626;
  padding-bottom: 24px;
}
.section-title-group h1 {
  font-size: 54px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -2px;
  line-height: 0.95;
}
.section-title-group p {
  font-size: 16px;
  color: #a3a3a3;
  margin-top: 10px;
  font-weight: 300;
  max-w: 600px;
}
.section-number {
  font-size: 64px;
  font-weight: 900;
  color: #262626;
  font-family: monospace;
  line-height: 1;
}

.showcase-stage {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.stage-laptop {
  width: 960px;
  filter: drop-shadow(0 35px 55px rgba(0,0,0,0.9));
}
.stage-laptop .macbook-display {
  height: 540px;
}
</style></head>
<body>
  <div class="header-bar">
    <div class="header-brand">
      <span class="header-tag">SECTION ${slideNum}</span>
      <span>${sectionTag}</span>
    </div>
    <div class="header-meta">NABEEL AHMED DHILLON</div>
  </div>

  <div class="section-body">
    <div class="section-intro">
      <div class="section-title-group">
        <h1>${title}</h1>
        <p>${desc}</p>
      </div>
      <div class="section-number">0${slideNum}</div>
    </div>

    <div class="showcase-stage">
      <div class="stage-laptop macbook-wrap">
        <div class="macbook-screen-lid">
          <div class="macbook-titlebar">
            <div class="traffic-dots">
              <span class="dot dot-red"></span>
              <span class="dot dot-yellow"></span>
              <span class="dot dot-green"></span>
            </div>
            <div class="browser-url">nabeeldhillon.dev/${sectionTag.toLowerCase()}</div>
          </div>
          <div class="macbook-display">
            <img src="${desktopImg}" />
          </div>
        </div>
        <div class="macbook-chassis">
          <div class="macbook-notch"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-bar">
    <div class="left">
      <span><span class="status-dot"></span> PURE MONOCHROME</span>
      <span>HIGH FIDELITY</span>
    </div>
    <div>${subtitle}</div>
  </div>
</body>
</html>`;
}

async function renderAllSlides() {
  console.log('Launching browser for slide rendering...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 2 });

  // 1. Master 3-Devices Showcase
  console.log('Rendering Slide 1: 3 Devices Ecosystem...');
  await page.setContent(getSlide1Html(), { waitUntil: 'load' });
  await page.screenshot({ path: path.join(OUTPUT_DIR, '01_Three_Devices_Showcase.jpg'), quality: 95, type: 'jpeg' });

  // 2. Hero Section Spotlight
  console.log('Rendering Slide 2: Hero Section...');
  await page.setContent(getSectionSlideHtml({
    slideNum: '1',
    sectionTag: 'HOME',
    title: 'Junior Full Stack Web Developer.',
    subtitle: 'HERO & ARCHITECTURAL FOUNDATION',
    desktopImg: macbookHomeImg,
    desc: 'Monumental typography, status telemetry, and raw architectural brutalism.'
  }), { waitUntil: 'load' });
  await page.screenshot({ path: path.join(OUTPUT_DIR, '02_Hero_Section_Showcase.jpg'), quality: 95, type: 'jpeg' });

  // 3. About Section
  console.log('Rendering Slide 3: About Section...');
  await page.setContent(getSectionSlideHtml({
    slideNum: '2',
    sectionTag: 'ABOUT',
    title: 'Profile & Philosophy.',
    subtitle: 'ENGINEERING PRINCIPLES & METRICS',
    desktopImg: desktopAboutImg,
    desc: 'Minimalist standards, core engineering ethos, and vital telemetry metrics.'
  }), { waitUntil: 'load' });
  await page.screenshot({ path: path.join(OUTPUT_DIR, '03_About_Section_Showcase.jpg'), quality: 95, type: 'jpeg' });

  // 4. Skills Section
  console.log('Rendering Slide 4: Skills Section...');
  await page.setContent(getSectionSlideHtml({
    slideNum: '3',
    sectionTag: 'SKILLS',
    title: 'Technical Arsenal.',
    subtitle: 'FULL STACK CAPABILITIES & TOOLS',
    desktopImg: desktopSkillsImg,
    desc: 'React, Tailwind CSS, Laravel, PHP, MySQL, and database architectures.'
  }), { waitUntil: 'load' });
  await page.screenshot({ path: path.join(OUTPUT_DIR, '04_Skills_Section_Showcase.jpg'), quality: 95, type: 'jpeg' });

  // 5. Projects Section
  console.log('Rendering Slide 5: Projects Section...');
  await page.setContent(getSectionSlideHtml({
    slideNum: '4',
    sectionTag: 'PROJECTS',
    title: 'Selected Works.',
    subtitle: 'PRODUCTION PLATFORMS & APPS',
    desktopImg: desktopProjectsImg,
    desc: 'High-contrast production platforms including AURA and Nocturne web apps.'
  }), { waitUntil: 'load' });
  await page.screenshot({ path: path.join(OUTPUT_DIR, '05_Projects_Section_Showcase.jpg'), quality: 95, type: 'jpeg' });

  // 6. Experience Section
  console.log('Rendering Slide 6: Experience Section...');
  await page.setContent(getSectionSlideHtml({
    slideNum: '5',
    sectionTag: 'EXPERIENCE',
    title: 'Career Record & Log.',
    subtitle: 'ENGINEERING HISTORY & MILESTONES',
    desktopImg: desktopExperienceImg,
    desc: 'Junior Full Stack Developer track record and operational background.'
  }), { waitUntil: 'load' });
  await page.screenshot({ path: path.join(OUTPUT_DIR, '06_Experience_Section_Showcase.jpg'), quality: 95, type: 'jpeg' });

  // 7. Contact Section
  console.log('Rendering Slide 7: Contact Section...');
  await page.setContent(getSectionSlideHtml({
    slideNum: '6',
    sectionTag: 'CONTACT',
    title: 'Dispatch a Brief.',
    subtitle: 'DIRECT COMMISSION & INQUIRY CHANNELS',
    desktopImg: desktopContactImg,
    desc: 'Commission inquiries, project briefs, and immediate communication dispatch.'
  }), { waitUntil: 'load' });
  await page.screenshot({ path: path.join(OUTPUT_DIR, '07_Contact_Section_Showcase.jpg'), quality: 95, type: 'jpeg' });

  await browser.close();
  console.log('ALL SLIDES GENERATED SUCCESSFULLY!');
}

renderAllSlides().catch(console.error);

