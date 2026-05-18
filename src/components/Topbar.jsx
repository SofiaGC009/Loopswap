import { useState } from "react";
import NotificationsPanel from "./NotificationsPanel";
import MobileSidebar from "./MobileSidebar";

const Topbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <MobileSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <header className="mb-10 flex flex-col gap-6 rounded-3xl bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F3F0FF] text-3xl lg:hidden"
          >
            ☰
          </button>

          {/* Text */}
          <div>
            <div className="mb-3 flex items-center gap-3">
              <img
                src="/logo.png"
                alt="LoopSwap"
                className="h-20 w-20 object-contain"
              />

              <h1 className="text-4xl font-bold text-[#6D4AFF]">LoopSwap</h1>
            </div>

            <h1 className="text-4xl font-bold text-[#2D2D2D]">
              Bienvenid@ de vuelta 👋
            </h1>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <input
            type="text"
            placeholder="Buscar..."
            className="rounded-2xl border border-gray-200 bg-[#F7F7FB] px-5 py-3 outline-none transition focus:border-[#6D4AFF]"
          />

          {/* Notification */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F3F0FF] text-2xl transition hover:scale-105"
            >
              🔔
            </button>

            {showNotifications && <NotificationsPanel />}
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3 rounded-2xl bg-[#F7F7FB] px-4 py-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6D4AFF] font-bold text-white">
              S
            </div>

            <div>
              <p className="font-semibold text-[#2D2D2D]">Sofia</p>

              <p className="text-sm text-gray-500">Online</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Topbar;
