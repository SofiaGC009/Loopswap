import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F7F7FB]">
      <Topbar />

      {/* Mobile Navbar */}
      <div className="lg:hidden">
        <Navbar />
      </div>

      <div className="flex">
        {/* Sidebar Desktop */}
        <Sidebar />

        {/* Main Content */}
        <main className="min-h-screen flex-1 px-6 py-8">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
