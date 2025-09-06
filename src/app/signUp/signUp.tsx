'use client';

import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";

export default function SignUp() {
    const { isLoaded, signUp, setActive } = useSignUp();
    const [role, setRole] = useState<'buyer' | 'seller' | null>(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [verification, setVerification] = useState(false);
    const [code, setCode] = useState('');
    const [error, setError] = useState('');

    if (!isLoaded) return null;

const registrar = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!role) {
        setError('Please, select your role');
        return;
    }
    if (password !== confirmPassword) {
        setError('The passwords do not match');
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        setError("Invalid email address");
        return;
    }

    try {
    await signUp.create({
        emailAddress: email.trim(),
        password,
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        unsafeMetadata: {
        role: role,
        },
    });

    await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
    setVerification(true);
    } catch (err: any) {
        setError(err.errors?.[0]?.message || 'Problems with sign up');
    }
};

    const verificar = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
    const completeSignUp = await signUp.attemptEmailAddressVerification({ code });

    if (completeSignUp.status === 'complete') {
        await setActive({ session: completeSignUp.createdSessionId });
        window.location.href = '/';
    } else {
        console.warn("⚠️ Sign-up not completed, status:", completeSignUp.status);
    }
    } catch (err: any) {
        setError(err.errors?.[0]?.message || 'Incorrect code');
    }
};

    return (
    <div
        className="w-full min-h-screen pt-12 pb-28 px-4 sm:px-0 flex justify-center items-start"
        style={{ fontFamily: "'Poppins', sans-serif" }}
        >
    <div className="w-full max-w-md p-8 bg-white/70 backdrop-blur-md border border-[#629584] rounded-2xl shadow-2xl space-y-6 animate-fade-in">
        {!verification ? (
        <form onSubmit={registrar}>
            <h2 className="text-3xl font-bold mb-4 text-center text-[#073B3A] drop-shadow-sm">
                What would you like to do?
            </h2>

            <div className="flex justify-center gap-4 mb-4">
                <button
                type="button"
                onClick={() => setRole('buyer')}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                    role === 'buyer'
                    ? 'bg-yellow-400 text-[#073B3A] shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-yellow-100'
                }`}
            >
                I want to buy
                </button>
                <button
                type="button"
                onClick={() => setRole('seller')}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                    role === 'seller'
                    ? 'bg-yellow-400 text-[#073B3A] shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-yellow-100'
                }`}
        >
                I want to sell
                </button>
            </div>

            {[
                { label: 'First name', value: firstName, set: setFirstName, type: 'text' },
                { label: 'Last name', value: lastName, set: setLastName, type: 'text' },
                { label: 'Email', value: email, set: setEmail, type: 'email' },
                { label: 'Password', value: password, set: setPassword, type: 'password' },
                { label: 'Confirm Password', value: confirmPassword, set: setConfirmPassword, type: 'password' },
            ].map(({ label, value, set, type }) => (
                <div key={label}>
                <label className="text-[#073B3A] font-semibold">{label}</label>
                <input
                    className="w-full border border-[#629584] p-3 rounded-xl mt-2 mb-2 bg-yellow-50 placeholder-[#629584] text-[#073B3A] focus:outline-none focus:ring-2 focus:ring-[#629584] transition-all duration-200 shadow-sm"
                    type={type}
                    placeholder={`Enter your ${label.toLowerCase()}`}
                    value={value}
                    onChange={(e) => set(e.target.value)}
                    required
                />
            </div>
            ))}

            <div className="flex items-center mt-4">
                <input type="checkbox" className="mr-2" required />
                <span className="text-sm text-[#073B3A]">
                I agree to the Terms of Service and Privacy Policy
                </span>
            </div>

            <div id="clerk-captcha" />

            <button
                className="bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-[#073B3A] font-bold p-3 mt-4 w-full rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                type="submit"
            >
                Create account as {role ? role : '...'}
            </button>

            {error && (
                <p className="text-red-600 mt-2 text-center font-medium animate-pulse">{error}</p>
            )}
        </form>
        ) : (
        <form onSubmit={verificar}>
            <h2 className="text-2xl font-bold mb-4 text-center text-[#073B3A] drop-shadow-sm">
                Verify your email
            </h2>
            <input
                className="w-full border border-[#629584] p-3 rounded-xl mt-2 bg-yellow-50 placeholder-[#629584] text-[#073B3A] focus:outline-none focus:ring-2 focus:ring-[#629584] transition-all duration-200 shadow-sm"
                type="text"
                placeholder="Verification code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
            />
            <button
                className="bg-green-600 hover:bg-green-700 text-white font-semibold p-3 mt-4 w-full rounded-xl transition-all duration-200 shadow-md"
                type="submit"
            >
                Verify and continue
            </button>

            {error && (
            <p className="text-red-600 mt-2 text-center font-medium animate-pulse">{error}</p>
            )}
        </form>
        )}
    </div>
    </div>
);
}