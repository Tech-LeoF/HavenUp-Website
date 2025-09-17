"use client";

import { useState } from "react";
import Step1 from "./step1"; // ajusta la ruta según dónde guardaste Step1.tsx

export default function Page() {
  // Estado que guarda los datos del formulario
  const [formData, setFormData] = useState({
    title: "",
    property_type: "",
    location: "",
    price: "",
    built_area: "",
    land_area: "",
    legal_status: ""
  });

  // Maneja cambios en los inputs
  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Acción al dar clic en "Next"
  const handleNext = () => {
    console.log("Datos capturados en Step1:", formData);
    // aquí podrías navegar a Step2, guardar en backend, etc.
  };

  return (
    <Step1 
      formData={formData} 
      onChange={handleChange} 
      onNext={handleNext} 
    />
  );
}
