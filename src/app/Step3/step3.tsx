"use client";

import Link from "next/link";

interface Step3Props {
  formData: any;
  onChange?: (field: string, value: any) => void;
  onBack: () => void;
  onSubmit: () => void;
}

export default function Step3({ formData, onChange, onBack, onSubmit }: Step3Props) {
  const handleServicioToggle = (servicio: string) => {
    if (!onChange) return;
    const current = formData?.servicios || [];
    if (current.includes(servicio)) {
      onChange("servicios", current.filter((s: string) => s !== servicio));
    } else {
      onChange("servicios", [...current, servicio]);
    }
  };

  return (
    <figure style={{ fontFamily: "'Poppins', sans-serif" }} className="bg-[var(--background)] text-[var(--foreground)] w-full h-260 flex justify-center items-center">
      <div className="absolute -mt-233 -ml-19">
        <p className=" text-3xl font-bold bg-[var(--background)] text-[var(--foreground)]">Step 3 - Property Details</p>
      </div>
      <div className="bg-white-100 w-140 h-200 rounded-lg">
        <div className="text-black flex justify-center items-center w-120">
          <div className="space-y-10">

            {/* Habitaciones */}
            <div className="space-y-2">
              <p className="bg-[var(--background)] text-[var(--foreground)]">Number of Bedrooms</p>
              <select
                value={formData?.habitaciones || 0}
                onChange={(e) => onChange && onChange("habitaciones", Number(e.target.value))}
                className="bg-[#F5F5DC] w-90 rounded-lg h-10 p-2 text-sm"
              >
                <option value={0} disabled>Select Bedrooms</option>
                {[1,2,3,4,5].map((n) => <option key={n}>{n}</option>)}
              </select>
            </div>

            {/* Baños */}
            <div className="space-y-2">
              <p className="bg-[var(--background)] text-[var(--foreground)]">Number of Bathrooms</p>
              <select
                value={formData?.banos || 0}
                onChange={(e) => onChange && onChange("banos", Number(e.target.value))}
                className="bg-[#F5F5DC] w-90 rounded-lg h-10 p-2 text-sm"
              >
                <option value={0} disabled>Select Bathrooms</option>
                {[1,2,3,4].map((n) => <option key={n}>{n}</option>)}
              </select>
            </div>

            {/* Servicios */}
            <div className="space-y-2">
              <p className="bg-[var(--background)] text-[var(--foreground)]">Services</p>
              <div className="flex flex-wrap gap-2">
                {["Water", "Electricity", "Gas", "Internet"].map((s) => (
                  <label key={s} className="bg-[#F5F5DC] px-2 py-1 rounded-lg cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData?.servicios?.includes(s) || false}
                      onChange={() => handleServicioToggle(s)}
                      className="mr-1"
                    />
                    {s}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <Link href={'/Step2'}>
                <button onClick={onBack} className="mt-4 w-40 h-10 bg-gray-300 rounded-lg">Back</button>
              </Link>
              <Link href={'/'}>
                <button onClick={onSubmit} className="mt-4 w-40 h-10 bg-[#FFD166] rounded-lg">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
