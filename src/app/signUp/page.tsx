'use client';

import SignUp from "./signUp";

export default function Registro() {
  return (
    <main
      className="min-h-screen bg-gradient-to-br from-[#FDFBF3] via-[#FAF3D3] to-[#F5EEC8] flex justify-center items-start pt-24 px-4 sm:px-0"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="w-full max-w-md">
        <SignUp />
      </div>
    </main>
  );
}
