'use client';
import { useState } from "react";
import Link from "next/link";

const images = [
    "/Imgs/casa.jpg",
    "/Imgs/casagrande.webp",
    "/Imgs/minicasa.webp",
    "/Imgs/servicios.jpg"
];

export default function Carrusel(){
    const [current, setCurrent] = useState(0);
    
    const nextSlide = () => setCurrent((current +1) % images.length);
    const prevSlide = () => setCurrent((current - 1 + images.length) % images.length)

    return(
        <div className="relative w-full  h-full">
            <img 
            src={images[current]} 
            alt={`Slide ${current}`} 
            className=" object-cover h-125 w-screen shadow-lg"
            />

        {current === 0 && (
            <div
            className="absolute top-0 left-0 bg-blue-500/50 text-white p-6 h-125 text-left w-[700px]"
            style={{
            clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
            }}
            >
            <h1 className="text-5xl font-bold pt-20">Welcome to HavenUp!</h1><br />
            <p className="mt-2  pr-15 text-2xl">
            We are here to help you buy or sell your home without any hassle. Browse our platform and let us guide you every step so you can find exactly what you're looking for.
            </p>
            </div>
            )};
        <button 
        onClick={prevSlide} 
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
            ◀
        </button>
        <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        >
        ▶
        </button>
        <div
        className="flex justify-center mt-2 space-x-2"
        >
        {images.map((_, index) => (
            <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${index === current ? "bg-blue-500" : "bg-gray-300"}`}
            ></button>
        ))}
        </div>
        </div>
    );
}