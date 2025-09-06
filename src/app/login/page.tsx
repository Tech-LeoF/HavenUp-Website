'use client';

import { SignIn } from "@clerk/nextjs";
import Login from "./login";

export default function start() {
    return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FDFBF3] via-[#FAF3D3] to-[#F5EEC8]">
        <div className="px-4 sm:px-0">
            <Login />
        </div>
    </main>
    );
}