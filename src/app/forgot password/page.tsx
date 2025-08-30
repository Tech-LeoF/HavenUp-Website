'use client';

import { SignIn } from '@clerk/nextjs';

export default function ForgotPassword() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <SignIn
        routing="path"
        path="/forgot-password"
        afterSignInUrl="/" // opcional: a dónde ir después
      />
    </div>
  );
}
