'use client';

import { ClerkProvider } from '@clerk/nextjs';

const pk = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
console.log("PK length:", pk?.length, "| start:", pk?.slice(0, 8), "| end:", JSON.stringify(pk?.slice(-4)));

export default function ClerkProviderWrapper({ children }: { children: React.ReactNode }) {
  return <ClerkProvider>{children}</ClerkProvider> ;
}