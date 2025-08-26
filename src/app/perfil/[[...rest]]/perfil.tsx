'use client';

import { UserProfile } from "@clerk/nextjs";

export default function Perfil() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <UserProfile path="/perfil" routing="path" />
    </div>
  );
}
