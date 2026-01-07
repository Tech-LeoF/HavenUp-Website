
import React from "react";

const HomePage: React.FC = () => {
return (
    <div className="bg-pink-100">
      {/* Hero Section */}
    <div className="relative w-full h-screen flex items-center justify-center">
        <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
            backgroundImage:
            "url('casa.png')",
        }}
        ></div>

        <div className="z-10 flex flex-col items-start w-full px-4 md:px-0 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
            Looking for the perfect place?
        </h1>
        <p className="text-xl sm:text-2xl text-white mb-8">
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
            id="search-input"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="ask"
            required
            />
        </div>

        <div className="flex items-center space-x-2 mt-10">
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
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 6h9.75M10.5 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 6h9.75M10.5 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 6h9.75M10.5 18a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
            </svg>
            </button>
        </div>
        </div>
    </div>

      {/* Properties Section */}
    <div className="bg-gray-100 py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Lista de casas */}
        {[
            {
            name: "House in  colonia Mira Monte.",
            location: "San Salvador",
            size: "136m²",
            beds: 3,
            baths: 2,
            garage: 1,
            img: "https://via.placeholder.com/400x250?text=Casa+Mira+Monte",
            alt: "Casa en Mira Monte",
            },
            {
              name: "House in colonia San Luis.",
              location: "San Salvador",
              size: "111m²",
              beds: 3,
              baths: 2,
              garage: 1,
              img: "https://via.placeholder.com/400x250?text=Casa+San+Luis",
              alt: "House in San Luis",
            },
            {
              name: "House in colonia San Luis Abad.",
              location: "San Salvador",
              size: "100m²",
              beds: 2,
              baths: 1,
              garage: 1,
              img: "https://via.placeholder.com/400x250?text=Casa+San+Luis+Abad",
              alt: "House in San Luis Abad",
            },
            {
              name: "House in  Residencial Monte Carlo.",
              location: "San Salvador",
              size: "136m²",
              beds: 3,
              baths: 3,
              garage: 4,
              img: "https://via.placeholder.com/400x250?text=Residencial+Monte+Carlo",
              alt: "Casa en Residencial Monte Carlo",
            },
            {
              name: "House in Ciudad Versalles.",
              location: "San Juan Opico",
              size: "460m²",
              beds: 6,
              baths: 3,
            garage: 4,
            img: "https://via.placeholder.com/400x250?text=Ciudad+Versalles",
            alt: "House in  Ciudad Versalles",
            },
            {
            name: "House in  Colonia San Benito.",
            location: "San Salvador",
            size: "710m²",
            beds: 5,
            baths: 4,
            garage: 3,
            img: "https://via.placeholder.com/400x250?text=Colonia+San+Benito",
            alt: "House in  Colonia San Benito",
            },
        ].map((house, index) => (
            <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            >
            <img
                src={house.img}
                alt={house.alt}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                {house.name}
                </h3>
                <p className="text-gray-600 text-sm">{house.location}</p>
                <ul className="flex flex-wrap gap-4 mt-2 text-sm text-gray-700">
                <li>{house.size}</li>
                <li>{house.beds}🛏️</li>
                <li>{house.baths}🛁</li>
                <li>{house.garage}🚗</li>
                </ul>
            </div>
            </div>
        ))}
        </div>
    </div>

      {/* Reviews Section */}
    <div className="px-6 py-8 bg-[var(--background)] text-[var(--foreground)]">
        <h3 className="text-xl font-bold mb-6">Top Reviews</h3>

        {[
        {
            name: "Karla Polanco",
            avatar: "URL_AVATAR_KARLA",
            date: "Posted 3 days ago",
            rating: 5,
            comment:
            "This app is very functional and makes it easy to find houses quickly and without complications.",
        },
        {
            name: "Marco Ayala",
            avatar: "URL_AVATAR_MARCO",
            date: "Posted 2 days ago",
            rating: 5,
            comment:
            "I really like the 3D view, it’s clear and easy to explore every detail of the houses.",
        },
        ].map((review, index) => (
        <div
            key={index}
            className="bg-green-50 rounded-lg p-4 mb-4 shadow-sm"
        >
            <div className="flex items-center gap-3">
            <img
                src={review.avatar}
                alt={review.name}
                className="w-10 h-10 rounded-full border"
            />
            <div>
                <p className="font-semibold">{review.name}</p>
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
};

export default HomePage;
