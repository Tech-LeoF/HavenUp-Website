"use client";
import { useState } from "react";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import PreviewCard from "./card";

export default function FormPublicar() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    property_type: "",
    location: "",
    price: "",
    built_area: "",
    land_area: "",
    legal_status: "",
    fotos: [] as File[],
    videos: [] as File[],
    habitaciones: 0,
    banos: 0,
    servicios: [] as string[],
  });

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    // Aquí podrías subir fotos/videos primero a un storage y obtener URLs
    const res = await fetch("/api/propiedades", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log("Guardado:", data);
  };

  return (
    <div className="flex space-x-6">
      <div>
        {step === 1 && (
          <Step1 formData={formData} onChange={handleChange} onNext={nextStep} />
        )}
        {step === 2 && (
          <Step2
            formData={formData}
            onChange={handleChange}
            onNext={nextStep}
            onBack={prevStep}
          />
        )}
        {step === 3 && (
          <Step3
            formData={formData}
            onChange={handleChange}
            onBack={prevStep}
            onSubmit={handleSubmit}
          />
        )}
      </div>

      {/* Preview */}
      <div className="sticky top-4">
        <h3 className="font-bold text-lg mb-2">Preview</h3>
        <PreviewCard formData={formData} />
      </div>
    </div>
  );
}
