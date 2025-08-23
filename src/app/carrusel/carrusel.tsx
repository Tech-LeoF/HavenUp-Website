'use client';
import { useState, useEffect } from "react";
import Link from "next/link";

const images = [
    "/Imgs/minicasa.webp",
    "/Imgs/casa.jpg",
    "/Imgs/casagrande.webp",
    
    "/Imgs/servicios.jpg"
];

export default function Carrusel(){
    
    const [current, setCurrent] = useState(0);
    
    const nextSlide = () => setCurrent((current +1) % images.length);
    const prevSlide = () => setCurrent((current - 1 + images.length) % images.length)
    
        
        useEffect(() =>{
        const interval = setInterval(() =>{
            setCurrent(prev => (prev + 1) % images.length);
        }, 10000)
        return()=>clearInterval(interval);
    }, []

); 
   
    


    return(
        <div style={{ fontFamily: "'Poppins', sans-serif" }} className="relative w-full  h-full">
            <img 
            src={images[current]} 
            alt={`Slide ${current}`} 
            className=" object-cover h-125 w-screen shadow-lg"
            />

        {current === 0 && (
            <>
            <div
            className="absolute top-[0rem] left-[0rem] bg-[#073B3A80]  text-white p-[clamp(1rem,4vw,2rem)] h-[78vh] text-left w-[60vw]"
            style={{
            clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
            }}
            >
            <h1 className="text-[clamp(2rem,3vw,5rem)] font-bold pt-[3rem]">Welcome to HavenUp!</h1><br />
            <p className="mt-[1rem]  pr-[3rem] text-[clamp(1rem,2vw,5rem)]">
            We are here to help you buy or sell your home without any hassle. Browse our platform and let us guide you every step so you can find exactly what you're looking for.
            </p>
            </div>
            <Link href="/login">
            <button className="absolute  right-[clamp(2rem,10vw,11.5rem)] top-[clamp(1rem,20vw,15rem)] text-[#073B3A] bg-[#F5F5DC] w-[clamp(8rem,15vw,15rem)] h-[clamp(3rem,9.5vh,9.5rem)] rounded-lg cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-400">
            Login
            </button>
            </Link>
            <Link href="/signUp">
            <button className="absolute  right-[clamp(2rem,10vw,11.5rem)] top-[clamp(12rem,23vw,25rem)] text-[#073B3A] bg-[#F5F5DC] w-[clamp(8rem,15vw,15rem)] h-[clamp(3rem,9.5vh,9.5rem)] rounded-lg cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-400">
            Sign Up
            </button>
            </Link>
            </>
            )}
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