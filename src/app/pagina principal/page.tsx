import React from "react";

const HomePage: React.FC = () => {
return (
    <div className="bg-pink-200">
      {/* Hero Section */}
    <div className="relative w-full h-screen flex items-center justify-center">
        <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('4a59584df9da7bba45aa001e670a2bda 1.png')" }}
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
                />
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
          {/* Repeat this block for each house */}
        {[
            {
            img: "https://via.placeholder.com/400x250?text=Casa+Mira+Monte",
            alt: "House in Mira Monte",
            title: "House in colonia Mira Monte.",
            location: "San Salvador",
            details: ["136m²", "3🛏️", "2🛁", "1🚗"],
            },
            {
            img: "https://via.placeholder.com/400x250?text=Casa+San+Luis",
            alt: "House in San Luis",
            title: "House in colonia San Luis.",
            location: "San Salvador",
            details: ["111m²", "3🛏️", "2🛁", "1🚗"],
            },
            {
            img: "https://via.placeholder.com/400x250?text=Casa+San+Luis+Abad",
            alt: "House in San Luis Abad",
            title: "House in colonia San Luis Abad.",
            location: "San Salvador",
            details: ["100m²", "2🛏️", "1🛁", "1🚗"],
            },
            {
            img: "https://via.placeholder.com/400x250?text=Residencial+Monte+Carlo",
            alt: "House in Residencial Monte Carlo",
            title: "House in Residencial Monte Carlo.",
            location: "San Salvador",
            details: ["136m²", "3🛏️", "3🛁", "4🚗"],
            },
            {
            img: "https://via.placeholder.com/400x250?text=Ciudad+Versalles",
            alt: "House in Ciudad Versalles",
            title: "House in Ciudad Versalles.",
            location: "San Juan Opico",
            details: ["460m²", "6🛏️", "3🛁", "4🚗"],
            },
            {
            img: "https://via.placeholder.com/400x250?text=Colonia+San+Benito",
            alt: "House in Colonia San Benito",
            title: "House in Colonia San Benito.",
            location: "San Salvador",
            details: ["710m²", "5🛏️", "4🛁", "3🚗"],
            },
].map((house, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={house.img} alt={house.alt} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{house.title}</h3>
                <p className="text-gray-600 text-sm">{house.location}</p>
                <ul className="flex flex-wrap gap-4 mt-2 text-sm text-gray-700">
                {house.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                ))}
                </ul>
            </div>
            </div>
        ))}
        </div>
    </div>

      {/* Review Input Section */}
    <div className="relative w-full flex items-center justify-center bg-gray-900 py-16">
        <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
            backgroundImage:
            "url('https://via.placeholder.com/1200x400?text=House+Background')",
        }}
        ></div>
        <div className="relative z-10 text-center max-w-2xl px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
            Share your opinion and help others find their home.
        </h2>
        <div className="flex w-full bg-white rounded-full shadow-lg overflow-hidden">
            <div className="flex items-center pl-4 text-gray-400">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
                />
            </svg>
            </div>
            <input
            type="text"
            placeholder="Write your review"
            className="flex-1 px-4 py-3 text-sm focus:outline-none"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3">
            Send
            </button>
        </div>
        </div>
    </div>

      {/* Reviews Section */}
    <div className="px-6 py-8 bg-white">
        <h3 className="text-xl font-bold mb-6">Top Reviews</h3>

        {[
        {
            avatar: "URL_AVATAR_KARLA",
            name: "Karla Polanco",
            date: "Posted 3 days ago",
            stars: "★★★★★",
            text: "This app is very functional and makes it easy to find houses quickly and without complications.",
        },
        {
            avatar: "URL_AVATAR_MARCO",
            name: "Marco Ayala",
            date: "Posted 2 days ago",
            stars: "★★★★★",
            text: "I really like the 3D view, it’s clear and easy to explore every detail of the houses.",
        },
        ].map((review, idx) => (
        <div key={idx} className="bg-green-50 rounded-lg p-4 mb-4 shadow-sm">
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
            <p className="text-yellow-500 mt-2">{review.stars}</p>
            <p className="text-gray-700 mt-1">{review.text}</p>
        </div>
        ))}
    </div>
    </div>
);
};

export default HomePage;

