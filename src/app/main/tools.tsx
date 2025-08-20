'use client'

export default function Tools(){
    return(
        <div className="text-center">
        <h1 className="text-[#073B3A] text-5xl font-semibold">Tools we offer</h1><br />
        <div className="absolute left-3 bg-[#A2BCB5] flex rounded-tl-xl rounded-bl-xl border-r-2 border-black">
            <img src="/Imgs/casa.png" alt="casa" className="w-50 h-50 inline-flex ml-5 mt-10 mb-3" />
            <div>
                <p className="inline-flex pr-5 text-3xl mt-7">3D vitualitation</p><br /><br />
            <p className=" leading-none text-2xl">See your <br /> dream home <br />in 3D and <br />explore it <br />from every <br /> angle.</p>
            </div>
        </div>
            <div className="absolute right-119.5 bg-[#A2BCB5] flex  border-r-2 border-black">
                <img src="/Imgs/ubication.png" alt="casa" className="w-45 h-45 inline-flex ml-5 mt-12 mb-6" />
                <div>
                <p className="inline-flex pr-5 text-3xl mt-7">Nearby places</p><br /><br />
            <p className=" leading-none text-2xl">find nearby <br /> places to <br />explore, shop <br />and relax - <br />just around <br /> the courner.</p>
                </div>
            </div> 
            <div className="absolute right-4 bg-[#A2BCB5] flex  rounded-tr-xl rounded-br-xl">
                <img src="/Imgs/carretera.png" alt="casa" className="w-35 h-35 inline-flex ml-5 mt-18 mb-10" />
                <div>
                <p className="inline-flex pr-5 text-3xl mt-7">Directions and routes</p><br /><br />
            <p className=" leading-none text-2xl">Get directions <br /> and find the <br />best route to <br />your <br />destination.</p>
                </div>
            </div> 
    </div>

    )
}    