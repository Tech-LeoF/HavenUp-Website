
"use client"; 
import React, { useState } from "react";

type Casa = {
    id: number;
    titulo: string;
    ubicacion: string;
    precio: number;
    habitaciones: number;
    tipo: "casa" | "apartamento" | "habitacion";
};

const casasData: Casa[] = [
    { id: 1, titulo: "Apartamento en San Salvador", ubicacion: "San Salvador", precio: 400, habitaciones: 2, tipo: "apartamento" },
    { id: 2, titulo: "Habitación en Santa Tecla", ubicacion: "Santa Tecla", precio: 250, habitaciones: 1, tipo: "habitacion" },
    { id: 3, titulo: "Casa en Antiguo Cuscatlán", ubicacion: "Antiguo Cuscatlán", precio: 700, habitaciones: 3, tipo: "casa" },
];

const FiltroCasas: React.FC = () => {
    const [precioMin, setPrecioMin] = useState<number | "">("");
    const [ubicacion, setUbicacion] = useState("");
    const [habitaciones, setHabitaciones] = useState<number | "">("");
    const [precioMax, setPrecioMax] = useState<number | "">("");
    const [tipo, setTipo] = useState("");
    
    const casasFiltradas = casasData.filter((casa) => {
    if (ubicacion && !casa.ubicacion.toLowerCase().includes(ubicacion.toLowerCase())) return false;
    if (precioMin !== "" && casa.precio < precioMin) return false;
    if (precioMax !== "" && casa.precio > precioMax) return false;
    if (habitaciones !== "" && casa.habitaciones !== habitaciones) return false;
    if (tipo && casa.tipo !== tipo) return false;
    return true;
});

    return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Formulario de búsqueda */}
        <form className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6" onSubmit={(e) => e.preventDefault()}>
        <input
            type="text"
            placeholder="Ubicación"
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
            className="p-2 border rounded-xl"
        />

        <input
            type="number"
            placeholder="Precio mín"
            value={precioMin}
            onChange={(e) => setPrecioMin(e.target.value ? Number(e.target.value) : "")}
            className="p-2 border rounded-xl"
        />

        <input
            type="number"
            placeholder="Precio máx"
            value={precioMax}
            onChange={(e) => setPrecioMax(e.target.value ? Number(e.target.value) : "")}
            className="p-2 border rounded-xl"
        />

        <select
            value={habitaciones}
            onChange={(e) => setHabitaciones(e.target.value ? Number(e.target.value) : "")}
            className="p-2 border rounded-xl"
        >
            <option value="">Habitaciones</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3+</option>
        </select>

        <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="p-2 border rounded-xl"
        >
            <option value="">Tipo</option>
            <option value="casa">Casa</option>
            <option value="apartamento">Apartamento</option>
            <option value="habitacion">Habitación</option>
        </select>
        </form>

      {/* Resultados */}
        <div className="grid gap-4 md:grid-cols-2">
        {casasFiltradas.length > 0 ? (
            casasFiltradas.map((casa) => (
            <div
                key={casa.id}
                className="p-4 border rounded-2xl shadow-md hover:shadow-lg transition"
            >
                <h3 className="text-lg font-bold">{casa.titulo}</h3>
                <p>{casa.ubicacion}</p>
                <p>Precio: ${casa.precio}</p>
                <p>{casa.habitaciones} Habitación(es)</p>
                <p className="capitalize">Tipo: {casa.tipo}</p>
            </div>
        ))
        ) : (
            <p className="col-span-2 text-center text-gray-500">
            No se encontraron resultados
            </p>
        )}
    </div>
    </div>
);
};

export default FiltroCasas;
