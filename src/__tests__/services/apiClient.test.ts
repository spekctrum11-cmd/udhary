import axios from 'axios';

// Mock axios BEFORE importing apiClient
jest.mock('axios', () => {
  const mockAxiosInstance = {
    interceptors: {
      request: { use: jest.fn() },
      response: { use: jest.fn() },
    },
    create: jest.fn().mockReturnThis(),
    post: jest.fn(),
    get: jest.fn(),
  };
  return {
    create: () => mockAxiosInstance,
    default: mockAxiosInstance,
  };
});

// Import apiClient
import apiClient from '@/services/apiClient';

describe('API Client Axios Interceptors', () => {
  let requestHandler: any;
  let requestErrorHandler: any;
  let responseHandler: any;
  let responseErrorHandler: any;

  beforeAll(() => {
    // Capture the interceptor handlers
    const requestCalls = (apiClient.interceptors.request.use as jest.Mock).mock.calls[0];
    requestHandler = requestCalls[0];
    requestErrorHandler = requestCalls[1];

    const responseCalls = (apiClient.interceptors.response.use as jest.Mock).mock.calls[0];
    responseHandler = responseCalls[0];
    responseErrorHandler = responseCalls[1];
  });

  describe('Request Interceptor', () => {
    it('should attach Authorization header if token exists in localStorage', () => {
      localStorage.setItem('token', 'mock-jwt-token');

      const config = {
        headers: {} as any,
        data: {},
      };

      const result = requestHandler(config);
      
      expect(result.headers.Authorization).toBe('Bearer mock-jwt-token');

      localStorage.removeItem('token');
    });

    it('should NOT attach Authorization header if token does not exist', () => {
      localStorage.removeItem('token');

      const config = {
        headers: {} as any,
        data: {},
      };

      const result = requestHandler(config);
      expect(result.headers.Authorization).toBeUndefined();
    });

    it('should set Content-Type to application/json for object payload and not FormData', () => {
      const config = {
        headers: {} as any,
        data: { name: 'test' },
      };

      const result = requestHandler(config);
      expect(result.headers['Content-Type']).toBe('application/json');
    });

    it('should NOT set Content-Type to application/json for FormData payloads', () => {
      class MockFormData {}
      global.FormData = MockFormData as any;

      const config = {
        headers: {} as any,
        data: new MockFormData(),
      };

      const result = requestHandler(config);
      expect(result.headers['Content-Type']).toBeUndefined();
    });

    it('should reject request error', async () => {
      const error = new Error('Request Config Error');
      await expect(requestErrorHandler(error)).rejects.toThrow('Request Config Error');
    });
  });

  describe('Response Interceptor', () => {
    it('should return response direct on success', () => {
      const response = { data: 'success-payload' };
      const result = responseHandler(response);
      expect(result).toBe(response);
    });

    it('should parse error.response data on server error response', async () => {
      const error = {
        response: {
          data: { error: 'Server Specific Error' },
        },
      };

      await expect(responseErrorHandler(error)).rejects.toThrow('Server Specific Error');
    });

    it('should fall back to message if error is response message', async () => {
      const error = {
        response: {
          data: { message: 'Fallback Server Message' },
        },
      };

      await expect(responseErrorHandler(error)).rejects.toThrow('Fallback Server Message');
    });

    it('should output network error if error has request but no response', async () => {
      const error = {
        request: {},
      };

      await expect(responseErrorHandler(error)).rejects.toThrow('No response received from server');
    });

    it('should output generic error message if neither request nor response exists', async () => {
      const error = {
        message: 'Direct JS Error',
      };

      await expect(responseErrorHandler(error)).rejects.toThrow('Direct JS Error');
    });

    it('should use default error message if response data has neither error nor message', async () => {
      const error = {
        response: {
          data: {},
        },
      };

      await expect(responseErrorHandler(error)).rejects.toThrow('An unexpected error occurred');
    });
  });

  describe('API Config Environment Variable', () => {
    const originalEnv = process.env.NEXT_PUBLIC_API_URL;

    afterEach(() => {
      process.env.NEXT_PUBLIC_API_URL = originalEnv;
      jest.resetModules();
    });

    it('should use NEXT_PUBLIC_API_URL if defined', () => {
      jest.resetModules();
      process.env.NEXT_PUBLIC_API_URL = 'http://test-api.com';
      const { API_BASE_URL, API_ENDPOINTS } = require('@/services/apiConfig');
      expect(API_BASE_URL).toBe('http://test-api.com');
      expect(API_ENDPOINTS.apply).toBe('http://test-api.com/api/apply');
    });
  });
});
