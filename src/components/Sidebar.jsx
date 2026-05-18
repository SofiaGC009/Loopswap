import { Link, useNavigate } from "react-router-dom"

const Sidebar = () => {
  const navigate = useNavigate()
  const handleLogout = () => {

  localStorage.removeItem(
    "loopswap-auth"
  )

  window.location.href = "/login"
}
  return (
    <aside className="hidden w-72 flex-col border-r border-gray-200 bg-white p-6 lg:flex">

      {/* Navigation */}
      <nav className="flex flex-col gap-4">
        <Link
          to="/create"
          className="rounded-2xl bg-[#6D4AFF] px-5 py-4 text-center font-semibold text-white shadow-lg transition hover:scale-[1.02]"
        >
          + Crear publicación
        </Link>

        <Link
          to="/"
          className="rounded-2xl px-5 py-4 font-medium text-gray-700 transition hover:bg-[#F3F0FF] hover:text-[#6D4AFF]"
        >
          Inicio
        </Link>

        <Link
          to="/explore"
          className="rounded-2xl px-5 py-4 font-medium text-gray-700 transition hover:bg-[#F3F0FF] hover:text-[#6D4AFF]"
        >
          Explorar
        </Link>

        <Link
          to="/profile"
          className="rounded-2xl px-5 py-4 font-medium text-gray-700 transition hover:bg-[#F3F0FF] hover:text-[#6D4AFF]"
        >
          Perfil
        </Link>

        <Link
          to="/chat"
          className="rounded-2xl px-5 py-4 font-medium text-gray-700 transition hover:bg-[#F3F0FF] hover:text-[#6D4AFF]"
        >
          Chats
        </Link>
      </nav>

      <button
  onClick={handleLogout}
  className="mt-10 w-full rounded-2xl border border-red-200 bg-red-50 px-5 py-4 font-semibold text-red-500 transition hover:bg-red-100"
>
  Cerrar sesión
</button>

      {/* Bottom Card */}
      <div className="mt-auto rounded-3xl bg-gradient-to-br from-[#6D4AFF] to-[#8E72FF] p-6 text-white shadow-xl">
        <p className="mb-2 text-sm opacity-80">Tus loops</p>

        <h2 className="mb-4 text-4xl font-bold">120 L</h2>

        <button className="w-full rounded-2xl bg-white py-3 font-semibold text-[#6D4AFF] transition hover:scale-[1.02]">
          Obtener más
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
