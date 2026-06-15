export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export const API_ENDPOINTS = {
  apply: `${API_BASE_URL}/api/apply`,
  contact: `${API_BASE_URL}/api/contact`,
};
