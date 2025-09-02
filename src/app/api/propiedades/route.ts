// app/api/propiedades/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const propiedad = await prisma.propiedad.create({
      data: {
        usuario_id: data.usuario_id, 
        title: data.title,
        descripcion: data.descripcion,
        price: data.price,
        direccion: data.direccion,
        location: data.location,
        legal_status: data.legal_status,
        built_area: data.built_area,
        land_area: data.land_area,
        habitaciones: data.habitaciones,
        banos: data.banos,
        property_type: data.property_type,
        fotos: data.fotos,      
        videos: data.videos,    
        document: data.document, 
      },
    });

    return NextResponse.json({ success: true, propiedad });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
