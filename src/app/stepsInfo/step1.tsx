'use client';

export default function Step1(){
    return(
        <figure style={{ fontFamily: "'Poppins', sans-serif" }} className="bg-white w-full h-260 flex justify-center items-center">
            <div className="absolute -mt-233 -ml-19">
                <p className="text-black text-3xl font-bold">Step 1 - Basic Information</p>
            </div>
            <div className="bg-white-100 w-140 h-200 rounded-lg">
                <div className="text-black flex justify-center items-center w-120">
                    <div className="space-y-10">
                        <div className="space-y-2">
                            <p>Property Title</p>
                            <input placeholder="e.g.Spacious Family House in Soyapango" className=" rounded-lg bg-[#F5F5DC] w-90 h-10 p-3 text-sm" type="text" />
                        </div>
                        <div className="space-y-2">
                            <p>Property Type</p>
                            <select className="bg-[#F5F5DC] w-60 rounded-lg w-90 h-10 p-2 text-sm">
                                <option disabled selected hidden>Select Property Type</option>
                                <option></option>
                                <option>Residential Home</option>
                                <option>Apartament</option>
                                <option>Urban Land / Lot</option>
                                <option>Rural Land / Agricultural Lot</option>
                                <option>Small Commercial Space</option>
                                <option>Running Business For Sale</option>
                                <option>Gated Community Property</option>
                                <option>Storage Unit / Warehouse</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <p>Location</p>
                            <input placeholder="e.g.Pasaje Las Moras #22, Urbanización Belén, Cabañas" className="rounded-lg bg-[#F5F5DC] w-90 h-10 p-3 text-xs" type="text" />
                        </div>
                        <div className="space-y-2">
                            <p>Price</p>
                            <input placeholder="e.g.$10,000" className="rounded-lg bg-[#F5F5DC] w-90 h-10 p-3 text-sm" type="text" />
                        </div>
                        <div className="space-y-2">
                            <p>Built Area (m2)</p>
                            <input placeholder="e.g., 120" className="rounded-lg bg-[#F5F5DC] w-90 h-10 p-3 text-sm" type="text" />
                        </div>
                        <div className="space-y-2">
                            <p>Land Area (m2)</p>
                            <input placeholder="200" className="rounded-lg bg-[#F5F5DC] w-90 h-10 p-3 text-sm" type="text" />
                        </div>
                        <div className="space-y-2">
                            <p>Legal Status</p>
                                <select className="bg-[#F5F5DC] w-60 rounded-lg w-90 h-10 p-2 text-sm">
                                    <option disabled selected hidden>Select Legal Status</option>
                                    <option></option>
                                    <option>Fully Registered</option>
                                    <option>Legalization In Process</option>
                                    <option>Possession Rights</option>
                                    <option>Not Registered</option>
                                    <option>Mortgaged</option>
                                    <option>Shared Inheritance</option>
                                    <option>Under Dispute</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
        </figure>
    );
};