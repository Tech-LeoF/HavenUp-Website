"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import HV from "../house visualization/page";

type House = {
<<<<<<< HEAD
    id: number;
    title: string;
    city: string;
    img: string;
    details: string[];
    date: string;
=======
  id: number;
  title: string;
  city: string;
  img: string;
  details: string[];
>>>>>>> 476c2d93c34f3e048a19796499c306d528356d71
};

type Review = {
  id: number;
  name: string;
  avatar: string;
  date: string;
  rating: number;
  comment: string;
};

export default function Page() {
  const [search, setSearch] = useState("");
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: "Karla Polanco",
      avatar: "/Imgs/perfil 1.png",
      date: "Posted 3 days ago",
      rating: 5,
      comment:
        "This app is very functional and makes it easy to find houses quickly and without complications.",
    },
    {
      id: 2,
      name: "Marco Ayala",
      avatar: "/Imgs/perfil2.png",
      date: "Posted 2 days ago",
      rating: 5,
      comment:
        "I really like the 3D view, it’s clear and easy to explore every detail of the houses.",
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const [newName, setNewName] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [isFormOpen, setIsFormOpen] = useState(false);

<<<<<<< HEAD
    const [sortType, setSortType] = useState<"popular" | "newest">("popular");

    // Casas populares
    const popularHouses: House[] = [
        {
            id: 1,
            title: "House in colonia Mira Monte.",
            city: "Sonsonate",
            img: "/Imgs/casamiramonte.png",
            details: ["136m²", "3🛏", "2🛁", "1🚗"],
            date: "2023-12-01",
        },
        {
            id: 2,
            title: "House in colonia San Luis.",
            city: "San Salvador",
            img: "/Imgs/casasanluis.png",
            details: ["111m²", "3🛏", "2🛁", "1🚗"],
            date: "2024-02-15",
        },
        {
            id: 3,
            title: "House in colonia San Luis Abad.",
            city: "San Salvador",
            img: "/Imgs/casaabad.png",
            details: ["100m²", "2🛏", "1🛁", "1🚗"],
            date: "2024-04-10",
        },
        {
            id: 4,
            title: "House in Residencial Monte Carlo.",
            city: "San Salvador",
            img: "/Imgs/casaresidencial.png",
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
            img: "/Imgs/casabenito.png",
            details: ["710m²", "5🛏", "4🛁", "3🚗"],
            date: "2024-08-25",
        },
    ];

    // Casas nuevas (Newest)
    const newestHouses: House[] = [
        {
            id: 7,
            title: "House in versailles city.",
            city: "San Juan Opico",
            img: "/Imgs/newest1.png",
            details: ["77m²", "3🛏", "2🛁", "1🚗"],
            date: "2025-08-28",
        },
        {
            id: 8,
            title: "House in versailles city.",
            city: "San Juan Opico",
            img: "/Imgs/newest2.png",
            details: ["135m²", "4🛏", "3🛁", "2🚗"],
            date: "2025-08-28",
        },
        {
            id: 9,
            title: "House in versailles city.",
            city: "San Juan Opico",
            img: "/Imgs/newest3.png",
            details: ["163m²", "4🛏", "2🛁", "2🚗"],
            date: "2025-08-28",
        },
        {
            id: 10,
            title: "House in versailles city.",
            city: "San Juan Opico",
            img: "/Imgs/newest4.png",
            details: ["80m²", "3🛏", "3🛁", "3🚗"],
            date: "2025-08-28",
        },
        {
            id: 11,
            title: "House in versailles city.",
            city: "San Juan Opico",
            img: "/Imgs/newest5.png",
            details: ["100m²", "5🛏", "4🛁", "4🚗"],
            date: "2025-08-28",
        },
        {
            id: 12,
            title: "House in Villa del Mar",
            city: "Santa Tecla",
            img: "/Imgs/newest6.png",
            details: ["400m²", "4🛏", "3🛁", "2🚗"],
            date: "2025-08-28",
        },
    ];

    // Selecciona el array según el botón
    const filteredHouses = (sortType === "popular" ? popularHouses : newestHouses)
        .filter(
            (house) =>
                house.title.toLowerCase().includes(search.toLowerCase()) ||
                house.city.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
            if (sortType === "newest") {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            }
            return 0;
        });
