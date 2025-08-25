'use client'

export default function Pilar(){
    return(
       <>
        <div className="flex flex-row gap-6 items-center ml-[clamp(4rem,4vw,6rem)]">
        <button className="inline-flex bg-yellow-100 rounded-xl p-1.5">
        <img
        src="/Imgs/vivienda.png"
        className="w-[clamp(3rem,2vw,3.5rem)] h-[clamp(3rem,3vw,3.5rem)]"
        />
        <h1 className="text-[clamp(2rem,3vw,3rem)] font-semibold text-black px-1">
        Mission
        </h1>
        </button>

        <button className="inline-flex bg-yellow-100 rounded-xl p-1.5 ml-[clamp(48rem,5vw,53rem)]">
        <img
        src="/Imgs/propuesta-de-valor.png"
        className="w-[clamp(3rem,2vw,3.5rem)] h-[clamp(3rem,3vw,3.5rem)]"
        />
        <h1 className="text-[clamp(2rem,3vw,3rem)] font-semibold text-black px-1">
        Values
        </h1>
        </button>
        </div>
        <button className="inline-flex bg-yellow-100 rounded-xl p-1.5 ml-[clamp(36rem,5vw,41rem)]">
        <img
        src="/Imgs/vision.png"
        className="w-[clamp(3rem,2vw,3.5rem)] h-[clamp(3rem,3vw,3.5rem)]"
        />
        <h1 className="text-[clamp(2rem,3vw,3rem)] font-semibold text-black px-1">
        Vision
        </h1>
        </button>

    </> 
    )
    
}