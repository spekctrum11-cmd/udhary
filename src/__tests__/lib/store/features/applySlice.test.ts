import applyReducer, { resetApplication, submitApplication } from '@/lib/store/features/applySlice';
import { submitApplicationApi } from '@/services/applyService';
import { configureStore } from '@reduxjs/toolkit';

jest.mock('@/services/applyService', () => ({
  submitApplicationApi: jest.fn(),
}));

describe('Redux applySlice Reducer and Thunk', () => {
  const initialState = {
    status: 'idle' as const,
    isEligible: true,
    error: null,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return the initial state by default', () => {
    expect(applyReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should reset state on resetApplication action', () => {
    const dirtyState = {
      status: 'success' as const,
      isEligible: false,
      error: 'Some error text',
    };
    expect(applyReducer(dirtyState, resetApplication())).toEqual(initialState);
  });

  it('should handle pending state update', () => {
    const pendingAction = { type: 'apply/submitApplication/pending' };
    expect(applyReducer(initialState, pendingAction)).toEqual({
      status: 'loading',
      isEligible: true,
      error: null,
    });
  });

  it('should handle fulfilled state update (eligible)', () => {
    const fulfilledAction = {
      type: 'apply/submitApplication/fulfilled',
      payload: { isEligible: true },
    };
    expect(applyReducer(initialState, fulfilledAction)).toEqual({
      status: 'success',
      isEligible: true,
      error: null,
    });
  });

  it('should handle fulfilled state update (ineligible)', () => {
    const fulfilledAction = {
      type: 'apply/submitApplication/fulfilled',
      payload: { isEligible: false },
    };
    expect(applyReducer(initialState, fulfilledAction)).toEqual({
      status: 'success',
      isEligible: false,
      error: null,
    });
  });

  it('should handle rejected state update', () => {
    const rejectedAction = {
      type: 'apply/submitApplication/rejected',
      payload: 'Submission failed',
    };
    expect(applyReducer(initialState, rejectedAction)).toEqual({
      status: 'error',
      isEligible: true,
      error: 'Submission failed',
    });
  });

  describe('submitApplication Thunk', () => {
    const validFormData = {
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

    it('dispatches fulfilled when submission is successful', async () => {
      const mockResponse = { success: true, isEligible: true };
      (submitApplicationApi as jest.Mock).mockResolvedValueOnce(mockResponse);

      const store = configureStore({ reducer: { apply: applyReducer } });
      await store.dispatch(submitApplication(validFormData) as any);

      expect(store.getState().apply).toEqual({
        status: 'success',
        isEligible: true,
        error: null,
      });
      expect(submitApplicationApi).toHaveBeenCalledWith(validFormData);
    });

    it('dispatches rejected when submission fails with error message', async () => {
      const mockError = new Error('Network Timeout');
      (submitApplicationApi as jest.Mock).mockRejectedValueOnce(mockError);

      const store = configureStore({ reducer: { apply: applyReducer } });
      await store.dispatch(submitApplication(validFormData) as any);

      expect(store.getState().apply).toEqual({
        status: 'error',
        isEligible: true,
        error: 'Network Timeout',
      });
    });

    it('dispatches rejected with fallback error message', async () => {
      (submitApplicationApi as jest.Mock).mockRejectedValueOnce({});

      const store = configureStore({ reducer: { apply: applyReducer } });
      await store.dispatch(submitApplication(validFormData) as any);

      expect(store.getState().apply).toEqual({
        status: 'error',
        isEligible: true,
        error: 'Failed to submit application',
      });
    });
  });
});
