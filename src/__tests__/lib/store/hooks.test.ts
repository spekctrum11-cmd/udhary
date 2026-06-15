import React from 'react';
import { renderHook } from '@testing-library/react';
import { useAppDispatch, useAppSelector, useAppStore } from '@/lib/store/hooks';
import StoreProvider from '@/lib/store/StoreProvider';

describe('Store hooks', () => {
  it('should return dispatch, selector, and store from context', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) =>
      React.createElement(StoreProvider, null, children);

    const { result: dispatchResult } = renderHook(() => useAppDispatch(), { wrapper });
    expect(dispatchResult.current).toBeDefined();

    const { result: selectorResult } = renderHook(() => useAppSelector((state) => state.apply), { wrapper });
    expect(selectorResult.current).toBeDefined();

    const { result: storeResult } = renderHook(() => useAppStore(), { wrapper });
    expect(storeResult.current).toBeDefined();
  });
});
