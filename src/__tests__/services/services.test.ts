import apiClient from '@/services/apiClient';
import { submitApplicationApi } from '@/services/applyService';
import { submitContactApi } from '@/services/contactService';

jest.mock('@/services/apiClient', () => ({
  post: jest.fn(),
}));

describe('API Service Layer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('submitApplicationApi', () => {
    it('should invoke apiClient.post with /api/apply and form details', async () => {
      const applyData = {
        loanType: 'personal',
        amount: '500000',
        tenure: '3',
        fullName: 'Rahul Sharma',
        email: 'rahul@example.com',
        mobile: '9876543210',
        employmentType: 'salaried',
        income: '75000',
        pan: 'ABCDE1234F',
        pincode: '400051',
      };

      const mockResponse = { data: { success: true, isEligible: true } };
      (apiClient.post as jest.Mock).mockResolvedValueOnce(mockResponse);

      const result = await submitApplicationApi(applyData);
      
      expect(apiClient.post).toHaveBeenCalledWith('/api/apply', applyData);
      expect(result).toEqual({ success: true, isEligible: true });
    });
  });

  describe('submitContactApi', () => {
    it('should invoke apiClient.post with /api/contact and form details', async () => {
      const contactData = {
        firstName: 'Himanshu',
        lastName: 'Kumar',
        email: 'himanshu@gmail.com',
        phone: '9876543210',
        date: '2026-06-15',
        timeHours: '10',
        timeMinutes: '30',
        timeAmPm: 'AM',
        query: 'Help with my loan.',
      };

      const mockResponse = { data: { message: 'Appointment booked successfully' } };
      (apiClient.post as jest.Mock).mockResolvedValueOnce(mockResponse);

      const result = await submitContactApi(contactData);
      
      expect(apiClient.post).toHaveBeenCalledWith('/api/contact', contactData);
      expect(result).toEqual({ message: 'Appointment booked successfully' });
    });
  });

  describe('apiConfig', () => {
    const originalEnv = process.env.NEXT_PUBLIC_API_URL;

    afterEach(() => {
      process.env.NEXT_PUBLIC_API_URL = originalEnv;
    });

    it('should configure API endpoints based on environment variables', () => {
      jest.resetModules();
      process.env.NEXT_PUBLIC_API_URL = 'https://api.example.com';
      const configWithEnv = require('@/services/apiConfig');
      expect(configWithEnv.API_BASE_URL).toBe('https://api.example.com');
      
      jest.resetModules();
      delete process.env.NEXT_PUBLIC_API_URL;
      const configWithoutEnv = require('@/services/apiConfig');
      expect(configWithoutEnv.API_BASE_URL).toBe('');
    });
  });
});
