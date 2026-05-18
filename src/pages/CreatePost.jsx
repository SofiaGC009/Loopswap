import { useState } from "react";

const CreatePost = () => {
  const [preview, setPreview] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  return (
    <section className="mx-auto max-w-4xl">
      {/* Header */}
      <div className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#6D4AFF]">
          Marketplace
        </p>

        <h1 className="mb-4 text-4xl md:text-3xl md:text-4xl xl:text-5xl xl:text-6xl font-bold text-[#2D2D2D]">
          Crear publicación
        </h1>

        <p className="text-lg text-gray-500">
          Comparte artículos, apuntes o dispositivos con otros estudiantes.
        </p>
      </div>

      {/* Form */}
      <div className="rounded-[2rem] bg-white p-6 md:p-10 shadow-xl">
        {/* Upload */}
        <div className="mb-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#6D4AFF]">
            Imagen
          </p>

          <label className="flex h-72 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[2rem] border-2 border-dashed border-[#D6CCFF] bg-[#F8F5FF] transition hover:border-[#6D4AFF]">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />

            {preview ? (
              <img
                src={preview}
                alt="preview"
                className="h-full w-full object-cover"
              />
            ) : (
              <>
                <div className="mb-4 text-4xl md:text-5xl xl:text-6xl">📸</div>

                <h2 className="mb-2 text-2xl font-bold text-[#2D2D2D]">
                  Subir imagen
                </h2>

                <p className="text-gray-500">
                  Arrastra archivos o haz click aquí
                </p>
              </>
            )}
          </label>
        </div>
        {/* Inputs */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Title */}
          <div>
            <label className="mb-3 block text-sm font-semibold uppercase tracking-widest text-[#6D4AFF]">
              Título
            </label>

            <input
              type="text"
              placeholder="Ej. Calculadora TI-84"
              className="w-full rounded-2xl border border-gray-200 bg-[#F7F7FB] px-5 py-4 text-lg outline-none transition focus:border-[#6D4AFF]"
            />
          </div>

          {/* Category */}
          <div>
            <label className="mb-3 block text-sm font-semibold uppercase tracking-widest text-[#6D4AFF]">
              Categoría
            </label>

            <select className="w-full rounded-2xl border border-gray-200 bg-[#F7F7FB] px-5 py-4 text-lg outline-none transition focus:border-[#6D4AFF]">
              <option>Ingeniería</option>
              <option>Tecnología</option>
              <option>Psicología</option>
              <option>Diseño</option>
            </select>
          </div>

          {/* Loops */}
          <div>
            <label className="mb-3 block text-sm font-semibold uppercase tracking-widest text-[#6D4AFF]">
              Loops
            </label>

            <input
              type="number"
              placeholder="25"
              className="w-full rounded-2xl border border-gray-200 bg-[#F7F7FB] px-5 py-4 text-lg outline-none transition focus:border-[#6D4AFF]"
            />
          </div>

          {/* Status */}
          <div>
            <label className="mb-3 block text-sm font-semibold uppercase tracking-widest text-[#6D4AFF]">
              Estado
            </label>

            <select className="w-full rounded-2xl border border-gray-200 bg-[#F7F7FB] px-5 py-4 text-lg outline-none transition focus:border-[#6D4AFF]">
              <option>Disponible</option>
              <option>Reservado</option>
              <option>Intercambiado</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div className="mt-8">
          <label className="mb-3 block text-sm font-semibold uppercase tracking-widest text-[#6D4AFF]">
            Descripción
          </label>

          <textarea
            rows="6"
            placeholder="Describe tu publicación..."
            className="w-full resize-none rounded-[2rem] border border-gray-200 bg-[#F7F7FB] px-6 py-5 text-lg outline-none transition focus:border-[#6D4AFF]"
          />
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <button className="flex-1 rounded-2xl bg-[#6D4AFF] px-6 py-4 md:px-8 md:py-5 text-base md:text-lg font-semibold text-white shadow-lg transition hover:scale-[1.02]">
            Publicar ahora
          </button>

          <button className="rounded-2xl border border-gray-300 bg-white px-6 py-4 md:px-8 md:py-5 text-base md:text-lg font-semibold text-gray-700 transition hover:bg-gray-100">
            Guardar borrador
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreatePost;
