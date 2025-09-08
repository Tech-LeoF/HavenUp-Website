"use client";

import Link from "next/link";

interface Step2Props {
  formData: any;
  onChange?: (field: string, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Step2({ formData, onChange, onNext, onBack }: Step2Props) {
  const handleFileChange = (field: string, files: FileList | null) => {
    if (!files) return;
    onChange && onChange(field, Array.from(files));
  };

  return (
    <figure style={{ fontFamily: "'Poppins', sans-serif" }} className="bg-white w-full h-260 flex justify-center items-center">
      <div className="absolute -mt-233 -ml-19">
        <p className="text-black text-3xl font-bold">Step 2 - Media Upload</p>
      </div>
      <div className="bg-white-100 w-140 h-200 rounded-lg">
        <div className="text-black flex justify-center items-center w-120">
          <div className="space-y-10">
            {/* Fotos */}
            <div className="space-y-2">
              <p>Photos</p>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => handleFileChange("fotos", e.target.files)}
                className="w-90"
              />
            </div>

            {/* Videos */}
            <div className="space-y-2">
              <p>Videos</p>
              <input
                type="file"
                multiple
                accept="video/*"
                onChange={(e) => handleFileChange("videos", e.target.files)}
                className="w-90"
              />
            </div>

            <div className="flex space-x-4">
              <Link href={'/stepsInfo'}>
                <button onClick={onBack} className="mt-4 w-40 h-10 bg-gray-300 rounded-lg">Back</button>
              </Link>
              <Link href={'Step3'}>
                <button onClick={onNext} className="mt-4 w-40 h-10 bg-[#FFD166] rounded-lg">Next</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
