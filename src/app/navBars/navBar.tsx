'use client';

import Link from "next/link";
import { useUser, useClerk } from "@clerk/nextjs";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface NavBarProps {
  role?: "Seller" | "Buyer";
}

export function NavBar({ role }: NavBarProps) {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk(); 

  const [ubicacion, setUbicacion] = useState("");
  const [precioMin, setPrecioMin] = useState<number | "">("");
  const [precioMax, setPrecioMax] = useState<number | "">("");

  if (!isLoaded) return null;

  const isSeller = role === "Seller";
  const isBuyer = role === "Buyer";

  const getInitial = (name?: string |null) => {
    if(!name) return "?";
    const parts = name.trim().split(" ");
    if(parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[parts.length -1][0]).toUpperCase();
  }

  // Acción al enviar el formulario (puedes redirigir a /buy con query params)
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (ubicacion) params.append("ubicacion", ubicacion);
    if (precioMin !== "") params.append("precioMin", precioMin.toString());
    if (precioMax !== "") params.append("precioMax", precioMax.toString());
    
    window.location.href = `/buy?${params.toString()}`;
  };

  const pathname = usePathname();


  return (
    <nav style={{ fontFamily: "'Poppins', sans-serif" }} className="bg-[#073B3A] flex items-center justify-between px-[clamp(1rem,5vw,5rem)] py-0.1 ">
      <div>
        <img
          className="cursor-pointer  transition duration-400 hover:drop-shadow-[0_0_4px_gray] w-[clamp(4rem,7vw,7rem)] h-[clamp(6rem,7vw,7rem)]"
          src="/Imgs/Logo-BG-rounded.png"
          alt="Logo"
        />
      </div>

     
     
      <div className="flex space-x-8 text-white items-center">
        <Link
          href="/"
          className={`hover:drop-shadow-[0_0_4px_gray] text-[clamp(0.5rem,2vw,1rem)] transition duration-300 cursor-pointer ${
            pathname === "/" ? "border-b-2 border-[#629584]" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/main/aboutUs"
          className={`hover:drop-shadow-[0_0_4px_gray] text-[clamp(0.5rem,2vw,1rem)] transition duration-300 cursor-pointer ${
            pathname === "/main/aboutUs" ? "border-b-2 border-[#629584]" : ""
          }`}
        >
          About Us
        </Link>

        {isSeller && (
          <>
            <div className="flex space-x-6">
                <Link
                  href="/stepsInfo"
                  className={`text-white transition duration-300 cursor-pointer text-[clamp(0.5rem,2vw,1rem)] hover:drop-shadow-[0_0_4px_gray] ${
                  pathname === "/stepsInfo" || pathname === "/Step2" || pathname === "/Step3"? "border-b-2 border-[#629584]" : ""
                  }`}>
                    Publish
                </Link>
                <Link
                  href="/chatbot"
                  className={`text-white transition duration-300 cursor-pointer text-[clamp(0.5rem,2vw,1rem)] hover:drop-shadow-[0_0_4px_gray] ${
                  pathname === "/chatbot" ? "border-b-2 border-[#629584]" : ""
                  }`}>
                    Chat
                </Link>
                <Link
                  href="/perfilVendedor"
                  className={`text-white transition duration-300 cursor-pointer text-[clamp(0.5rem,2vw,1rem)] hover:drop-shadow-[0_0_4px_gray] ${
                  pathname === "/perfilVendedor" ? "border-b-2 border-[#629584]" : ""
                  }`}>
                    Status
                </Link>
                <Link
                  href="/PremiumPlan"
                  className={`text-white transition duration-300 cursor-pointer text-[clamp(0.5rem,2vw,1rem)] hover:drop-shadow-[0_0_4px_gray] ${
                  pathname === "/PremiumPlan" ? "border-b-2 border-[#629584]" : ""
                  }`}>
                    Premium plans
                </Link>
              
              </div>
                
            
          </>
        )}

        {isBuyer && (
          <>
            <div className="flex space-x-6">
              <Link
                href="/buy"
                className={`text-white transition duration-300 cursor-pointer text-[clamp(0.5rem,2vw,1rem)] hover:drop-shadow-[0_0_4px_gray] ${
                pathname === "/buy" ? "border-b-2 border-[#629584]" : ""
                }`}>
                  Buy houses
              </Link>
              <Link
                href="/chatbot"
                className={`text-white transition duration-300 cursor-pointer text-[clamp(0.5rem,2vw,1rem)] hover:drop-shadow-[0_0_4px_gray] ${
                pathname === "/chatbot" ? "border-b-2 border-[#629584]" : ""
                }`}>
                  Chat
              </Link>
              <Link
                href="/perfil"
                className={`text-white transition duration-300 cursor-pointer text-[clamp(0.5rem,2vw,1rem)] hover:drop-shadow-[0_0_4px_gray] ${
                pathname === "/perfil" ? "border-b-2 border-[#629584]" : ""
                }`}>
                  Settings
              </Link>
              <Link
                  href="/perfilComprador"
                  className={`text-white transition duration-300 cursor-pointer text-[clamp(0.5rem,2vw,1rem)] hover:drop-shadow-[0_0_4px_gray] ${
                  pathname === "/perfilComprador" ? "border-b-2 border-[#629584]" : ""
                  }`}>
                    Status
              </Link>
            
            </div>

          </>
        )}

        {!user && (
          <>
            <Link href="/login">
              <button className="text-white bg-[#629584] w-[clamp(3rem,8vw,15rem)] h-[clamp(2rem,6vh,3rem)] text-[clamp(0.8rem,1.5vw,1rem)] rounded-lg cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-400">
                Login
              </button>
            </Link>
            <Link href="/signUp">
              <button className="text-white bg-[#629584] w-[clamp(3rem,8vw,15rem)] h-[clamp(2rem,6vh,3rem)] text-[clamp(0.8rem,1.5vw,1rem)] rounded-lg cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-400">
                Sign Up
              </button>
            </Link>
          </>
        )}

        {user && (
          <button
            onClick={() => signOut()}
            className="text-white bg-[#629584] w-[clamp(3rem,8vw,15rem)] h-[clamp(2rem,6vh,3rem)] text-[clamp(0.7rem,1.2vw,1rem)] rounded-lg cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-400"
          >
            Log out
          </button>
          
        )}

        <Link href="/perfil">
          {user ? (
            user.imageUrl ? (
              <img
                src={user.imageUrl}
                alt="Avatar"
                className="w-11 h-11 rounded-full object-cover cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition"
              />
            ) : (
              <div className="w-11 h-11 bg-gray-600 text-white font-semibold rounded-full flex items-center justify-center cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition">
                {getInitial(user.fullName || user.username || "")}
              </div>
            )
          ) : (
            <div className="w-11 h-11 bg-gray-400 rounded-full flex items-center justify-center cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition">
              ?
            </div>
          )}
        </Link>
      </div>
    </nav>
  );
}
