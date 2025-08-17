'use client';

import Link from "next/link";
import { useUser, useClerk } from "@clerk/nextjs";

interface NavBarProps {
  role?: "Seller" | "Buyer";
}

export function NavBar({ role }: NavBarProps) {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk(); 

  if (!isLoaded) return null;

  const isSeller = role === "Seller";
  const isBuyer = role === "Buyer";

  return (
    <nav className="bg-[#073B3A] flex items-center justify-between px-10 py-4">
      <div>
        <img
          className="cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-400 w-17 h-17"
          src="/Imgs/Logo-BG-rounded.png"
          alt="Logo"
        />
      </div>

      <div className="flex space-x-6 text-white items-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <Link href="/" className="hover:drop-shadow-[0_0_4px_gray] transition duration-400 cursor-pointer">
          Home
        </Link>
        <Link href="/about-us" className="hover:drop-shadow-[0_0_4px_gray] transition duration-400 cursor-pointer">
          About Us
        </Link>

        {isSeller && (
          <>
            <Link href="/contact" className="hover:drop-shadow-[0_0_4px_gray] transition duration-400 cursor-pointer">
              Selling
            </Link>
            <Link href="/publish">
              <button className="text-[#073B3A] bg-[#F5F5DC] w-28 h-9 rounded-lg cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-400">
                Publish a house
              </button>
            </Link>
          </>
        )}

        {isBuyer && (
          <Link href="/buy">
            <button className="text-[#073B3A] bg-[#F5F5DC] w-28 h-9 rounded-lg cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-400">
              Buy houses
            </button>
          </Link>
        )}

        {!user && (
          <>
            <Link href="/login">
              <button className="text-[#073B3A] bg-[#F5F5DC] w-20 h-9 rounded-lg cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-400">
                Login
              </button>
            </Link>
            <Link href="/signUp">
              <button className="text-[#073B3A] bg-[#F5F5DC] w-20 h-9 rounded-lg cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-400">
                Sign Up
              </button>
            </Link>
          </>
        )}

        {user && (
          <button
            onClick={() => signOut()}
            className="text-[#073B3A] bg-[#F5F5DC] w-20 h-9 rounded-lg cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-400"
          >
            Log Out
          </button>
        )}
      </div>
    </nav>
  );
}
