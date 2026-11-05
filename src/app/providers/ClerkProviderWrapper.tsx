'use client';

import { ClerkProvider } from '@clerk/nextjs';

console.log("PK_DEBUG:", JSON.stringify(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY));

export default function ClerkProviderWrapper({ children }: { children: React.ReactNode }) {
  return <ClerkProvider>{children}</ClerkProvider>;
}