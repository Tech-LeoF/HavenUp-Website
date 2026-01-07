"use client";

import Link from "next/link";

interface Step1Props {
  formData: any;
  onChange?: (field: string, value: any) => void;
  onNext: () => void;
}

export default function Step1({ formData, onChange, onNext }: Step1Props) {
  return (
    <figure
      style={{ fontFamily: "'Poppins', sans-serif" }}
      className="bg-[var(--background)] text-[var(--foreground)] w-full h-260 flex justify-center items-center"
    >
      <div className="absolute -mt-233 -ml-19">
        <p className=" text-3xl font-bold">Step 1 - Basic Information</p>
      </div>
      <div className="bg-white-100 w-140 h-200 rounded-lg">
        <div className="text-black flex justify-center items-center w-120">
          <div className="space-y-10">
            <div className="space-y-2">
              <p className="bg-[var(--background)] text-[var(--foreground)]" >Property Title</p>
              <input
                value={formData?.title || ""}
                onChange={(e) => onChange && onChange("title", e.target.value)}
                placeholder="e.g. Spacious Family House in Soyapango"
                className="rounded-lg bg-[#F5F5DC] w-90 h-10 p-3 text-sm"
                type="text"
              />
            </div>

            <div className="space-y-2">
              <p className="bg-[var(--background)] text-[var(--foreground)]">Property Type</p>
              <select
                value={formData?.property_type || ""}
                onChange={(e) => onChange && onChange("property_type", e.target.value)}
                className="bg-[#F5F5DC] rounded-lg w-90 h-10 p-2 text-sm"
              >
                <option disabled value="">Select Property Type</option>
                <option>Residential Home</option>
                <option>Apartment</option>
                <option>Urban Land / Lot</option>
                <option>Rural Land / Agricultural Lot</option>
                <option>Small Commercial Space</option>
                <option>Running Business For Sale</option>
                <option>Gated Community Property</option>
                <option>Storage Unit / Warehouse</option>
              </select>
            </div>

            <div className="space-y-2">
              <p className="bg-[var(--background)] text-[var(--foreground)]">Location</p>
              <input
                value={formData?.location || ""}
                onChange={(e) => onChange && onChange("location", e.target.value)}
                placeholder="e.g. Pasaje Las Moras #22, Urbanización Belén, Cabañas"
                className="rounded-lg bg-[#F5F5DC] w-90 h-10 p-3 text-xs"
                type="text"
              />
            </div>

            <div className="space-y-2">
              <p className="bg-[var(--background)] text-[var(--foreground)]">Price</p>
              <input
                value={formData?.price || ""}
                onChange={(e) => onChange && onChange("price", e.target.value)}
                placeholder="e.g. $10,000"
                className="rounded-lg bg-[#F5F5DC] w-90 h-10 p-3 text-sm"
                type="number"
              />
            </div>

            <div className="space-y-2">
              <p className="bg-[var(--background)] text-[var(--foreground)]">Built Area (m2)</p>
              <input
                value={formData?.built_area || ""}
                onChange={(e) => onChange && onChange("built_area", e.target.value)}
                placeholder="e.g., 120"
                className="rounded-lg bg-[#F5F5DC] w-90 h-10 p-3 text-sm"
                type="number"
              />
            </div>

            <div className="space-y-2">
              <p className="bg-[var(--background)] text-[var(--foreground)]">Land Area (m2)</p>
              <input
                value={formData?.land_area || ""}
                onChange={(e) => onChange && onChange("land_area", e.target.value)}
                placeholder="e.g., 200"
                className="rounded-lg bg-[#F5F5DC] w-90 h-10 p-3 text-sm"
                type="number"
              />
            </div>

            <div className="space-y-2">
              <p className="bg-[var(--background)] text-[var(--foreground)]">Legal Status</p>
              <select
                value={formData?.legal_status || ""}
                onChange={(e) => onChange && onChange("legal_status", e.target.value)}
                className="bg-[#F5F5DC] rounded-lg w-90 h-10 p-2 text-sm"
              >
                <option disabled value="">Select Legal Status</option>
                <option>Fully Registered</option>
                <option>Legalization In Process</option>
                <option>Possession Rights</option>
                <option>Not Registered</option>
                <option>Mortgaged</option>
                <option>Shared Inheritance</option>
                <option>Under Dispute</option>
              </select>
            </div>

            <div>
              <Link href={'/Step2'}>
                <button
                onClick={onNext}
                className="mt-4 w-40 h-10 bg-[#FFD166] rounded-lg hover:bg-[#FFD166CC] cursor-pointer"
                >
                Next
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
