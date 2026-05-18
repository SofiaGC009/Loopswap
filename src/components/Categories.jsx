import categories from "../data/categories";

const Categories = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {categories.map((category) => (
        <button
          key={category}
          className="rounded-full bg-white px-6 py-3 font-medium text-gray-700 shadow-sm transition hover:scale-105 hover:bg-[#6D4AFF] hover:text-white"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
