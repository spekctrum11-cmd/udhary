'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from './store';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // allow null and initialize only once using the recommended null-check pattern
  const storeRef = useRef<AppStore | null>(null);

  if (storeRef.current == null) {
    storeRef.current = makeStore();
  }

  // assert non-null for Provider after initialization
  return <Provider store={storeRef.current!}>{children}</Provider>;
}

