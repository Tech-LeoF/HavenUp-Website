'use client';

import Link from "next/link";
import { useUser, useClerk } from "@clerk/nextjs";
import { useState } from "react";

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

  return (
    <nav className="bg-[#073B3A] flex items-center justify-between px-[clamp(1rem,5vw,5rem)] py-[clamp(0.5rem,2vh,2rem)]">
      {/* LOGO */}
      <div>
        <img
          className="cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-400 w-[clamp(2rem,5vw,5rem)] h-[clamp(3rem,7vw,5rem)]"
          src="/Imgs/Logo-BG-rounded.png"
          alt="Logo"
        />
      </div>

      {/* 🔎 FILTRO DE BÚSQUEDA EN NAVBAR */}
      <form 
        onSubmit={handleSearch} 
        className="hidden md:flex items-center gap-2 bg-white rounded-xl px-3 py-1"
      >
        <input
          type="text"
          placeholder="Ubicación"
          value={ubicacion}
          onChange={(e) => setUbicacion(e.target.value)}
          className="p-1 text-sm border rounded-md outline-none"
        />
        <input
          type="number"
          placeholder="Mín $"
          value={precioMin}
          onChange={(e) => setPrecioMin(e.target.value ? Number(e.target.value) : "")}
          className="p-1 text-sm border rounded-md w-20 outline-none"
        />
        <input
          type="number"
          placeholder="Máx $"
          value={precioMax}
          onChange={(e) => setPrecioMax(e.target.value ? Number(e.target.value) : "")}
          className="p-1 text-sm border rounded-md w-20 outline-none"
        />
        <button 
          type="submit" 
          className="bg-[#073B3A] text-white px-3 py-1 rounded-md text-sm hover:bg-[#0a4c4b] transition"
        >
          Buscar
        </button>
      </form>

      {/* LINKS / BOTONES */}
      <div className="flex space-x-6 text-white items-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <Link href="/" className="hover:drop-shadow-[0_0_4px_gray] text-[clamp(0.5rem,2vw,1rem)] transition duration-300 cursor-pointer">
          Home
        </Link>
        <Link href="/main/aboutUs" className="hover:drop-shadow-[0_0_4px_gray] text-[clamp(0.5rem,2vw,1rem)] transition duration-300 cursor-pointer">
          About Us
        </Link>

        {isSeller && (
          <>
            <Link href="/contact" className="hover:drop-shadow-[0_0_4px_gray] text-[clamp(0.5rem,2vw,1rem)] transition duration-300 cursor-pointer">
              Selling
            </Link>
            <Link href="/publish">
              <button className=" mt-0.5 leading-tight  text-[#073B3A] bg-[#F5F5DC] w-[clamp(3rem,8vw,15rem)] text-[clamp(0.7rem,1.2vw,1rem)] h-[clamp(2rem,6.1vh,8rem)] rounded-lg cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-300">
                Publish a house
              </button>
            </Link>
            <Link href='/Mensajes'>
            <button className=" mt-0.5 leading-tight  text-[#073B3A] bg-[#F5F5DC] w-[clamp(3rem,8vw,15rem)] text-[clamp(0.7rem,1.2vw,1rem)] h-[clamp(2rem,6.1vh,8rem)] rounded-lg cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-300">
                Chat
              </button>
            </Link>
             
            <Link href="/perfil">
      <button className="text-[#073B3A] bg-[#F5F5DC] w-[clamp(3rem,8vw,15rem)] text-[clamp(0.7rem,1.2vw,1rem)] h-[clamp(2rem,6vh,3rem)] rounded-lg cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-300">
        Settings
      </button>
    </Link>
          </>
        )}

        {isBuyer && (
          <>
          <Link href="/buy">
            <button className="text-[#073B3A] bg-[#F5F5DC] w-[clamp(3rem,10vw,18rem)] text-[clamp(0.7rem,1.2vw,1rem)] h-[clamp(2rem,6vh,9rem)] truncate  rounded-lg cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-300">
              Buy houses
            </button>
          </Link>
          <Link href='/Mensajes'>
            <button className=" mt-0.5 leading-tight  text-[#073B3A] bg-[#F5F5DC] w-[clamp(3rem,8vw,15rem)] text-[clamp(0.7rem,1.2vw,1rem)] h-[clamp(2rem,6.1vh,8rem)] rounded-lg cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-300">
                Chat
              </button>
            </Link>
          <Link href="/perfil">
      <button className="text-[#073B3A] bg-[#F5F5DC] w-[clamp(3rem,8vw,15rem)] text-[clamp(0.7rem,1.2vw,1rem)] h-[clamp(2rem,6vh,3rem)] rounded-lg cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-300">
      Settigns
      </button>
    </Link>
          </>
        )}

        {!user && (
          <>
            <Link href="/login">
              <button className="text-[#073B3A] bg-[#F5F5DC] w-[clamp(3rem,8vw,15rem)] h-[clamp(2rem,6vh,3rem)] text-[clamp(0.8rem,1.5vw,1rem)] rounded-lg cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-400">
                Login
              </button>
            </Link>
            <Link href="/signUp">
              <button className="text-[#073B3A] bg-[#F5F5DC] w-[clamp(3rem,8vw,15rem)] h-[clamp(2rem,6vh,3rem)] text-[clamp(0.8rem,1.5vw,1rem)] rounded-lg cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-400">
                Sign Up
              </button>
            </Link>
          </>
        )}

        {user && (
          <button
            onClick={() => signOut()}
            className="text-[#073B3A] bg-[#F5F5DC] w-[clamp(3rem,8vw,15rem)] h-[clamp(2rem,6vh,3rem)] text-[clamp(0.7rem,1.2vw,1rem)] rounded-lg cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-400"
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
