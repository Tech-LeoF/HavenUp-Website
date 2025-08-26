'use client';

import { SignIn } from "@clerk/nextjs";
import Login from "./login";

export default function start(){
    return(
        <main className="min-h-screen flex items-center justify-center bg-gray-50">
            <Login/>
        </main>
    )
};