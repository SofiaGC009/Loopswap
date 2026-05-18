import StatsCard from "./StatsCard";

const DashboardStats = () => {
  return (
    <section className="mb-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatsCard title="Loops" value="120" description="Créditos disponibles" />

      <StatsCard
        title="Intercambios"
        value="28"
        description="Completados exitosamente"
      />

      <StatsCard
        title="Reputación"
        value="4.9★"
        description="Nivel de confianza"
      />

      <StatsCard
        title="Publicaciones"
        value="14"
        description="Activas actualmente"
      />
    </section>
  );
};

export default DashboardStats;
