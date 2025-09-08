"use client";

import React from "react";
import Link from "next/link";

const HouseDetails: React.FC = () => {
  const position: [number, number] = [13.6980, -89.1910];

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Título */}
      <h2 className="text-center text-2xl font-semibold py-5">House Details</h2>

      {/* Vendedor */}
      <div className="flex items-center gap-3 pt-0.10 pb-5 px-20">
        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
        <div>
          <p className="text-base font-semibold">Isabella Ramírez</p>
          <p className="text-sm text-gray-500">✔ Verified by HavenUp</p>
        </div>
      </div>

      
      <p className="pt-0.10 pb-5 px-20 mt-3 text-gray-600">Spacious house in San Salvador</p>

      
      <div className="pt-0.10 pb-5 px-20 relative mt-5">
        <img
          src="/Imgs/Visualizacióncasa.png"
          alt="House"
          className="w-full h-[500px] object-cover rounded-lg"
        />

        
        <button className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-white rounded-full shadow p-3">
          ◀
        </button>
        <button className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-white rounded-full shadow p-3">
          ▶
        </button>
      </div>

      <div className="pt-4 pb-10 px-30 flex justify-end">
        <button className="bg-[#629584] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#073B3A]">
            Buy
        </button>
      </div>

     
      <div className="pt-4 pb-20 px-4">
        <div className="grid grid-cols-2 gap-y-10 gap-x-20 max-w-[800px] mx-auto text-gray-700">
        
          <div className="flex flex-col text-left">
            <p className="font-semibold">Price</p>
            <p>$850,000</p>
          </div>
          <div className="flex flex-col text-left">
            <p className="font-semibold">Rooms</p>
            <p>
              2 bedrooms, 2 bathrooms,
              <br />1 living room, 1 kitchen
            </p>
          </div>

         
          <div className="flex flex-col text-left">
            <p className="font-semibold">Built Area (m²)</p>
            <p>300 m²</p>
          </div>
          <div className="flex flex-col text-left">
            <p className="font-semibold">Land Area (ft²)</p>
            <p>2,500 sq ft</p>
          </div>

          
          <div className="flex flex-col text-left">
            <p className="font-semibold">Garage</p>
            <p>Yes – 2 cars</p>
          </div>
          <div className="flex flex-col text-left">
            <p className="font-semibold">Garden</p>
            <p>Yes, with trees and BBQ area</p>
          </div>

         
          <div className="flex flex-col text-left">
            <p className="font-semibold">Balcony</p>
            <p>Two balconies</p>
          </div>
          <div className="flex flex-col text-left">
            <p className="font-semibold">Property Type</p>
            <p>Urban land / Lot</p>
          </div>

          
          <div className="flex flex-col text-left">
            <p className="font-semibold">Legal Status</p>
            <p>Fully documented</p>
          </div>
          <div className="flex flex-col text-left">
            <p className="font-semibold">Utilities</p>
            <p>
              Water 💧 <br /> Electricity ⚡ <br /> Internet 🌐
            </p>
          </div>

          
          <div className="flex flex-col text-left">
            <p className="font-semibold">Nearby</p>
            <ul className="list-disc ml-5">
              <li>Metrocentro Mall</li>
              <li>Local shops and markets</li>
            </ul>
          </div>
          <div className="flex flex-col text-left">
            <p className="font-semibold">Additional</p>
            <p>Corner house</p>
          </div>
        </div>
      </div>

      <Link href={"/3DShowcase"}>
        <div className="mt-4 pt-4 pb-20 px-120">
          <button className="bg-[#629584] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#073B3A]">
            Explore in 3D
          </button>
        </div>
      </Link>

    
<div className="pt-2 pb-0.1 px-20">
  <p className="font-semibold text-lg">
    Location – <span className="text-gray-600">Downtown San Salvador</span>
  </p>
  
  
        <div className="w-full h-[300px] mt-4 rounded-lg overflow-hidden shadow-lg">
            <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.123456!2d-89.1910!3d13.6980!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6331f8d9b12345%3A0xabcdef1234567890!2sSan+Salvador!5e0!3m2!1ses!2ssv!4v1694073600000"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
 </div>

    
      <div className="mt-10 pt-4 pb-10 px-20">
        <h3 className="text-lg font-semibold mb-2">General Description</h3>
        <p className="text-gray-700">
          Located in the serene neighborhood of San Salvador, this property is
          situated on Calle Area, known for its quiet atmosphere and friendly
          community. The area is well-connected with bus routes 22 and 55,
          providing easy access to downtown and surrounding areas.
        </p>
      </div>

    
      <div className="mt-10 pt-4 pb-20 px-20">
        <h3 className="text-lg font-semibold mb-3">Contact</h3>
        <Link href={"/chat/buyer"}>
          <button className="w-full bg-[#629584] text-white py-3 rounded-lg font-semibold hover:bg-[#073B3A]">
            Chat
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HouseDetails;