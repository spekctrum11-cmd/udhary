import apiClient from './apiClient';

export interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    date: string;
    timeHours: string;
    timeMinutes: string;
    timeAmPm: string;
    query: string;
}

export interface ContactResponse {
    message: string;
    error?: string;
}

export async function submitContactApi(formData: ContactFormData): Promise<ContactResponse> {
    const response = await apiClient.post<ContactResponse>('/api/contact', formData);
    return response.data;
}
