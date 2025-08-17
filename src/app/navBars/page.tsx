'use client';

import { useUser } from "@clerk/nextjs";
import { NavBar } from "./navBar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return <p>Cargando...</p>;

    const rawRole = user?.unsafeMetadata?.role; 
    const role = rawRole === 'seller' ? 'Seller' : rawRole === 'buyer' ? 'Buyer' : undefined;

  return (
    <div>
      <NavBar role={role} />
      <main>{children}</main>
    </div>
  );
}
