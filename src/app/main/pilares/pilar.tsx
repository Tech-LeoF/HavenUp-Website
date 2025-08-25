'use client'

export default function Pilar() {
  return (
    <div className="flex flex-col gap-6 w-full px-[clamp(1rem,4vw,4rem)]">
    
      <div className="flex justify-between items-center w-full">
        <button className="inline-flex bg-yellow-100 rounded-xl p-1.5">
          <img
            src="/Imgs/vivienda.png"
            className="w-[clamp(1.5rem,2vw,3.5rem)] h-[clamp(1.5rem,3vw,3.5rem)]"
          />
          <h1 className="text-[clamp(1rem,3vw,3rem)] font-semibold text-black px-1">
            Mission
          </h1>
        </button>

        <button className="inline-flex bg-yellow-100 rounded-xl p-1.5">
          <img
            src="/Imgs/propuesta-de-valor.png"
            className="w-[clamp(1.5rem,2vw,3.5rem)] h-[clamp(1rem,3vw,3.5rem)]"
          />
          <h1 className="text-[clamp(1rem,3vw,3rem)] font-semibold text-black px-1">
            Values
          </h1>
        </button>
      </div>

      <div className="flex justify-center">
        <button className="inline-flex bg-yellow-100 rounded-xl p-1.5">
          <img
            src="/Imgs/vision.png"
            className="w-[clamp(1.5rem,2vw,3.5rem)] h-[clamp(1rem,3vw,3.5rem)]"
          />
          <h1 className="text-[clamp(1rem,3vw,3rem)] font-semibold text-black px-1">
            Vision
          </h1>
        </button>
      </div>
    </div>
  )
}
