'use client';

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Profile: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const messages = [
    {
      title: "Property Inquiry - 123 Oak Street",
      content:
        "Hi Leonardo, I'm interested in the property at 123 Oak Street. Could we schedule a viewing?",
    },
    {
      title: "Apartment Inquiry - 456 Maple Avenue",
      content:
        "Hello, I have a few questions about the apartment at 456 Maple Avenue. Is it still available?",
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

  return (
    <>
      <div className="p-20 font-sans bg-[var(--background)] text-[var(--foreground)]">
        <h1 className="text-4xl font-bold mb-10 bg-[var(--background)] text-[var(--foreground)]">My Profile</h1>

        {/* User Info */}
        <div className="flex items-center space-x-4 mb-10">
          <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center text-white text-3xl">
            L
          </div>
          <div>
            <h2 className="text-lg bg-[var(--background)] text-[var(--foreground)] font-bold">Leonardo López</h2>
            <p className="text-gray-600 text-sm">Verified Seller</p>
            <p className="text-gray-600 text-sm">Real Estate Agent</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
          <div className="text-gray-400 border rounded-lg p-6 shadow text-center bg-gray-50 h-28 flex items-end justify-center">
            Total Listings
          </div>
          <div className="text-gray-400 border rounded-lg p-6 shadow text-center bg-gray-50 h-28 flex items-end justify-center">
            Active Views
          </div>
          <div className="text-gray-400 border rounded-lg p-6 shadow text-center bg-gray-50 h-28 flex items-end justify-center">
            Unread Messages
          </div>
          <div className="text-gray-400 border rounded-lg p-6 shadow text-center bg-gray-50 h-28 flex items-end justify-center">
            Interest Score
          </div>
        </div>

        {/* Account Status */}
        <div>
          <h2 className="bg-[var(--background)] text-[var(--foreground)] text-lg font-bold mb-4">Account Status</h2>

          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src="/Imgs/verificación.png" alt="verification" />
              </div>
              <span className="bg-[var(--background)] text-[var(--foreground)]">Verified</span>
            </div>
            <span>✔️</span>
          </div>

          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src="/Imgs/estrella.png" alt="star" />
              </div>
              <span className="bg-[var(--background)] text-[var(--foreground)]">Top Seller Badge</span>
            </div>
            <span>✔️</span>
          </div>
        </div>
      </div>

      {/* Messages & Properties */}
      <div className="bg-[var(--background)] text-[var(--foreground)] pt-1 pb-20 px-20 font-sans">
        {/* Messages Section */}
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

        {/* Properties Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">My Properties</h2>

          {!showAll ? (
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
                  <div className="bg-white rounded-xl p-4 g shadow-2xl transition transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between w-full">
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
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="bg-white rounded-xl p-4 shadow-lg flex flex-col justify-between"
                >
                  <div className="w-85 h-60 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={property.img}
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <h3 className="font-semibold text-lg">{property.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{property.city}</p>
                  <div className="flex justify-between text-sm text-gray-600">
                    {property.details.map((detail, idx) => (
                      <span key={idx}>{detail}</span>
                    ))}
                  </div>
                  <button className="mt-4 w-full text-white bg-[#629584] py-2 rounded hover:bg-[#073B3A] transition">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Botón */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-white bg-[#629584] font-semibold px-6 py-3 rounded hover:bg-[#073B3A] transition"
            >
              {showAll ? "Show Carousel" : "View All Properties"}
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Profile;