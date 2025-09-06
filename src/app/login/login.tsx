'use client';

import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isLoaded) return null;

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !password) {
      setErrorMsg("Please complete all fields");
      return;
    }

    try {
      const form = await signIn.create({
        identifier: email.trim(),
        password,
      });

      if (form.status === 'complete') {
        await setActive({ session: form.createdSessionId });
        router.push('/');
      } else {
        console.log('Login state:', form);
      }
    } catch (err: any) {
      const clerkError = err?.errors?.[0]?.message;
      if (clerkError?.includes("Couldn't find your account")) {
        setErrorMsg("Email not found");
      } else if (clerkError?.includes("Password is incorrect")) {
        setErrorMsg("Incorrect password");
      } else {
        setErrorMsg("Error while signing in");
      }
    }
  };

  return (
    <div
      style={{ fontFamily: "'Poppins', sans-serif" }}
      className="max-w-md w-full p-8 rounded-2xl shadow-2xl mt-20 bg-white/70 backdrop-blur-md border border-[#629584] animate-fade-in"
    >
      <h2 className="text-3xl font-bold text-center text-[#073B3A] drop-shadow-sm">Welcome Back</h2>
      <p className="text-center text-[#629584] text-sm mt-2">
        We're glad you're here — let's get you signed in.
      </p>

      <form onSubmit={handleSignIn} className="space-y-6 mt-6">
        <div>
          <label className="text-[#073B3A] font-semibold">Email</label>
          <input
            type="email"
            className="w-full border border-[#629584] p-3 rounded-xl mt-2 bg-yellow-50 placeholder-[#629584] text-[#073B3A] focus:outline-none focus:ring-2 focus:ring-[#629584] transition-all duration-200 shadow-sm"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="text-[#073B3A] font-semibold">Password</label>
          <input
            type="password"
            className="w-full border border-[#629584] p-3 rounded-xl mt-2 bg-yellow-50 placeholder-[#629584] text-[#073B3A] focus:outline-none focus:ring-2 focus:ring-[#629584] transition-all duration-200 shadow-sm"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          className="bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-[#073B3A] font-bold p-3 mt-4 w-full rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
          type="submit"
        >
          Login
        </button>

        {errorMsg && (
          <p className="text-red-600 mt-2 text-center font-medium animate-pulse">
            {errorMsg}
          </p>
        )}
      </form>

      <p className="mt-4 text-sm text-center">
        <a href="/ForgotPassword" className="text-[#073B3A] underline hover:text-[#629584] transition-all duration-200">
          Forgot your password?
        </a>
      </p>
    </div>
  );
}