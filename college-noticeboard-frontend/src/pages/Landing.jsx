import { useNavigate } from "react-router-dom";
import bg from "../components/images/landing_bg.png"; // 👈 your full background image

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0b0e2b] flex items-center justify-center p-6">

      {/* MAIN CARD */}
      <div
        className="w-full max-w-7xl rounded-2xl overflow-hidden shadow-2xl relative"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* DARK OVERLAY (optional – improves text visibility) */}
        <div className="absolute inset-0 bg-black/20" />

        {/* CONTENT */}
        <div className="relative z-10">

          {/* NAVBAR */}
          <div className="flex items-center justify-between px-10 py-6 border-b border-white/10">
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

          {/* HERO */}
          <div className="px-12 py-24 max-w-xl">

            <h1 className="text-white text-5xl font-bold leading-tight mb-6">
              College Notice Board System
            </h1>

            <p className="text-white/80 text-lg mb-8">
              Official notices for students, faculty, and clubs.
            </p>

            <button
              onClick={() => navigate("/login")}
              className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-lg font-medium text-white shadow-lg"
            >
              Login to Portal
            </button>

            <p className="mt-6 text-sm text-white/60">
              View academic & campus notices in one place.
            </p>

          </div>

          {/* FOOTER */}
          <div className="flex justify-center gap-6 py-5 text-sm text-white/60 border-t border-white/10">
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