=======
  const houses: House[] = [
    {
      id: 1,
      title: "House in colonia Mira Monte.",
      city: "Sonsonate",
      img: "/Imgs/casamiramonte.png",
      details: ["136m²", "3🛏", "2🛁", "1🚗"],
    },
    {
      id: 2,
      title: "House in colonia San Luis.",
      city: "San Salvador",
      img: "/Imgs/casasanluis.png",
      details: ["111m²", "3🛏", "2🛁", "1🚗"],
    },
    {
      id: 3,
      title: "House in colonia San Luis Abad.",
      city: "San Salvador",
      img: "/Imgs/casaabad.png",
      details: ["100m²", "2🛏", "1🛁", "1🚗"],
    },
    {
      id: 4,
      title: "House in Residencial Monte Carlo.",
      city: "San Salvador",
      img: "/Imgs/casaresidencial.png",
      details: ["136m²", "3🛏", "3🛁", "4🚗"],
    },
    {
      id: 5,
      title: "House in Ciudad Versalles.",
      city: "San Juan Opico",
      img: "/Imgs/casaversalles.png",
      details: ["460m²", "6🛏", "3🛁", "4🚗"],
    },
    {
      id: 6,
      title: "House in Colonia San Benito.",
      city: "San Salvador",
      img: "/Imgs/casabenito.png",
      details: ["710m²", "5🛏", "4🛁", "3🚗"],
    },
  ];

  const filteredHouses = houses.filter(
    (house) =>
      house.title.toLowerCase().includes(search.toLowerCase()) ||
      house.city.toLowerCase().includes(search.toLowerCase())
  );
