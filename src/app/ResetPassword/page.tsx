'use client';
import { useState } from "react";

export default function ResetPassword() {
const [password, setPassword] = useState("");
const [confirm, setConfirm] = useState("");
const [message, setMessage] = useState("");

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirm) {
        setMessage("Passwords do not match.");
        return;
    }

    // Simulación de cambio de contraseña
    setMessage("Your password has been reset successfully!");
    setPassword("");
    setConfirm("");
};

return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50 font-poppins">
    <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md text-center text-black">
        <h1 className="text-2xl font-bold mb-6">Reset Password</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
        <input
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-lg text-black"
            required
        />
        <input
            type="password"
            placeholder="Confirm password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="w-full p-2 border rounded-lg text-black"
            required
        />
        <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-2 rounded-lg hover:bg-yellow-500 transition"
        >
            Change password
        </button>
        </form>
        {message && <p className="mt-4 text-black">{message}</p>}
    </div>
    </div>
);
}
