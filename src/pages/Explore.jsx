import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import PostCard from "../components/PostCard";
import { useState } from "react";

import posts from "../data/posts";

const Explore = () => {
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="py-10">
      {/* Header */}
      <div className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#6D4AFF]">
          Marketplace universitario
        </p>

        <h1 className="mb-4 text-4xl md:text-5xl xl:text-6xl font-bold text-[#2D2D2D]">
          Explorar publicaciones
        </h1>

        <p className="max-w-2xl text-lg text-gray-500">
          Descubre artículos, apuntes, libros y dispositivos compartidos por
          estudiantes.
        </p>
      </div>

      {/* Search */}
      <div className="mb-8">
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      {/* Categories */}
      <div className="mb-10">
        <Categories />
      </div>

      {/* Filters */}
      <div className="mb-12 flex flex-wrap gap-4">
        <button className="rounded-full bg-[#6D4AFF] px-5 py-3 font-medium text-white">
          Recientes
        </button>

        <button className="rounded-full bg-white px-5 py-3 font-medium text-gray-700 shadow-sm transition hover:bg-gray-100">
          Más populares
        </button>

        <button className="rounded-full bg-white px-5 py-3 font-medium text-gray-700 shadow-sm transition hover:bg-gray-100">
          Menor costo
        </button>

        <button className="rounded-full bg-white px-5 py-3 font-medium text-gray-700 shadow-sm transition hover:bg-gray-100">
          Mejor reputación
        </button>
      </div>

      {/* Posts Grid */}
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Explore;
