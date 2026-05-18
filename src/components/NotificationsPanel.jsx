const notifications = [
  {
    id: 1,
    title: "Nuevo mensaje",
    text: "Ana García respondió tu chat.",
  },

  {
    id: 2,
    title: "Intercambio completado",
    text: "Ganaste +15 loops.",
  },

  {
    id: 3,
    title: "Nueva reputación",
    text: "Luis te dejó una valoración 5★",
  },

  {
    id: 4,
    title: "Publicación guardada",
    text: "Alguien guardó tu publicación.",
  },
];

const NotificationsPanel = () => {
  return (
    <div className="absolute right-0 top-20 z-50 w-[420px] rounded-[2rem] bg-white p-6 shadow-2xl">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#6D4AFF]">
            Actividad
          </p>

          <h2 className="text-3xl font-bold text-[#2D2D2D]">Notificaciones</h2>
        </div>

        <button className="rounded-2xl bg-[#F3F0FF] px-4 py-2 font-medium text-[#6D4AFF]">
          Ver todo
        </button>
      </div>

      {/* Notifications */}
      <div className="space-y-4">
        {notifications.map((notification) => (
          <button
            key={notification.id}
            className="w-full rounded-2xl bg-[#F7F7FB] p-5 text-left transition hover:scale-[1.01]"
          >
            <h3 className="mb-1 text-lg font-bold text-[#2D2D2D]">
              {notification.title}
            </h3>

            <p className="text-gray-500">{notification.text}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPanel;
