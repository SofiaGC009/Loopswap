import { useState } from "react";
import ExchangeModal from "../components/ExchangeModal";
import { useParams } from "react-router-dom"
import posts from "../data/posts"

const PostDetail = () => {
  const { id } = useParams()
  const post = posts.find(
  (p) => p.id === Number(id)
)
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ExchangeModal isOpen={showModal} setIsOpen={setShowModal} />

      <section className="grid gap-10 xl:grid-cols-2">
        {/* LEFT */}
        <div>
          {/* Main Image */}
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
            <img
              src={post.image}
              alt="product"
              className="h-[500px] w-full object-cover"
            />
          </div>

          {/* Gallery */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            <img
              src={post.image}
              className="h-32 w-full rounded-2xl object-cover shadow-md"
            />

            <img
              src={post.image}
              className="h-32 w-full rounded-2xl object-cover shadow-md"
            />

            <img
              src={post.image}
              className="h-32 w-full rounded-2xl object-cover shadow-md"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div>
          {/* Category */}
          <div className="mb-5 flex items-center gap-4">
            <span className="rounded-full bg-[#F3F0FF] px-5 py-3 text-sm font-semibold text-[#6D4AFF]">
              {post.category}
            </span>

            <span className="rounded-full bg-[#E9F8EC] px-5 py-3 text-sm font-bold text-[#37A84B]">
              Disponible
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-6 text-6xl font-bold leading-tight text-[#2D2D2D]">
            {post.title}
          </h1>

          {/* Loops */}
          <div className="mb-8 rounded-[2rem] bg-gradient-to-r from-[#6D4AFF] to-[#8E72FF] p-8 text-white shadow-xl">
            <p className="mb-2 text-sm uppercase tracking-widest text-white/70">
              Valor de intercambio
            </p>

            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold">
              {post.loops} Loops
            </h2>
          </div>

          {/* Description */}
          <div className="mb-10 rounded-[2rem] bg-white p-8 shadow-sm">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#6D4AFF]">
              Descripción
            </p>

            <p className="text-lg leading-relaxed text-gray-500">
              Calculadora en excelente estado ideal para materias de ingeniería,
              cálculo y física. Incluye tapa protectora y baterías nuevas.
            </p>
          </div>

          {/* User */}
          <div className="mb-10 flex items-center justify-between rounded-[2rem] bg-white p-6 shadow-sm">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#6D4AFF] text-3xl font-bold text-white">
                A
              </div>

              <div>
                <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-[#6D4AFF]">
                  Publicado por
                </p>

                <h2 className="text-3xl font-bold text-[#2D2D2D]">
                  {post.user}
                </h2>

                <p className="text-gray-500">Reputación 4.9★</p>
              </div>
            </div>

            <button className="rounded-2xl border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100">
              Ver perfil
            </button>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setShowModal(true)}
              className="flex-1 rounded-2xl bg-[#6D4AFF] px-6 py-4 md:px-8 md:py-5 text-base md:text-lg font-semibold text-white shadow-lg transition hover:scale-[1.02]"
            >
              Solicitar intercambio
            </button>

            <button className="rounded-2xl border border-gray-300 bg-white px-6 py-4 md:px-8 md:py-5 text-base md:text-lg font-semibold text-gray-700 transition hover:bg-gray-100">
              Enviar mensaje
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostDetail;
