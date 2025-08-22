'use client';

import Link from "next/link";
import { useUser, useClerk } from "@clerk/nextjs";
import { Span } from "next/dist/trace";

interface NavBarProps {
  role?: "Seller" | "Buyer";
}

export function NavBar({ role }: NavBarProps) {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk(); 
  const NavbarProfile = ({ userImage}: { userImage?: string}) => {
    
  }

  if (!isLoaded) return null;

  const isSeller = role === "Seller";
  const isBuyer = role === "Buyer";

  return (
    <nav className="bg-[#073B3A] flex items-center justify-between px-[clamp(1rem,5vw,5rem)] py-[clamp(0.5rem,2vh,2rem)]">
      <div>
        <img
          className="cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-400 w-[clamp(2rem,5vw,5rem)] h-[clamp(3rem,7vw,5rem)]"
          src="/Imgs/Logo-BG-rounded.png"
          alt="Logo"
        />
      </div>

      <div className="flex space-x-6 text-white items-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <Link href="/" className="hover:drop-shadow-[0_0_4px_gray] text-[clamp(0.5rem,2vw,1rem)] transition duration-400 cursor-pointer">
          Home
        </Link>
        <Link href="/about-us" className="hover:drop-shadow-[0_0_4px_gray] text-[clamp(0.5rem,2vw,1rem)] transition duration-400 cursor-pointer">
          About Us
        </Link>

        {isSeller && (
          <>
            <Link href="/contact" className="hover:drop-shadow-[0_0_4px_gray] text-[clamp(0.5rem,2vw,1rem)] transition duration-400 cursor-pointer">
              Selling
            </Link>
            <Link href="/publish">
              <button className="leading-tight  text-[#073B3A] bg-[#F5F5DC] w-[clamp(3rem,8vw,15rem)] text-[clamp(0.8rem,1.5vw,2rem)] h-[clamp(3rem,6vh,9rem)] rounded-lg cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-400">
                Publish a house
              </button>
            </Link>
          </>
        )}

        {isBuyer && (
          <Link href="/buy">
            <button className="text-[#073B3A] bg-[#F5F5DC] w-[clamp(3rem,10vw,18rem)] text-[clamp(0.8rem,1.5vw,2rem)] h-[clamp(2rem,6vh,9rem)] truncate  rounded-lg cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-400">
              Buy houses
            </button>
          </Link>
        )}

        {!user && (
          <>
            <Link href="/login">
              <button className="text-[#073B3A] bg-[#F5F5DC] w-[clamp(3rem,8vw,15rem)] text-[clamp(0.8rem,1.5vw,2rem)] h-[clamp(2rem,6vh,9rem)] rounded-lg cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-400">
                Login
              </button>
            </Link>
            <Link href="/signUp">
              <button className="text-[#073B3A] bg-[#F5F5DC] w-[clamp(3rem,8vw,15rem)] text-[clamp(0.8rem,1.5vw,2rem)] h-[clamp(2rem,6vh,9rem)] truncate rounded-lg cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-400">
                Sign Up
              </button>
            </Link>
          </>
        )}

        {user && (
          <button
            onClick={() => signOut()}
            className="text-[#073B3A] bg-[#F5F5DC] relative -top-0.5 w-[clamp(3rem,8vw,15rem)] text-[clamp(0.8rem,1.5vw,2rem)] h-[clamp(2rem,6vh,9rem)] truncate  rounded-lg cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-400"
          >
            Log out
          </button>
        )}
        <div className="w-11 h-11 bg-gray-600 rounded-full flex items-center justify-end cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition">
          <img src="https://cdn-icons-png.freepik.com/512/9706/9706583.png" alt="Avatar" className="w-[clamp(5rem,10vw,10rem)] h-[clamp(2rem,10vh,10rem)] rounded-full object-cover" />
        </div>

      </div>
    </nav>
  );
}
