const StatsCard = ({ title, value, description }) => {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#6D4AFF]">
        {title}
      </p>

      <h2 className="mb-2 text-5xl font-bold text-[#2D2D2D]">{value}</h2>

      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default StatsCard;
