import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    localStorage.setItem("loopswap-auth", "true");

    window.location.href = "/";
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#F7F7FB] p-6">
      <div className="w-full max-w-xl rounded-[2rem] bg-white p-6 md:p-10 shadow-2xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <img
            src="/logo.png"
            alt="LoopSwap"
            className="mb-6 h-24 w-24 object-contain mx-auto"
          />

          <h1 className="mb-4 bg-gradient-to-r from-[#6D4AFF] to-[#8E72FF] bg-clip-text text-4xl md:text-5xl xl:text-6xl font-black text-transparent">
            LoopSwap
          </h1>

          <p className="text-lg text-gray-500">
            Inicia sesión con tu cuenta universitaria
          </p>
        </div>

        {/* Inputs */}
        <div className="space-y-6">
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

        {/* Button */}
        <button
          onClick={handleLogin}
          className="mt-8 w-full rounded-2xl bg-[#6D4AFF] px-6 py-4 md:px-8 md:py-5 text-base md:text-lg font-semibold text-white shadow-lg transition hover:scale-[1.02]"
        >
          Entrar
        </button>

        {/* Footer */}
        <p className="mt-8 text-center text-gray-500">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="font-semibold text-[#6D4AFF]">
            Crear cuenta
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
