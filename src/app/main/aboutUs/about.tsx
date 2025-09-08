'use client'

export default function About() {
    return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }} className="pr-8 pl-8"><br /><br />
    <div className="flex items-center w-full">
        <img
        src="/Imgs/familia.webp"
        alt="Familia"
        className="w-40 sm:w-60 md:w-80 lg:w-[25rem]  object-cover rounded-xl
        h-50 sm:h-70 md:h-90 lg:h-[25rem]"
        />

        <div className="flex flex-col text-center pl-[clamp(2rem,5vw,5rem)]">
        <h1 className="text-[clamp(1rem,3vw,3rem)] font-semibold text-black mb-2">
            About Us
        </h1>
        <p className="text-black max-w-xl text-[clamp(0.5rem,3vw,1.5rem)]">
            At HavenUp, we are dedicated to making buying or selling your home
            easy, fast, and secure. Our platform connects buyers and sellers
            reliably, offering options that suit your needs. We focus on
            transparency, personalized support, and making every step of the
            process simple.
        </p>
        </div>
    </div>
    </div>
);
}
