"use client";

interface PreviewCardProps {
  formData: any;
}

export default function PreviewCard({ formData }: PreviewCardProps) {
  return (
    <div className="border rounded-lg p-4 w-80 bg-white shadow-md space-y-2">
      {/* Título y Tipo */}
      <h2 className="font-bold text-lg">{formData?.title || "Property Title"}</h2>
      <p className="text-sm text-gray-600">{formData?.property_type || "Property Type"}</p>

      {/* Precio y ubicación */}
      <p className="text-sm"><span className="font-semibold">Price:</span> {formData?.price || "-"}</p>
      <p className="text-sm"><span className="font-semibold">Location:</span> {formData?.location || "-"}</p>

      {/* Habitaciones y baños */}
      <p className="text-sm">
        <span className="font-semibold">Rooms:</span> {formData?.habitaciones || 0} | 
        <span className="font-semibold"> Bathrooms:</span> {formData?.banos || 0}
      </p>

      {/* Fotos */}
      {formData?.fotos?.length > 0 && (
        <div className="flex space-x-2 overflow-x-auto">
          {formData.fotos.map((file: File | string, idx: number) => {
            const url = typeof file === "string" ? file : URL.createObjectURL(file);
            return <img key={idx} src={url} alt={`foto-${idx}`} className="w-20 h-20 object-cover rounded" />;
          })}
        </div>
      )}
    </div>
  );
}
