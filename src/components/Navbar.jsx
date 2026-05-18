import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-bold text-[#6D4AFF]">LoopSwap</h1>
        </Link>

        {/* Navigation */}
        <div className="hidden gap-8 md:flex">
          <Link
            to="/"
            className="font-medium text-gray-700 transition hover:text-[#6D4AFF]"
          >
            Inicio
          </Link>

          <Link
            to="/explore"
            className="font-medium text-gray-700 transition hover:text-[#6D4AFF]"
          >
            Explorar
          </Link>

          <Link
            to="/login"
            className="font-medium text-gray-700 transition hover:text-[#6D4AFF]"
          >
            Login
          </Link>

          <Link
            to="/profile"
            className="font-medium text-gray-700 transition hover:text-[#6D4AFF]"
          >
            Perfil
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Loops */}
          <div className="rounded-2xl bg-[#6D4AFF] px-4 py-2 text-white shadow-md">
            <p className="text-xs opacity-80">Loops</p>

            <p className="font-bold">120 L</p>
          </div>

          {/* Avatar */}
          <Link to="/profile">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-200 font-bold text-gray-700 transition hover:scale-105">
              S
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
