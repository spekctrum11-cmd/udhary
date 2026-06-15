import contactReducer, { resetContact, submitContact } from '@/lib/store/features/contactSlice';
import { submitContactApi } from '@/services/contactService';
import { configureStore } from '@reduxjs/toolkit';

jest.mock('@/services/contactService', () => ({
  submitContactApi: jest.fn(),
}));

describe('Redux contactSlice Reducer and Thunk', () => {
  const initialState = {
    status: 'idle' as const,
    error: null,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return the initial state by default', () => {
    expect(contactReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should reset state on resetContact action', () => {
    const loadedState = {
      status: 'success' as const,
      error: 'Legacy error content',
    };
    expect(contactReducer(loadedState, resetContact())).toEqual(initialState);
  });

  it('should handle pending state update', () => {
    const pendingAction = { type: 'contact/submitContact/pending' };
    expect(contactReducer(initialState, pendingAction)).toEqual({
      status: 'loading',
      error: null,
    });
  });

  it('should handle fulfilled state update', () => {
    const fulfilledAction = { type: 'contact/submitContact/fulfilled' };
    expect(contactReducer(initialState, fulfilledAction)).toEqual({
      status: 'success',
      error: null,
    });
  });

  it('should handle rejected state update', () => {
    const rejectedAction = { type: 'contact/submitContact/rejected', payload: 'Connection Failed' };
    expect(contactReducer(initialState, rejectedAction)).toEqual({
      status: 'error',
      error: 'Connection Failed',
    });
  });

  describe('submitContact Thunk', () => {
    const validFormData = {
      firstName: 'Himanshu',
      lastName: 'Kumar',
      email: 'himanshu@gmail.com',
      phone: '9876543210',
      date: '2026-06-15',
      timeHours: '10',
      timeMinutes: '30',
      timeAmPm: 'AM',
      query: 'I have a query about personal loan',
    };

    it('dispatches fulfilled when submission is successful', async () => {
      const mockResponse = { message: 'Appointment booked successfully' };
      (submitContactApi as jest.Mock).mockResolvedValueOnce(mockResponse);

      const store = configureStore({ reducer: { contact: contactReducer } });
      await store.dispatch(submitContact(validFormData) as any);

      expect(store.getState().contact).toEqual({
        status: 'success',
        error: null,
      });
      expect(submitContactApi).toHaveBeenCalledWith(validFormData);
    });

    it('dispatches rejected when submission fails with error message', async () => {
      const mockError = new Error('Invalid phone');
      (submitContactApi as jest.Mock).mockRejectedValueOnce(mockError);

      const store = configureStore({ reducer: { contact: contactReducer } });
      await store.dispatch(submitContact(validFormData) as any);

      expect(store.getState().contact).toEqual({
        status: 'error',
        error: 'Invalid phone',
      });
    });

    it('dispatches rejected with fallback error message', async () => {
      (submitContactApi as jest.Mock).mockRejectedValueOnce({});

      const store = configureStore({ reducer: { contact: contactReducer } });
      await store.dispatch(submitContact(validFormData) as any);

      expect(store.getState().contact).toEqual({
        status: 'error',
        error: 'Failed to book appointment',
      });
    });
  });
});
