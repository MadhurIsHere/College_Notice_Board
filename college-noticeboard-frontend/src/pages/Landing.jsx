import { useNavigate } from "react-router-dom";
import bg from "../components/images/landing_bg.png";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0b0e2b] flex items-center justify-center p-0 md:p-6">
      {/* MAIN CARD - Changed max-width and padding for mobile */}
      <div
        className="w-full md:max-w-7xl md:rounded-2xl min-h-screen md:min-h-0 overflow-hidden shadow-2xl relative z-50"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex flex-col min-h-screen md:min-h-0">
          {/* NAVBAR - Adjusted padding for mobile */}
          <div className="flex items-center justify-between px-6 md:px-10 py-6 border-b border-white/10">
            <div className="text-white font-semibold text-lg flex items-center gap-2">
              🔔 CampusNotice
            </div>
            <button
              onClick={() => navigate("/login")}
              className="px-5 py-2 rounded-lg border border-white/30 text-white hover:bg-white/10 transition"
            >
              Login
            </button>
          </div>

          {/* HERO - Center aligned on mobile, left aligned on desktop */}
          <div className="px-6 md:px-12 py-16 md:py-24 max-w-xl text-center md:text-left flex-grow">
            <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-6">
              College Notice Board System
            </h1>
            <p className="text-white/80 text-base md:text-lg mb-8">
              Official notices for students, faculty, and clubs.
            </p>
            <button
              onClick={() => navigate("/login")}
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-lg font-medium text-white shadow-lg"
            >
              Login to Portal
            </button>
            <p className="mt-6 text-xs md:text-sm text-white/60">
              View academic & campus notices in one place.
            </p>
          </div>

          {/* FOOTER */}
          <div className="flex justify-center gap-6 py-8 md:py-5 text-sm text-white/60 border-t border-white/10 bg-black/10 md:bg-transparent">
            <span className="hover:text-white cursor-pointer">About</span>
            <span className="hover:text-white cursor-pointer">Privacy</span>
            <span className="hover:text-white cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;