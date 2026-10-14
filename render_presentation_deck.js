import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const CAPTURES_DIR = path.resolve('presentation_showcase', 'raw_captures');
const OUTPUT_DIR = path.resolve('presentation_showcase');

function getBase64(filename) {
  const filePath = path.join(CAPTURES_DIR, filename);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return '';
  }
  const data = fs.readFileSync(filePath);
  return `data:image/png;base64,${data.toString('base64')}`;
}

const images = {
  homeDesktop: getBase64('desktop_home.png'),
  homeMobile: getBase64('mobile_home.png'),
  aboutDesktop: getBase64('desktop_about.png'),
  aboutMobile: getBase64('mobile_about.png'),
  skillsDesktop: getBase64('desktop_skills.png'),
  skillsMobile: getBase64('mobile_skills.png'),
  projectsDesktop: getBase64('desktop_projects.png'),
  projectsMobile: getBase64('mobile_projects.png'),
  experienceDesktop: getBase64('desktop_experience.png'),
  experienceMobile: getBase64('mobile_experience.png'),
  contactDesktop: getBase64('desktop_contact.png'),
  contactMobile: getBase64('mobile_contact.png'),
};

function generateSlideHtml({
  brandTitle = 'NABEEL AHMED DHILLON',
  subtitle = 'JUNIOR FULL STACK WEB DEVELOPER & ARCHITECTURAL BRUTALISM',
  statusPill = 'STATUS: AVAILABLE FOR FULL-STACK ROLES',
  categoryPill = 'DESKTOP & MOBILE RESPONSIVE',
  desktopUrl = 'https://nabeeldhillon.dev',
  desktopImg,
  mobileImg,
  footerTech = '✦ Built with React 19 & Tailwind CSS v4 &nbsp;&nbsp;&nbsp;&nbsp; ✦ Vite Production Engine &nbsp;&nbsp;&nbsp;&nbsp; ✦ Architectural Brutalism & Full-Stack Reliability',
  footerDeck = 'PRESENTATION DECK SHOWCASE'
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1920px;
    height: 1080px;
    background: #050505;
    color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px 70px 45px 70px;
    background-image: 
      radial-gradient(ellipse at 50% 40%, #151517 0%, #080809 60%, #030304 100%),
      linear-gradient(to right, rgba(255,255,255,0.015) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.015) 1px, transparent 1px);
    background-size: 100% 100%, 60px 60px, 60px 60px;
  }

  /* Top Header */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: 10;
  }
  .brand-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .brand-title {
    font-size: 26px;
    font-weight: 800;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: #f4f4f5;
    font-family: "Cinzel", "Times New Roman", serif;
  }
  .brand-subtitle {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2.5px;
    color: #71717a;
    text-transform: uppercase;
    font-family: monospace;
  }
  .pills-group {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .pill {
    padding: 7px 16px;
    border-radius: 9999px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    border: 1px solid #27272a;
    background: rgba(18, 18, 20, 0.7);
    color: #a1a1aa;
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .pill-green-dot {
    width: 6px;
    height: 6px;
    background: #22c55e;
    border-radius: 50%;
    box-shadow: 0 0 10px #22c55e;
    display: inline-block;
  }

  /* Center Devices Showcase Stage */
  .stage {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    width: 100%;
    height: 820px;
    position: relative;
    z-index: 5;
  }

  /* Desktop Mockup */
  .desktop-device {
    width: 1200px;
    height: 750px;
    background: #111113;
    border: 1px solid #27272a;
    border-radius: 12px;
    box-shadow: 
      0 40px 90px rgba(0, 0, 0, 0.9),
      0 0 0 1px rgba(255, 255, 255, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
  }
  .desktop-titlebar {
    height: 38px;
    background: #09090b;
    border-bottom: 1px solid #1f1f23;
    display: flex;
    align-items: center;
    padding: 0 16px;
    position: relative;
  }
  .window-dots {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .dot {
    width: 11px;
    height: 11px;
    border-radius: 50%;
  }
  .dot-red { background: #FF5F56; }
  .dot-yellow { background: #FFBD2E; }
  .dot-green { background: #27C93F; }

  .url-bar {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: #18181b;
    border: 1px solid #27272a;
    border-radius: 6px;
    padding: 3px 22px;
    font-size: 11px;
    font-family: monospace;
    color: #a1a1aa;
    display: flex;
    align-items: center;
    gap: 8px;
    letter-spacing: 0.5px;
  }
  .url-lock {
    font-size: 9px;
    color: #22c55e;
  }
  .desktop-screen {
    width: 100%;
    flex: 1;
    background: #000000;
    overflow: hidden;
    position: relative;
  }
  .desktop-screen img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    display: block;
  }

  /* Mobile Mockup */
  .mobile-device {
    width: 360px;
    height: 750px;
    background: #141416;
    border: 2.5px solid #3f3f46;
    border-radius: 52px;
    padding: 12px;
    box-shadow: 
      0 40px 90px rgba(0, 0, 0, 0.95),
      0 0 0 1px rgba(255, 255, 255, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .mobile-screen {
    width: 100%;
    height: 100%;
    background: #000000;
    border-radius: 42px;
    overflow: hidden;
    position: relative;
    border: 1px solid #27272a;
  }
  .dynamic-island {
    position: absolute;
    top: 11px;
    left: 50%;
    transform: translateX(-50%);
    width: 95px;
    height: 25px;
    background: #000000;
    border-radius: 20px;
    z-index: 20;
    border: 1px solid #18181b;
  }
  .mobile-screen img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    display: block;
  }

  /* Bottom Footer */
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: 10;
  }
  .footer-tech {
    font-size: 12px;
    color: #71717a;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    letter-spacing: 0.5px;
  }
  .footer-deck {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    color: #52525b;
    font-family: monospace;
    text-transform: uppercase;
  }
</style>
</head>
<body>

  <!-- Top Header Bar -->
  <header class="header">
    <div class="brand-group">
      <h1 class="brand-title">${brandTitle}</h1>
      <span class="brand-subtitle">${subtitle}</span>
    </div>
    <div class="pills-group">
      <div class="pill">
        <span class="pill-green-dot"></span>
        <span>${statusPill}</span>
      </div>
      <div class="pill">
        <span>${categoryPill}</span>
      </div>
    </div>
  </header>

  <!-- Main Center Devices Stage -->
  <main class="stage">
    <!-- Desktop Window with Traffic Lights -->
    <div class="desktop-device">
      <div class="desktop-titlebar">
        <div class="window-dots">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
        </div>
        <div class="url-bar">
          <span class="url-lock">🔒</span>
          <span>${desktopUrl}</span>
        </div>
      </div>
      <div class="desktop-screen">
        <img src="${desktopImg}" alt="Desktop View" />
      </div>
    </div>

    <!-- Mobile Device (iPhone) -->
    <div class="mobile-device">
      <div class="mobile-screen">
        <div class="dynamic-island"></div>
        <img src="${mobileImg}" alt="Mobile View" />
      </div>
    </div>
  </main>

  <!-- Bottom Footer -->
  <footer class="footer">
    <div class="footer-tech">${footerTech}</div>
    <div class="footer-deck">${footerDeck}</div>
  </footer>

</body>
</html>`;
}

const slides = [
  {
    filename: '01_Master_Presentation_Showcase.jpg',
    data: {
      brandTitle: 'NABEEL AHMED DHILLON',
      subtitle: 'JUNIOR FULL STACK WEB DEVELOPER & ARCHITECTURAL BRUTALISM',
      statusPill: 'STATUS: AVAILABLE FOR FULL-STACK ROLES',
      categoryPill: 'DESKTOP & MOBILE RESPONSIVE',
      desktopUrl: 'https://nabeeldhillon.dev',
      desktopImg: images.homeDesktop,
      mobileImg: images.homeMobile,
      footerTech: '✦ Built with React 19 & Tailwind CSS v4 &nbsp;&nbsp;&nbsp;&nbsp; ✦ Vite Production Engine &nbsp;&nbsp;&nbsp;&nbsp; ✦ Architectural Brutalism & Zero Bloat',
      footerDeck: 'MASTER PRESENTATION SHOWCASE'
    }
  },
  {
    filename: '02_Hero_Section_Showcase.jpg',
    data: {
      brandTitle: 'HERO & ARCHITECTURAL IDENTITY',
      subtitle: 'SECTION 01 / MONUMENTAL TYPOGRAPHY & TELEMETRY STRIP',
      statusPill: 'SECTION 01: HERO',
      categoryPill: 'MULTI-VIEWPORT COMPLIANCE',
      desktopUrl: 'https://nabeeldhillon.dev/#hero',
      desktopImg: images.homeDesktop,
      mobileImg: images.homeMobile,
      footerTech: '✦ Monumental Typography & Status Telemetry &nbsp;&nbsp;&nbsp;&nbsp; ✦ High-Contrast Black & White &nbsp;&nbsp;&nbsp;&nbsp; ✦ Fast Action CTA Dispatches',
      footerDeck: 'SECTION 01 DECK SHOWCASE'
    }
  },
  {
    filename: '03_About_Section_Showcase.jpg',
    data: {
      brandTitle: 'PROFILE & CORE PHILOSOPHY',
      subtitle: 'SECTION 02 / ENGINEERING STANDARDS, ETHOS & VITAL METRICS',
      statusPill: 'SECTION 02: ABOUT',
      categoryPill: 'MINIMALIST STANDARDS',
      desktopUrl: 'https://nabeeldhillon.dev/about',
      desktopImg: images.aboutDesktop,
      mobileImg: images.aboutMobile,
      footerTech: '✦ Disciplined Engineering Principles &nbsp;&nbsp;&nbsp;&nbsp; ✦ Crafted Excellence & Architecture &nbsp;&nbsp;&nbsp;&nbsp; ✦ Telemetry Pillar Cards',
      footerDeck: 'SECTION 02 DECK SHOWCASE'
    }
  },
  {
    filename: '04_Skills_Section_Showcase.jpg',
    data: {
      brandTitle: 'TECHNICAL ARSENAL & TOOLING',
      subtitle: 'SECTION 03 / FULL STACK CAPABILITIES, DATABASES & RUNTIMES',
      statusPill: 'SECTION 03: SKILLS',
      categoryPill: 'FULL-STACK STACK MATRIX',
      desktopUrl: 'https://nabeeldhillon.dev/skills',
      desktopImg: images.skillsDesktop,
      mobileImg: images.skillsMobile,
      footerTech: '✦ Frontend: React 19, Vite, Tailwind CSS &nbsp;&nbsp;&nbsp;&nbsp; ✦ Backend: Laravel, PHP, Node.js &nbsp;&nbsp;&nbsp;&nbsp; ✦ Databases: MySQL, MongoDB',
      footerDeck: 'SECTION 03 DECK SHOWCASE'
    }
  },
  {
    filename: '05_Projects_Section_Showcase.jpg',
    data: {
      brandTitle: 'SELECTED WORK & PLATFORMS',
      subtitle: 'SECTION 04 / TESTED, DEPLOYED & PRODUCTION WEB APPLICATIONS',
      statusPill: 'SECTION 04: PROJECTS',
      categoryPill: 'PRODUCTION PLATFORMS',
      desktopUrl: 'https://nabeeldhillon.dev/projects',
      desktopImg: images.projectsDesktop,
      mobileImg: images.projectsMobile,
      footerTech: '✦ Production Platforms: AURA & Nocturne &nbsp;&nbsp;&nbsp;&nbsp; ✦ Live Demos & GitHub Source Code &nbsp;&nbsp;&nbsp;&nbsp; ✦ Dynamic MongoDB Architecture',
      footerDeck: 'SECTION 04 DECK SHOWCASE'
    }
  },
  {
    filename: '06_Experience_Section_Showcase.jpg',
    data: {
      brandTitle: 'CAREER RECORD & EXPERIENCE',
      subtitle: 'SECTION 05 / ENGINEERING HISTORY, MILESTONES & ROLE ARCHIVE',
      statusPill: 'SECTION 05: EXPERIENCE',
      categoryPill: 'PROFESSIONAL LOG',
      desktopUrl: 'https://nabeeldhillon.dev/experience',
      desktopImg: images.experienceDesktop,
      mobileImg: images.experienceMobile,
      footerTech: '✦ Junior Full Stack Web Developer &nbsp;&nbsp;&nbsp;&nbsp; ✦ Freelance & Remote Engineering &nbsp;&nbsp;&nbsp;&nbsp; ✦ 1+ Year Production Track Record',
      footerDeck: 'SECTION 05 DECK SHOWCASE'
    }
  },
  {
    filename: '07_Contact_Section_Showcase.jpg',
    data: {
      brandTitle: 'DIRECT DISPATCH & INQUIRIES',
      subtitle: 'SECTION 06 / TERMINAL INQUIRY FORM, DIRECT CHANNELS & PROFILES',
      statusPill: 'SECTION 06: CONTACT',
      categoryPill: 'WORLDWIDE COMMISSIONS',
      desktopUrl: 'https://nabeeldhillon.dev/contact',
      desktopImg: images.contactDesktop,
      mobileImg: images.contactMobile,
      footerTech: '✦ Monitored Direct Channel: nabeelprojects@hotmail.com &nbsp;&nbsp;&nbsp;&nbsp; ✦ Full REST API Dispatch &nbsp;&nbsp;&nbsp;&nbsp; ✦ Response within 24 Hours',
      footerDeck: 'SECTION 06 DECK SHOWCASE'
    }
  }
];

async function run() {
  console.log('Launching browser to render master presentation deck (1920x1080)...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });

  for (const s of slides) {
    console.log(`Generating ${s.filename}...`);
    const html = generateSlideHtml(s.data);
    await page.setContent(html, { waitUntil: 'load' });
    await page.screenshot({
      path: path.join(OUTPUT_DIR, s.filename),
      quality: 95,
      type: 'jpeg'
    });
  }

  await browser.close();
  console.log('All presentation slides generated successfully in presentation_showcase/!');
}

run().catch(console.error);

