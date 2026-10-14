import { defaultProjects } from '../data/projectsData';
import { defaultSkills } from '../data/skillsData';
import { defaultExperiences } from '../data/experienceData';

const BASE_URL = import.meta.env.VITE_API_URL || '/api';

/**
 * Health Check API
 * Endpoint: GET /api/health
 */
export async function getHealth() {
  try {
    const res = await fetch(`${BASE_URL}/health`);
    if (!res.ok) throw new Error(`Status ${res.status}`);
    return await res.json();
  } catch (err) {
    return {
      status: 'OFFLINE_FALLBACK',
      uptime: null,
      timestamp: new Date().toISOString(),
      service: 'Nabeel Ahmed Dhillon — Portfolio (Client Mode)',
      error: err.message,
    };
  }
}

/**
 * Projects API
 * Endpoint: GET /api/projects (with optional ?category=&featured=)
 */
export async function getProjects(params = {}) {
  try {
    const query = new URLSearchParams();
    if (params.category) query.append('category', params.category);
    if (params.featured !== undefined) query.append('featured', String(params.featured));

    const url = `${BASE_URL}/projects${query.toString() ? `?${query.toString()}` : ''}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return { success: true, data: data.data || [] };
  } catch {
    // Fallback to static data
    let fallback = [...defaultProjects];
    if (params.category) {
      fallback = fallback.filter(
        (p) => p.category.toLowerCase() === params.category.toLowerCase()
      );
    }
    if (params.featured !== undefined) {
      fallback = fallback.filter((p) => Boolean(p.featured) === Boolean(params.featured));
    }
    return { success: false, data: fallback, fallback: true };
  }
}

/**
 * Project Details by ID
 * Endpoint: GET /api/projects/:id
 */
export async function getProjectById(id) {
  try {
    const res = await fetch(`${BASE_URL}/projects/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return { success: true, data: data.data };
  } catch {
    const fallback = defaultProjects.find((p) => p.id === id);
    return { success: false, data: fallback || null, fallback: true };
  }
}

/**
 * Create Project
 * Endpoint: POST /api/projects
 */
export async function createProject(projectData) {
  const res = await fetch(`${BASE_URL}/projects`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(projectData),
  });

  const json = await res.json();
  if (!res.ok) {
    throw new Error(json.error || 'Failed to create project');
  }
  return json;
}

/**
 * Skills API
 * Endpoint: GET /api/skills
 */
export async function getSkills() {
  try {
    const res = await fetch(`${BASE_URL}/skills`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return { success: true, data: data.data || [] };
  } catch {
    return { success: false, data: defaultSkills, fallback: true };
  }
}

/**
 * Experience API
 * Endpoint: GET /api/experience (with optional ?category=)
 */
export async function getExperience(category = 'all') {
  try {
    const query = category && category !== 'all' ? `?category=${category}` : '';
    const res = await fetch(`${BASE_URL}/experience${query}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return { success: true, data: data.data || [] };
  } catch {
    let fallback = defaultExperiences;
    if (category && category !== 'all') {
      fallback = fallback.filter((exp) => exp.category === category);
    }
    return { success: false, data: fallback, fallback: true };
  }
}

/**
 * Contact Submission API
 * Endpoint: POST /api/contact
 */
export async function sendContact(contactData) {
  const res = await fetch(`${BASE_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contactData),
  });

  const json = await res.json();
  if (!res.ok) {
    throw new Error(json.error || 'Submission failed');
  }
  return json;
}

/**
 * Messages Log API
 * Endpoint: GET /api/contact/messages
 */
export async function getMessages() {
  try {
    const res = await fetch(`${BASE_URL}/contact/messages`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return { success: true, data: data.data || [], count: data.count || 0 };
  } catch (err) {
    return { success: false, data: [], count: 0, error: err.message };
  }
}

