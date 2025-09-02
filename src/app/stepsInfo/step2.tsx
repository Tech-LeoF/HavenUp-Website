'use client';

export default function Step2(){
    return(
    <figure style={{ fontFamily: "'Poppins', sans-serif" }} className="w-full h-250 flex justify-center items-center bg-white text-black">
        <div className="w-150 h-200 rounded-lg space-y-10">
            <div>
                <p className="text-3xl font-bold">
                    Step 2 - Upload Photos and Videos
                </p>
            </div>
            <div className="space-y-2">
                <p className="text-lg font-bold">
                    Upload Photos
                </p>
                <p className="text-sm">
                    Upload at least 3 photos of your property. High quality photos will atract more potential buyers
                </p>
            </div>
            <div className="flex justify-center">
                <div className="border-1 border-[#FFD166] w-150 h-45 rounded-lg flex flex-col justify-center items-center space-y-2 bg-[#F5F5DC]">
                    <div>
                        <p className="font-bold">Drag and drop photos here, or</p>
                    </div>
                    <div>
                        <p>Browse Files</p>
                    </div>
                    <div>
                        <input className="border-1 border-black rounded-lg w-50" type="file"/>
                    </div>
                </div>
            </div>
            <div className="space-y-2">
                <p className="text-lg font-bold">
                    Upload Video (Optional)
                </p>
                <p className="text-sm">
                    Add a video tour of your property to give potential buyers a more immersive experience
                </p>
            </div>
            <div className="flex justify-center">
                <div className="border-1 border-[#FFD166] w-150 h-45 rounded-lg flex flex-col justify-center items-center space-y-2 bg-[#F5F5DC]">
                    <div>
                        <p className="font-bold">Drag and drop Video here, or</p>
                    </div>
                    <div>
                        <p>Browse Files</p>
                    </div>
                    <div>
                        <input className="border-1 border-black rounded-lg w-50" type="file"/>
                    </div>
                </div>
            </div>
            <div className="flex justify-start space-x-2 text-gray-600 ">
                <input className="w-8" type="checkbox"/>
                <p>Request 3D View</p>
                
            </div>
        </div>
    </figure>
    );
};