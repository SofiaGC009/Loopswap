import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem("loopswap-user", JSON.stringify(user));

    navigate("/login");
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#F7F7FB] p-6">
      <div className="w-full max-w-xl rounded-[2rem] bg-white p-6 md:p-10 shadow-2xl">
        <div className="mb-10 text-center">
          <img
            src="/logo.png"
            alt="LoopSwap"
            className="mb-6 h-24 w-24 object-contain mx-auto"
          />

          <h1 className="mb-4 bg-gradient-to-r from-[#6D4AFF] to-[#8E72FF] bg-clip-text text-4xl md:text-5xl xl:text-6xl font-black text-transparent">
            LoopSwap
          </h1>

          <h1 className="mb-4 text-5xl font-bold text-[#2D2D2D]">
            Crear cuenta
          </h1>

          <p className="text-lg text-gray-500">
            Únete a la comunidad universitaria
          </p>
        </div>

        <div className="space-y-6">
          <input
            type="text"
            placeholder="Nombre completo"
            className="w-full rounded-2xl border border-gray-200 bg-[#F7F7FB] px-6 py-5 text-lg outline-none transition focus:border-[#6D4AFF]"
          />

          <input
            type="email"
            placeholder="Correo universitario"
            className="w-full rounded-2xl border border-gray-200 bg-[#F7F7FB] px-6 py-5 text-lg outline-none transition focus:border-[#6D4AFF]"
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="w-full rounded-2xl border border-gray-200 bg-[#F7F7FB] px-6 py-5 text-lg outline-none transition focus:border-[#6D4AFF]"
          />
        </div>

        <button
          onClick={handleRegister}
          className="mt-8 w-full rounded-2xl bg-[#6D4AFF] px-6 py-4 md:px-8 md:py-5 text-base md:text-lg font-semibold text-white shadow-lg transition hover:scale-[1.02]"
        >
          Crear cuenta
        </button>

        <p className="mt-8 text-center text-gray-500">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="font-semibold text-[#6D4AFF]">
            Iniciar sesión
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
