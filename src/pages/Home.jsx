import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import PostCard from "../components/PostCard";
import DashboardStats from "../components/DashboardStats";
import { motion } from "framer-motion";
import { useState } from "react";

import posts from "../data/posts";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <DashboardStats />

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="grid items-center gap-12 py-16 lg:grid-cols-2"
      >
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#6D4AFF]">
            Comunidad universitaria
          </p>

          <h1 className="mb-6 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-[#2D2D2D]">
            Intercambia objetos con estudiantes de tu universidad
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600">
            Libros, apuntes, calculadoras y mucho más mediante Loops.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-2xl bg-[#6D4AFF] px-7 py-4 font-semibold text-white shadow-lg">
              Explorar publicaciones
            </button>

            <button className="rounded-2xl border border-gray-300 bg-white px-7 py-4 font-semibold text-gray-700">
              Cómo funciona
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
            alt="students"
            className="h-[300px] md:h-[400px] xl:h-[500px] w-full object-cover"
          />
        </div>
      </motion.section>

      {/* Trending */}
      <section className="mb-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#6D4AFF]">
              Trending
            </p>

            <h2 className="text-4xl font-bold text-[#2D2D2D]">
              Más populares esta semana
            </h2>
          </div>

          <button className="rounded-2xl border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100">
            Ver todo
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
            <img
              src="/calculadora.jpg"
              alt=""
              className="h-48 md:h-56 w-full object-cover"
            />

            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-[#F3F0FF] px-4 py-2 text-sm font-medium text-[#6D4AFF]">
                  Ingeniería
                </span>

                <span className="font-bold text-[#37A84B]">25 Loops</span>
              </div>

              <h3 className="mb-3 text-2xl font-bold text-[#2D2D2D]">
                Calculadora TI-84 Plus
              </h3>

              <p className="text-gray-500">
                Tendencia entre estudiantes de ingeniería.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
            <img
              src="/nicu.jpg"
              alt=""
              className="h-48 md:h-56 w-full object-cover"
            />

            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-[#FFF4E5] px-4 py-2 text-sm font-medium text-[#FF9F43]">
                  Libros
                </span>

                <span className="font-bold text-[#37A84B]">12 Loops</span>
              </div>

              <h3 className="mb-3 text-2xl font-bold text-[#2D2D2D]">
                Cuidados Neonatales 
              </h3>

              <p className="text-gray-500">
                El mejor libro para estudiantes de enfermería.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
            <img
              src="/macbook.jpeg"
              alt=""
              className="h-48 md:h-56 w-full object-cover"
            />

            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-[#E9F8EC] px-4 py-2 text-sm font-medium text-[#37A84B]">
                  Tecnología
                </span>

                <span className="font-bold text-[#37A84B]">40 Loops</span>
              </div>

              <h3 className="mb-3 text-2xl font-bold text-[#2D2D2D]">
                Macbook Air M1
              </h3>

              <p className="text-gray-500">
                Publicación destacada de esta semana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search + Categories */}
      <section className="mt-16">
        <div className="mb-8">
          <SearchBar search={search} setSearch={setSearch} />
        </div>

        <Categories />
      </section>

      {/* Feed */}
      <section className="mt-24">
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#6D4AFF]">
            Comunidad
          </p>

          <h2 className="text-4xl font-bold text-[#2D2D2D]">
            Publicaciones recientes
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
