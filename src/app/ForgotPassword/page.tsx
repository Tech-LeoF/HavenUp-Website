'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const router = useRouter();

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulación de envío de email
    setMessage("If this account exists, a reset link has been sent.");
};

return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50 font-poppins">
    <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md text-center text-black">
        <h1 className="text-2xl font-bold mb-6">Forgot Password</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
        <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
        />
        <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-2 rounded-lg hover:bg-yellow-500 transition"
        >
            Send reset link
        </button>
        </form>

        {message && (
        <div className="mt-4">
            <p className="text-green-600 mb-4">{message}</p>
            {/* Botón provisional para ir a ResetPassword */}
            <button
                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
                onClick={() => router.push("/ResetPassword")}
            >
                Go to Reset Password
            </button>
        </div>
        )}
    </div>
    </div>
);
}
