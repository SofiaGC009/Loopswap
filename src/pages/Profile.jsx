import PostCard from "../components/PostCard";
import posts from "../data/posts";
import { useState } from "react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const userPosts = posts.filter(
  (post) => post.user === "Valeria Salazar"
)

const savedPosts = posts.filter(
  (post) =>
    post.id === 2 ||
    post.id === 4 ||
    post.id === 7
)

  return (
    <section>
      {/* Banner */}
      <div className="relative mb-24 h-[420px] md:h-72 overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#6D4AFF] to-[#8E72FF] shadow-2xl">
        {/* Decorative Blur */}
        <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 flex w-full flex-col gap-6 p-6 md:p-10 lg:flex-row lg:items-end lg:justify-between">
          {/* Left */}
          <div className="flex items-center gap-6">
            {/* Avatar */}
            <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-white bg-white text-5xl font-bold text-[#6D4AFF] shadow-xl">
              S
            </div>

            {/* Info */}
            <div className="text-white">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/70">
                Perfil universitario
              </p>

              <h1 className="mb-2 text-5xl font-bold">Valeria Salazar</h1>

              <p className="text-lg text-white/80">
                Enfermeria
              </p>
            </div>
          </div>

          {/* Right */}
          <button className="rounded-2xl bg-white px-7 py-4 font-semibold text-[#6D4AFF] transition hover:scale-105">
            Editar perfil
          </button>
        </div>
      </div>

      {/* Stats */}
      <section className="mb-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#6D4AFF]">
            Loops
          </p>

          <h2 className="text-5xl font-bold text-[#2D2D2D]">120</h2>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#6BCB77]">
            Reputación
          </p>

          <h2 className="text-5xl font-bold text-[#2D2D2D]">4.9★</h2>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#FF9F43]">
            Intercambios
          </p>

          <h2 className="text-5xl font-bold text-[#2D2D2D]">28</h2>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#FF5A5A]">
            Publicaciones
          </p>

          <h2 className="text-5xl font-bold text-[#2D2D2D]">14</h2>
        </div>
      </section>

      {/* About */}
      <section className="mb-20 rounded-[2rem] bg-white p-6 md:p-10 shadow-sm">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#6D4AFF]">
          Sobre mí
        </p>

        <h2 className="mb-5 text-4xl font-bold text-[#2D2D2D]">
          Estudiante de Enfermeria
        </h2>

        <p className="max-w-3xl text-lg leading-relaxed text-gray-500">
          Me gustaría intercambiar libros de enfermería, especialmente aquellos relacionados con cuidados neonatales. 
          También estoy interesada en artículos de tecnología como laptops o tablets. 
          Soy una persona responsable y siempre busco hacer intercambios justos y satisfactorios para ambas partes.
        </p>
      </section>

      {/* Tabs */}
      <div className="mb-10 flex flex-wrap gap-4">
        <button
          onClick={() => setActiveTab("posts")}
          className={`rounded-full px-6 py-3 font-medium transition ${
            activeTab === "posts"
              ? "bg-[#6D4AFF] text-white"
              : "bg-white text-gray-700"
          }`}
        >
          Publicaciones
        </button>

        <button
          onClick={() => setActiveTab("saved")}
          className={`rounded-full px-6 py-3 font-medium transition ${
            activeTab === "saved"
              ? "bg-[#6D4AFF] text-white"
              : "bg-white text-gray-700"
          }`}
        >
          Guardados
        </button>

        <button
          onClick={() => setActiveTab("reviews")}
          className={`rounded-full px-6 py-3 font-medium transition ${
            activeTab === "reviews"
              ? "bg-[#6D4AFF] text-white"
              : "bg-white text-gray-700"
          }`}
        >
          Reputación
        </button>
      </div>

      {/* POSTS */}
      {activeTab === "posts" && (
        <section>
          <div className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#6D4AFF]">
              Marketplace
            </p>

            <h2 className="text-5xl font-bold text-[#2D2D2D]">
              Publicaciones activas
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {userPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* SAVED */}
      {activeTab === "saved" && (
  <section>

    <div className="mb-10">

      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#6D4AFF]">
        Favoritos
      </p>

      <h2 className="text-5xl font-bold text-[#2D2D2D]">
        Publicaciones guardadas
      </h2>

    </div>

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {savedPosts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}

    </div>

  </section>
)}

      {/* REVIEWS */}
      {activeTab === "reviews" && (
        <div className="rounded-[2rem] bg-white p-6 md:p-10 shadow-sm">
          <h3 className="mb-6 text-4xl font-bold text-[#2D2D2D]">Reputación</h3>

          <div className="space-y-4">
            <div className="rounded-2xl bg-[#F7F7FB] p-5 text-lg">
              ⭐ Excelente intercambio
            </div>

            <div className="rounded-2xl bg-[#F7F7FB] p-5 text-lg">
              ⭐ Usuario confiable
            </div>

            <div className="rounded-2xl bg-[#F7F7FB] p-5 text-lg">
              ⭐ Muy amable y puntual
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Profile;
