import React from "react";
import Link from "next/link";

const HouseDetails: React.FC = () => {
    return (
        <div className="bg-gray-50 text-gray-800 min-h-screen">
        {/* Header */}
        <h2 className="text-center text-2xl font-semibold py-5">House Details</h2>

        {/* Profile */}
        <div className="flex items-center gap-3 px-10">
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div>
            <p className="text-base font-semibold">Isabella Ramírez</p>
            <p className="text-sm text-gray-500">✔ Verified by HavenUp</p>
            </div>
        </div>

        {/* Title */}
        <p className="px-10 mt-3 text-gray-600">Spacious house in San Salvador</p>

        {/* Image Full Width */}
        <div className="relative mt-5">
            <img
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
            alt="House"
            className="w-full h-[500px] object-cover"
        />

            {/* Label */}
            <span className="absolute top-5 left-5 bg-white text-xs px-3 py-1 rounded shadow">
                Main entrance
            </span>

            {/* Left arrow */}
            <button className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-white rounded-full shadow p-3">
                ◀
            </button>

            {/* Right arrow */}
            <button className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-white rounded-full shadow p-3">
                ▶
            </button>
            </div>

        {/* Buy button */}
        <div className="mt-6 flex justify-end px-10">
            <button className="bg-yellow-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500">
            Buy
            </button>
        </div>

        {/* Info Section */}
        <div className="mt-6 grid grid-cols-2 gap-6 px-10 text-gray-700">
            <div>
                <p className="font-semibold">Price</p>
                <p>$850,000</p>
            </div>
            <div>
                <p className="font-semibold">Rooms</p>
                <p>
                2 bedrooms, 2 bathrooms,
                <br />1 living room, 1 kitchen
                </p>
            </div>
            <div>
                <p className="font-semibold">Built Area (m²)</p>
                <p>300 m²</p>
            </div>
            <div>
                <p className="font-semibold">Land Area (ft²)</p>
                <p>2,500 sq ft</p>
            </div>
        </div>

        {/* Extra Features */}
        <div className="mt-10 grid grid-cols-2 gap-6 px-10 text-gray-700 text-sm">
            <div>
                <p className="font-semibold">Garage</p>
                <p>Yes – 2 cars</p>
            </div>
            <div>
                <p className="font-semibold">Garden</p>
                <p>Yes, with trees and BBQ area</p>
            </div>
            <div>
                <p className="font-semibold">Balcony</p>
                <p>Two balconies</p>
            </div>
            <div>
                <p className="font-semibold">Property Type</p>
                <p>Urban land / Lot</p>
            </div>
            <div>
                <p className="font-semibold">Legal Status</p>
                <p>Fully documented</p>
            </div>
            <div>
                <p className="font-semibold">Utilities</p>
                <p>
                Water 💧 <br /> Electricity ⚡ <br /> Internet 🌐
                </p>
            </div>
            <div>
                <p className="font-semibold">Nearby</p>
                <ul className="list-disc ml-5">
                    <li>Metrocentro Mall</li>
                    <li>Local shops and markets</li>
                </ul>
            </div>
            <div>
                <p className="font-semibold">Additional</p>
                <p>Corner house</p>
            </div>
        </div>

        {/* Explore Button */}
        <Link href={'/3DShowcase'}>
            <div className="mt-6 flex justify-center">
                <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600">
                    Explore in 3D
                </button>
            </div>
        </Link>

        {/* Location */}
        <div className="mt-10 px-10">
            <p className="font-semibold text-lg">
                Location – <span className="text-gray-600">Downtown San Salvador</span>
            </p>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5c/San_Salvador_map.png"
                alt="Map"
                className="w-full h-[300px] object-cover rounded-lg mt-4"
            />
        </div>

        {/* Description */}
        <div className="mt-10 px-10">
            <h3 className="text-lg font-semibold mb-2">General Description</h3>
            <p className="text-gray-700">
                Located in the serene neighborhood of San Salvador, this property is
                situated on Calle Area, known for its quiet atmosphere and friendly
                community. The area is well-connected with bus routes 22 and 55,
                providing easy access to downtown and surrounding areas.
            </p>
        </div>

        {/* Contacts */}
        <div className="mt-10 px-10 mb-10">
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <Link href={'/chat/buyer'}>
                <button className="w-full bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-800">
                    Chat
                </button>
            </Link>
        </div>
    </div>
    );
};

export default HouseDetails;
