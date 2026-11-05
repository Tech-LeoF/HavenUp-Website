'use client';

import { ClerkProvider } from '@clerk/nextjs';

export default function ClerkProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider publishableKey="pk_test_ZHJpdmluZy1iYWRnZXItMTcuY2xlcmsuYWNjb3VudHMuZGV2JA">
      {children}
    </ClerkProvider>
  );
}