import apiClient from './apiClient';

export interface ApplyFormData {
    loanType: string;
    amount: string;
    tenure: string;
    fullName: string;
    email: string;
    mobile: string;
    employmentType: string;
    income: string;
    pan: string;
    pincode: string;
}

export interface ApplyResponse {
    success: boolean;
    isEligible: boolean;
    error?: string;
}

export async function submitApplicationApi(formData: ApplyFormData): Promise<ApplyResponse> {
    const response = await apiClient.post<ApplyResponse>('/api/apply', formData);
    return response.data;
}
