'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useUser } from '@clerk/nextjs';

const Profile: React.FC = () => {
  const {user, isLoaded} = useUser()
  
  if (!isLoaded) return <p>Loading...</p>

  const messages = [
    {
      title: "Property Inquiry - 123 Oak Street",
      content: "Hi Leonardo",
    },
    {
      title: "Apartment Inquiry - 456 Maple Avenue",
      content: "Hello, have you some questions about it?",
    },
  ];

  const properties = [
     {
            id: 1,
            title: "House in colonia Mira Monte.",
            city: "Sonsonate",
            img: "/Imgs/casamiramonte.avif",
            details: ["136m²", "3🛏", "2🛁", "1🚗"],
            date: "2023-12-01",
        },
        {
            id: 2,
            title: "House in colonia San Luis.",
            city: "San Salvador",
            img: "/Imgs/casasanluis.jpg",
            details: ["111m²", "3🛏", "2🛁", "1🚗"],
            date: "2024-02-15",
        },
        {
            id: 3,
            title: "House in colonia San Luis Abad.",
            city: "San Salvador",
            img: "/Imgs/casaabad.webp",
            details: ["100m²", "2🛏", "1🛁", "1🚗"],
            date: "2024-04-10",
        },
        {
            id: 4,
            title: "House in Residencial Monte Carlo.",
            city: "San Salvador",
            img: "/Imgs/casaresidencial.avif",
            details: ["136m²", "3🛏", "3🛁", "4🚗"],
            date: "2024-06-01",
        },
        {
            id: 5,
            title: "House in Ciudad Versalles.",
            city: "San Juan Opico",
            img: "/Imgs/casaversalles.png",
            details: ["460m²", "6🛏", "3🛁", "4🚗"],
            date: "2024-07-20",
        },
        {
            id: 6,
            title: "House in Colonia San Benito.",
            city: "San Salvador",
            img: "/Imgs/casabenito.jpeg",
            details: ["710m²", "5🛏", "4🛁", "3🚗"],
            date: "2024-08-25",
        },
  ];

  const [alerts, setAlerts] = useState([true, false]);

  const toggleAlert = (index: number) => {
    setAlerts((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  return (
    <>
      <div className="p-20 font-sans">
        <h1 className="text-4xl font-bold mb-10 bg-[var(--background)] text-[var(--foreground)]">My Profile</h1>

        {/* Perfil */}
        <div className="flex items-center space-x-4 mb-10">
          <img src={user?.imageUrl} alt="Buyer Avatar" 
          className='w-20 h-20 rounded-full'
          />
          <div>
            <h2 className="text-lg bg-[var(--background)] text-[var(--foreground)] font-bold">{user?.fullName}</h2>
            <p className="text-gray-600 text-sm">Buyer account</p>
            <p className="text-gray-600 text-sm">Joined 2025</p>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
          <div className="text-gray-400 border rounded-lg p-6 shadow text-center bg-gray-50 h-28 flex items-end justify-center">
            Total Saved
          </div>
          <div className="text-gray-400 border rounded-lg p-6 shadow text-center bg-gray-50 h-28 flex items-end justify-center">
            Recent Searches
          </div>
          <div className="text-gray-400 border rounded-lg p-6 shadow text-center bg-gray-50 h-28 flex items-end justify-center">
            Unread Messages
          </div>
          <div className="text-gray-400 border rounded-lg p-6 shadow text-center bg-gray-50 h-28 flex items-end justify-center">
            Saved Searches alert
          </div>
        </div>
      </div>

      {/* Propiedades guardadas */}
      <section className="pt-0.10 pb-5 px-20">
        <h2 className="text-2xl font-semibold mb-6">Saved Properties</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="mb-6"
        >
          {properties.map((property) => (
            <SwiperSlide key={property.id} className="flex p-4">
              <div className="bg-white rounded-xl p-4 shadow-lg transition transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between w-full">
                <div className="w-full h-40 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={property.img}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{property.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{property.city}</p>
                    <div className="flex justify-between text-sm text-gray-600">
                      {property.details.map((detail, idx) => (
                        <span key={idx}>{detail}</span>
                      ))}
                    </div>
                  </div>
                  <button className="mt-4 w-full text-white bg-[#629584] py-2 rounded hover:bg-[#073B3A] transition">
                    View Details
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Actividad reciente */}
      <section className="mt-12 pt-0.10 pb-20 px-20">
        <h2 className="text-2xl font-semibold mb-6">Recent Activity</h2>
        <div className="space-y-6">
          {properties.slice(0, 2).map((property) => (
            <div
              key={property.id}
              className="flex items-center justify-between bg-white shadow rounded-lg p-4"
            >
              <div className="flex items-center space-x-4">
                <div className="w-20 h-16 bg-gray-300 rounded-md overflow-hidden">
                  <img
                    src={property.img}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-black">{property.title}</p>
                  <p className="text-sm text-gray-500">
                    {property.details.join(" · ")}
                  </p>
                </div>
              </div>
              <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-200 transition">
                View Again
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Mensajes */}
      <div className="bg-[var(--background)] text-[var(--foreground)] pt-0.10 pb-20 px-20 font-sans">
        <section>
          <h2 className="text-2xl font-semibold mb-6">Messages</h2>
          {messages.map((msg, index) => (
            <div key={index} className="flex items-start space-x-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white text-xl">
                👤
              </div>
              <div>
                <p className="font-semibold">{msg.title}</p>
                <p className="text-sm text-gray-600">{msg.content}</p>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Búsquedas y alertas */}
      <section className="pt-0.10 pb-5 px-20">
        <h2 className="text-lg font-semibold mb-6 bg-[var(--background)] text-[var(--foreground)]">
          Search and Alerts
        </h2>
        <div className="space-y-4 mb-6">
          {alerts.map((enabled, index) => (
            <div key={index} className="flex items-center justify-between">
              <button 
              type="button"
              aria-label="Search"
              className="w-10 h-10 border rounded-md flex items-center justify-center hover:bg-gray-100 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1111.5 4a7.5 7.5 0 015.15 12.65z"
                  />
                </svg>
              </button>

              
              <button
                onClick={() => toggleAlert(index)}
                className={`relative w-12 h-6 flex items-center rounded-full transition-colors ${
                  enabled ? "bg-[#5A6F85]" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute w-5 h-5 bg-gray-100 rounded-full shadow transform transition-transform ${
                    enabled ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>

        <button className="bg-[#F5F3ED] text-black font-medium px-4 py-2 rounded hover:bg-[#e4e1d9] transition">
          Create New Search Alert
        </button>
      </section>
    </>
  );
};

export default Profile;