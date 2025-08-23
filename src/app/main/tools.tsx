'use client'

export default function Tools() {
    return (
        <div style={{ fontFamily: "'Poppins', sans-serif" }}>
            <h1 className="text-center text-[#073B3A] font-semibold text-[clamp(2rem,4vw,4rem)]">Tools we Offer</h1><br />
            <div className="flex  w-full max-w-[1200px] mx-auto bg-[#A2BCB5] rounded-xl overflow-hidden">
            
            <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">

                 <div className="flex-1 flex flex-col items-center justify-center text-center p-6 border-r border-black">
                <img src="/Imgs/casa.png" alt="casa" className="w-[clamp(6rem,10vw,12rem)] h-auto mb-4"/>
                <h2 className="text-white text-[clamp(1.5rem,3vw,2rem)] font-semibold mb-2">3D visualization</h2>
                <p className="text-white text-[clamp(1rem,3vw,1.5rem)] leading-relaxed">
                    See your dream home in 3D and explore it from every angle.
                </p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center p-6 border-r border-black">
                <img src="/Imgs/ubication.png" alt="ubication" className="w-[clamp(4rem,10vw,7rem)] h-auto mb-4"/>
                <h2 className="text-white text-[clamp(1.5rem,3vw,2rem)] font-semibold mb-2">Nearby places</h2>
                <p className="text-white text-[clamp(1rem,3vw,1.5rem)] leading-relaxed">
                    Find nearby places to explore, shop and relax - just around the corner.
                </p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
                <img src="/Imgs/carretera.png" alt="carretera" className="w-[clamp(4rem,10vw,7rem)] h-auto mb-4"/>
                <h2 className="text-white text-[clamp(1.5rem,3vw,2rem)] font-semibold mb-2">Directions and routes</h2>
                <p className="text-white text-[clamp(1rem,3vw,1.5rem)] leading-relaxed">
                    Get directions and find the best route to your destination.
                </p>
            </div>
            </div>
           

        </div>
        </div>
        
    )
}
