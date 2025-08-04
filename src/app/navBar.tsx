"use client";

import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
return (
    <nav className="bg-[#073B3A] flex items-center justify-between px-10 py-4 font-poppins">
    <div>
        <img className="cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-400 w-17 h-17" src="/Imgs/Logo-BG-rounded.png" alt="" />
    </div>
    <div style={{ fontFamily: "'Poppins', sans-serif" }} className="flex space-x-20 text-white items-center">
        <Link
        href="/"
        className="hover:drop-shadow-[0_0_4px_gray] transition duration-400 cursor-pointer"
        >
        Home
        </Link>
        <Link
        href="/about-us"
        className="hover:drop-shadow-[0_0_4px_gray] transition duration-400 cursor-pointer"
        >
        About Us
        </Link>
        <Link
        href="/contact"
        className="hover:drop-shadow-[0_0_4px_gray] transition duration-400 cursor-pointer"
        >
        Contact
        </Link>
        <button className="text-[#073B3A] bg-[#F5F5DC] w-20 h-9 rounded-lg -mt-1.5 cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-400">
        Sign Up
        </button>
    </div>
    </nav>
);
}
