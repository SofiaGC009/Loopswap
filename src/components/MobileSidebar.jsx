import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MobileSidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{
          x: isOpen ? 0 : -300,
        }}
        transition={{
          duration: 0.3,
        }}
        className="fixed left-0 top-0 z-50 flex h-screen w-72 flex-col bg-white p-6 shadow-2xl"
      >
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <h1 className="text-4xl font-bold text-[#6D4AFF]">LoopSwap</h1>

          <button onClick={() => setIsOpen(false)} className="text-3xl">
            ✕
          </button>
        </div>

        {/* Create */}
        <Link
          to="/create"
          className="mb-6 rounded-2xl bg-[#6D4AFF] px-5 py-4 text-center font-semibold text-white"
        >
          + Crear publicación
        </Link>

        {/* Navigation */}
        <nav className="flex flex-col gap-3">
          <Link
            to="/"
            className="rounded-2xl px-5 py-4 font-medium text-gray-700 transition hover:bg-[#F3F0FF]"
          >
            Inicio
          </Link>

          <Link
            to="/explore"
            className="rounded-2xl px-5 py-4 font-medium text-gray-700 transition hover:bg-[#F3F0FF]"
          >
            Explorar
          </Link>

          <Link
            to="/chat"
            className="rounded-2xl px-5 py-4 font-medium text-gray-700 transition hover:bg-[#F3F0FF]"
          >
            Chats
          </Link>

          <Link
            to="/profile"
            className="rounded-2xl px-5 py-4 font-medium text-gray-700 transition hover:bg-[#F3F0FF]"
          >
            Perfil
          </Link>
        </nav>
      </motion.aside>
    </>
  );
};

export default MobileSidebar;
