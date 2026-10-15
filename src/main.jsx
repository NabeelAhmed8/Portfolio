import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import nabeelLogo from './assets/Nabeel Logo.jpg';

// Dynamically set favicon to imported Nabeel Logo
const faviconEl = document.querySelector("link[rel*='icon']");
if (faviconEl) {
  faviconEl.href = nabeelLogo;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
