import { defaultProjects } from '../data/projectsData';
import { defaultSkills } from '../data/skillsData';
import { defaultExperiences } from '../data/experienceData';

/**
 * Health Check API
 */
export async function getHealth() {
  return {
    status: 'OPERATIONAL',
    mode: 'STANDALONE_DIRECT_DISPATCH',
    timestamp: new Date().toISOString(),
    service: 'Nabeel Ahmed Dhillon — Portfolio (Direct Client Mode)',
  };
}

/**
 * Projects API (Direct Client Data Delivery)
 */
export async function getProjects(params = {}) {
  let list = [...defaultProjects];
  if (params.category) {
    list = list.filter(
      (p) => p.category.toLowerCase() === params.category.toLowerCase()
    );
  }
  if (params.featured !== undefined) {
    list = list.filter((p) => Boolean(p.featured) === Boolean(params.featured));
  }
  return { success: true, data: list };
}

/**
 * Project Details by ID
 */
export async function getProjectById(id) {
  const project = defaultProjects.find((p) => p.id === id);
  return { success: Boolean(project), data: project || null };
}

/**
 * Skills API
 */
export async function getSkills() {
  return { success: true, data: defaultSkills };
}

/**
 * Experience API
 */
export async function getExperience(category = 'all') {
  let list = defaultExperiences;
  if (category && category !== 'all') {
    list = list.filter((exp) => exp.category === category);
  }
  return { success: true, data: list };
}

/**
 * Contact Submission API — 100% Serverless Direct Email
 * Delivers directly to nabeelprojects@hotmail.com without any Vercel or backend server!
 */
export async function sendContact(contactData) {
  const res = await fetch('https://formsubmit.co/ajax/nabeelprojects@hotmail.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      name: contactData.name,
      email: contactData.email,
      message: contactData.message,
      _subject: `New Portfolio Inquiry from ${contactData.name}`,
      _template: 'box',
      _captcha: 'false',
    }),
  });

  const json = await res.json();
  if (!res.ok && json.success === 'false') {
    throw new Error(json.message || 'Submission failed');
  }
  return { success: true, message: json.message || 'Inquiry Dispatched Successfully!' };
}
