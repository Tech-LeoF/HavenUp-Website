<<<<<<< HEAD
import Image from "next/image";
const houses = [
  {
    id: "1",
    title: "House in colonia Mira Monte",
    location: "San Salvador",
    price: 850000,
    area: 300,
    land: 2500,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    map: "https://upload.wikimedia.org/wikipedia/commons/5/5c/San_Salvador_map.png",
    description:
      "Located in the serene neighborhood of San Salvador, this property is situated on Calle Area, known for its quiet atmosphere and friendly community.",
    features: {
      rooms: "2 bedrooms, 2 bathrooms, 1 living room, 1 kitchen",
      garage: "Yes – 2 cars",
      garden: "Yes, with trees and BBQ area",
      balcony: "Two balconies",
      type: "Urban land / Lot",
      legal: "Fully documented",
      utilities: ["Water 💧", "Electricity ⚡", "Internet 🌐"],
      nearby: ["Metrocentro Mall", "Local shops and markets"],
      additional: "Corner house",
    },
  },
  {
    id: "2",
    title: "House in colonia San Luis",
    location: "San Salvador",
    price: 550000,
    area: 200,
    land: 1500,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    map: "https://upload.wikimedia.org/wikipedia/commons/5/5c/San_Salvador_map.png",
    description:
      "Beautiful home in San Luis with modern design and easy access to main roads.",
    features: {
      rooms: "3 bedrooms, 2 bathrooms, 1 living room, 1 kitchen",
      garage: "Yes – 1 car",
      garden: "Small garden",
      balcony: "One balcony",
      type: "Urban house",
      legal: "Fully documented",
      utilities: ["Water 💧", "Electricity ⚡"],
      nearby: ["Schools", "Supermarkets"],
      additional: "Recently renovated",
    },
  },
];

export default function HousePage({ params }: { params: { id: string } }) {
  const house = houses.find((h) => h.id === params.id);

  if (!house) {
    return <p className="text-center mt-10 text-red-600">House not found</p>;
  }

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <h2 className="text-center text-2xl font-semibold py-5">
        {house.title}
      </h2>

      {/* Imagen principal */}
      <div className="relative mt-5">
        <Image
          src={house.image}
          alt={house.title}
          width={1200}
          height={500}
          className="w-full h-[500px] object-cover"
        />
        <span className="absolute top-5 left-5 bg-white text-xs px-3 py-1 rounded shadow">
          {house.location}
        </span>
      </div>

      {/* Botón de compra */}
      <div className="mt-6 flex justify-end px-10">
        <button className="bg-yellow-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500">
          Buy
        </button>
      </div>

      {/* Detalles */}
      <div className="mt-6 grid grid-cols-2 gap-6 px-10 text-gray-700">
        <div>
          <p className="font-semibold">Price</p>
          <p>${house.price.toLocaleString()}</p>
        </div>
        <div>
          <p className="font-semibold">Rooms</p>
          <p>{house.features.rooms}</p>
        </div>
        <div>
          <p className="font-semibold">Built Area (m²)</p>
          <p>{house.area} m²</p>
        </div>
        <div>
          <p className="font-semibold">Land Area (ft²)</p>
          <p>{house.land} sq ft</p>
        </div>
      </div>

      {/* Características */}
      <div className="mt-10 grid grid-cols-2 gap-6 px-10 text-gray-700 text-sm">
        <div>
          <p className="font-semibold">Garage</p>
          <p>{house.features.garage}</p>
        </div>
        <div>
          <p className="font-semibold">Garden</p>
          <p>{house.features.garden}</p>
        </div>
        <div>
          <p className="font-semibold">Balcony</p>
          <p>{house.features.balcony}</p>
        </div>
        <div>
          <p className="font-semibold">Property Type</p>
          <p>{house.features.type}</p>
        </div>
        <div>
          <p className="font-semibold">Legal Status</p>
          <p>{house.features.legal}</p>
        </div>
        <div>
          <p className="font-semibold">Utilities</p>
          <ul className="list-disc ml-5">
            {house.features.utilities.map((u, i) => (
              <li key={i}>{u}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold">Nearby</p>
          <ul className="list-disc ml-5">
            {house.features.nearby.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold">Additional</p>
          <p>{house.features.additional}</p>
        </div>
      </div>

      {/* Mapa */}
      <div className="mt-10 px-10">
        <p className="font-semibold text-lg">
          Location –{" "}
          <span className="text-gray-600">{house.location}</span>
        </p>
        <Image
          src={house.map}
          alt="Map"
          width={800}
          height={300}
          className="w-full h-[300px] object-cover rounded-lg mt-4"
        />
      </div>

      {/* Descripción */}
      <div className="mt-10 px-10">
        <h3 className="text-lg font-semibold mb-2">General Description</h3>
        <p className="text-gray-700">{house.description}</p>
      </div>

      {/* Contacto */}
      <div className="mt-10 px-10 mb-10">
        <h3 className="text-lg font-semibold mb-3">Contact</h3>
        <button className="w-full bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-800">
          Chat
        </button>
      </div>
    </div>
  );
}
=======
'use client'

import HouseDetails from "./houseVisualization";

export default function HV() {
return (
    <HouseDetails />
);
}
>>>>>>> 476c2d93c34f3e048a19796499c306d528356d71
