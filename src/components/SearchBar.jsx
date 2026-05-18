const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex flex-col gap-4 rounded-3xl bg-white p-4 shadow-sm sm:flex-row sm:items-center">
      <input
        type="text"
        placeholder="Buscar publicaciones..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 bg-transparent px-4 py-3 text-base md:text-lg outline-none"
      />

      <button className="w-full rounded-2xl bg-[#6D4AFF] px-6 py-3 font-semibold text-white transition hover:scale-105 sm:w-auto">
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
