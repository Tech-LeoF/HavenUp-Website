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
    <div style={{ fontFamily: "'Poppins', sans-serif" }} className="max-w-md w-full p-6 bg-white rounded-xl shadow space-y-6 mt-10">
      <form onSubmit={handleSignIn} className="custom-login-form">
        <label className="text-black">Email</label><br />
        <input
          type="email"
          className="w-full border p-2 rounded mt-2 bg-yellow-50 placeholder-gray-400 text-black mb-2"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="text-black">Password</label><br />
        <input
          type="password"
          className="w-full border p-2 rounded mt-2 bg-yellow-50 placeholder-gray-400 text-black"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="bg-yellow-400 text-black p-2 mt-4 w-full rounded" type="submit">
          Login
        </button>
        {errorMsg && <p className="text-red-600 mt-2">{errorMsg}</p>}
      </form>

      {/* Forgot password link handled by Clerk */}
      <p className="mt-2 text-sm">
        <a href="/ForgotPassword" className="text-blue-500 underline">
          Forgot your password?
        </a>
      </p>
    </div>
  );
}
