"use client";
 
export default function Step3(){
    return(
        <figure style={{ fontFamily: "'Poppins', sans-serif" }} className="bg-white w-full h-260 flex flex-col justify-center items-center text-black space-y-10">
            <div>
                <p className="text-3xl font-bold">Step 3 - Detailed Information</p>
            </div>
            <div className="space-y-2">
                <p className="font-bold">Number of bedrooms</p>
                <select className="bg-[#F5F5DC] w-60 rounded-lg w-90 h-10 p-2 text-sm">
                    <option disabled selected hidden>Select Number Of Bedrooms</option>
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                </select>
            </div>
            <div className="space-y-2">
                <p className="font-bold">Number Of Bathrooms</p>
                <select className="bg-[#F5F5DC] w-60 rounded-lg w-90 h-10 p-2 text-sm">
                    <option disabled selected hidden>Select Number Of Bathrooms</option>
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                </select>
            </div>
            <div>
                <p className="font-bold">Nearby Services</p>
            </div>
            <div className="flex flex-row space-x-30">
                <div className="space-y-7">
                    <div className="flex flex-row space-x-2">
                        <input className="w-8" type="checkbox"/>
                        <p>Hospital</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                        <input className="w-8" type="checkbox"/>
                        <p>School</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                        <input className="w-8" type="checkbox"/>
                        <p>Supermarket</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                        <input className="w-8" type="checkbox"/>
                        <p>Public Transport</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                        <input className="w-8" type="checkbox"/>
                        <p>Church</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                        <input className="w-8" type="checkbox"/>
                        <p>Bank / ATM</p>
                    </div>
                </div>
                <div className="space-y-7">
                    <div className="flex flex-row space-x-2">
                        <input className="w-8" type="checkbox"/>
                        <p>Park / Recreational Area</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                        <input className="w-8" type="checkbox"/>
                        <p>Shopping Center</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                        <input className="w-8" type="checkbox"/>
                        <p>Hardware Store</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                        <input className="w-8" type="checkbox"/>
                        <p>Restaurants / Cafés</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                        <input className="w-8" type="checkbox"/>
                        <p>Gas Station</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                        <input className="w-8" type="checkbox"/>
                        <p>Fire Station / Police Station</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between w-150">
                <button className="w-20 h-10 bg-[#FFD166] rounded-lg">Back</button>
                <button className="w-40 h-10 bg-[#FFD166] rounded-lg">Submit For Review</button>
            </div>
        </figure>
    )
}