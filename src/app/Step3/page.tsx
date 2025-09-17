"use client";

import { useState } from "react";
import Step3 from "./step3"; 

export default function Page() {
  const [formData, setFormData] = useState<any>({
    habitaciones: 0,
    banos: 0,
    servicios: [],
  });

  // Función para actualizar cualquier campo del formulario
  const handleChange = (field: string, value: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleBack = () => {
    console.log("Volviendo al paso anterior");
    // Aquí podrías usar router.back() o navegar a otra página
  };

  const handleSubmit = () => {
    console.log("Formulario final:", formData);
    alert("Formulario enviado! Revisa la consola");
    // Aquí puedes enviar datos a tu backend
  };

  return (
    <div className="p-4">
      <Step3
        formData={formData}
        onChange={handleChange}
        onBack={handleBack}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
