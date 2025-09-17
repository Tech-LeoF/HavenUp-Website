"use client";

import { useState } from "react";
import Step2 from "./step2";

export default function Page() {
  const [formData, setFormData] = useState<any>({
    fotos: [],
    videos: [],
  });

  // Función para actualizar campos del formData
  const handleChange = (field: string, value: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    console.log("Datos actuales:", formData);
    // Aquí podrías navegar al siguiente paso o guardar datos
  };

  const handleBack = () => {
    console.log("Regresando al paso anterior");
    // Aquí podrías navegar al paso anterior
  };

  return (
    <div className="p-4">
      <Step2
        formData={formData}
        onChange={handleChange}
        onNext={handleNext}
        onBack={handleBack}
      />
    </div>
  );
}
