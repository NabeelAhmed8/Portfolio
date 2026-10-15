import { defaultProjects } from '../data/projectsData';
import { defaultSkills } from '../data/skillsData';
import { defaultExperiences } from '../data/experienceData';

const BASE_URL = 'https://backend-theta-nine-1a23fnuywk.vercel.app/api';

/**
 * Health Check API
 */
export async function getHealth() {
  try {
    const res = await fetch(`${BASE_URL}/health`);
    if (!res.ok) throw new Error(`Status ${res.status}`);
    return await res.json();
  } catch {
    return {
      status: 'OPERATIONAL',
      mode: 'DIRECT_EMAIL_DISPATCH',
      timestamp: new Date().toISOString(),
      service: 'Nabeel Ahmed Dhillon — Portfolio',
    };
  }
}

/**
 * Projects API (Instant Client Data Delivery)
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
 * Contact Submission API — Custom Jet Black Brutalist Email Dispatch
 * Dispatches directly to custom backend which sends custom Jet Black email to Nabeel!
 */
export async function sendContact(contactData) {
  const res = await fetch(`${BASE_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contactData),
  });

  const json = await res.json();
  if (!res.ok) {
    throw new Error(json.error || 'Submission failed');
  }
  return json;
}