>>>>>>> 476c2d93c34f3e048a19796499c306d528356d71

  const addReview = () => {
    if (!newName.trim() || !newComment.trim()) return;

    const newReview: Review = {
      id: reviews.length + 1,
      name: newName,
      avatar: "/Imgs/default-avatar.png",
      date: "Just now",
      rating: newRating,
      comment: newComment,
    };

<<<<<<< HEAD
    return (
        <div className="bg-pink-100">
            {/* Hero Section */}
            <div className="relative w-full h-screen flex items-center justify-center">
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/video/casitas.mp4" type="video/mp4" />
                    Tu navegador no soporta el video.
                </video>

                <div className="z-10 flex flex-col items-start w-full px-4 md:px-0 max-w-2xl">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
                        Looking for the perfect place?
                    </h1>
                    <p className="text-xl sm:text-4xl text-white mb-2">
                        Find your dream home today
                    </p>
                    <div className="relative w-full mt-4">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                className="w-5 h-5 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <input
                            type="text"
                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Search houses"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Properties Section */}
            <div className="bg-gray-100 py-10 px-4">
                <div className="max-w-6xl mx-auto px-4 mb-6 flex items-center space-x-2">
                    <button
                        onClick={() => setSortType("popular")}
                        className={`${sortType === "popular" ? "bg-gray-300" : "bg-white"
                            } hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-lg border border-gray-300`}
                    >
                        Popular
                    </button>
                    <button
                        onClick={() => setSortType("newest")}
                        className={`${sortType === "newest" ? "bg-gray-300" : "bg-white"
                            } hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-lg border border-gray-300`}
                    >
                        Newest
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {filteredHouses.map((house) => {
                        // 📌 Extraer los m²
                        const m2Detail = house.details[0];
                        const m2 = parseInt(m2Detail);
                        const price = m2 * 500; // 💰 Precio según los m²

                        return (
                            <div
                                key={house.id}
                                className="relative bg-white rounded-lg shadow-md overflow-hidden"
                            >
                                {/* Etiqueta del precio */}
                                <span className="absolute top-2 right-2 bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-lg shadow-md">
                                    ${price.toLocaleString()}
                                </span>

                                <img
                                    src={house.img}
                                    alt={house.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {house.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">{house.city}</p>
                                    <p className="text-xs text-gray-400">
                                        {new Date(house.date).toLocaleDateString()}
                                    </p>
                                    <ul className="flex flex-wrap gap-4 mt-2 text-sm text-gray-700">
                                        {house.details.map((detail, index) => (
                                            <li key={index}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Review Input Section */}
            <div className="relative w-full flex items-center justify-center bg-gray-900 py-20">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-70"
                    style={{ backgroundImage: "url('/Imgs/caareseña.png')" }}
                ></div>
                <div className="relative z-10 text-center max-w-2xl px-4">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
                        Share your opinion and help others find their home.
                    </h2>

                    <div className="flex flex-col max-w-xl mx-auto mt-4 bg-black-40">
                        <input
                            type="text"
                            placeholder="Write your review"
                            className="flex-1 px-4 py-3 text-sm rounded-l-full focus:outline-none"
                            value={newComment}
                            onFocus={() => setIsFormOpen(true)}
                            onChange={(e) => setNewComment(e.target.value)}
                        />

                        {isFormOpen && (
                            <div className="flex flex-col gap-2 mt-2">
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="px-4 py-2 rounded-lg border focus:outline-none"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                />
                                <select
                                    value={newRating}
                                    onChange={(e) => setNewRating(Number(e.target.value))}
                                    className="px-4 py-2 rounded-lg border focus:outline-none bg-gray-500"
                                >
                                    <option value={1}>★</option>
                                    <option value={2}>★★</option>
                                    <option value={3}>★★★</option>
                                    <option value={4}>★★★★</option>
                                    <option value={5}>★★★★★</option>
                                </select>
                            </div>
                        )}

                        <button
                            className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-full mt-2 self-end"
                            onClick={addReview}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="px-6 py-8 bg-white">
                <h3 className="text-xl font-bold mb-6 text-black">Top Reviews</h3>

                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="bg-green-50 rounded-lg p-4 mb-4 shadow-sm"
                    >
                        <div className="flex items-center gap-3">
                            <img
                                src={review.avatar}
                                alt={review.name}
                                className="w-10 h-10 rounded-full border"
                            />
                            <div>
                                <p className="font-semibold text-black">{review.name}</p>
                                <span className="text-gray-500 text-sm">{review.date}</span>
                            </div>
                        </div>
                        <p className="text-yellow-500 mt-2">
                            {"★".repeat(review.rating)}
                        </p>
                        <p className="text-gray-700 mt-1">{review.comment}</p>
                    </div>
                ))}
=======
    setReviews([newReview, ...reviews]);
    setNewName("");
    setNewComment("");
    setNewRating(5);
    setIsFormOpen(false);
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }} className="bg-pink-100">
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 z-0 bg-contain bg-center"
          style={{ backgroundImage: "url('/Imgs/casa1.png')" }}
        ></div>
        <div className="z-10 flex flex-col items-start w-full px-4 md:px-0 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
            Looking for the perfect place?
          </h1>
          <p className="text-xl sm:text-4xl text-white mb-2">
            Find your dream home today
          </p>
          <div className="relative w-full mt-4">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
>>>>>>> 476c2d93c34f3e048a19796499c306d528356d71
            </div>
            <input
              type="text"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search houses"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Properties Section */}
      <div className="bg-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto px-4 mb-6 flex items-center space-x-2">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-lg border border-gray-300">
            Popular
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-lg border border-gray-300">
            Newest
          </button>
          <button className="bg-white hover:bg-gray-100 p-2 rounded-lg border border-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 6h9.75M10.5 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 6h9.75M10.5 18a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
              />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredHouses.map((house) => (
            <div
              key={house.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Link href={`/HV`}>
                <img
                  src={house.img}
                  alt={house.title}
                  className="w-full h-48 object-cover cursor-pointer"
                />
              </Link >
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {house.title}
                </h3>
                <p className="text-gray-600 text-sm">{house.city}</p>
                <ul className="flex flex-wrap gap-4 mt-2 text-sm text-gray-700">
                  {house.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Input Section */}
      <div className="relative w-full flex items-center justify-center bg-gray-900 py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('/Imgs/caareseña.png')" }}
        ></div>
        <div className="relative z-10 text-center max-w-2xl px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
            Share your opinion and help others find their home.
          </h2>

          <div className="flex flex-col max-w-xl mx-auto mt-4 bg-black-40">
            <input
              type="text"
              placeholder="Write your review"
              className="flex-1 px-4 py-3 text-sm rounded-l-full focus:outline-none"
              value={newComment}
              onFocus={() => setIsFormOpen(true)}
              onChange={(e) => setNewComment(e.target.value)}
            />

            {isFormOpen && (
              <div className="flex flex-col gap-2 mt-2">
                <input
                  type="text"
                  placeholder="Your name"
                  className="px-4 py-2 rounded-lg border focus:outline-none"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
                <select
                  value={newRating}
                  onChange={(e) => setNewRating(Number(e.target.value))}
                  className="px-4 py-2 rounded-lg border focus:outline-none bg-gray-500"
                >
                  <option value={1}>★</option>
                  <option value={2}>★★</option>
                  <option value={3}>★★★</option>
                  <option value={4}>★★★★</option>
                  <option value={5}>★★★★★</option>
                </select>
              </div>
            )}

            <button
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-full mt-2 self-end"
              onClick={addReview}
            >
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="px-6 py-8 bg-white">
        <h3 className="text-xl font-bold mb-6 text-black">Top Reviews</h3>

        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-green-50 rounded-lg p-4 mb-4 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-10 h-10 rounded-full border"
            />
            <div>
                <p className="font-semibold text-black">{review.name}</p>
                <span className="text-gray-500 text-sm">{review.date}</span>
            </div>
            </div>
            <p className="text-yellow-500 mt-2">
            {"★".repeat(review.rating)}
            </p>
            <p className="text-gray-700 mt-1">{review.comment}</p>
        </div>
        ))}
    </div>
    </div>
);
}
<<<<<<< HEAD







=======
>>>>>>> 476c2d93c34f3e048a19796499c306d528356d71
