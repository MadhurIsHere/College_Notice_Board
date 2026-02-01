import { useNavigate, useParams } from "react-router-dom";
import { FaGraduationCap, FaBell, FaSignOutAlt, FaCalendarAlt } from "react-icons/fa";
import bg from "../../components/images/landing_bg.png";

const StudentDashboard = () => {
  const { year } = useParams();
  const navigate = useNavigate();

  const getYearSuffix = (y) => {
    if (y === "1") return "1st";
    if (y === "2") return "2nd";
    if (y === "3") return "3rd";
    return `${y}th`;
  };

  const notices = [
    { id: 1, title: "Mid-Term Examination Schedule", date: "Oct 24, 2025", type: "Academic" },
    { id: 2, title: "Inter-College Hackathon Registration", date: "Oct 26, 2025", type: "Event" },
    { id: 3, title: `Special Workshop for ${getYearSuffix(year)} Year`, date: "Oct 28, 2025", type: "Workshop" },
  ];

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed relative" style={{ backgroundImage: `url(${bg})` }}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-indigo-900/40 backdrop-blur-md" />
      
      <div className="relative z-10 p-4 md:p-8 max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center bg-white/20 backdrop-blur-xl p-6 rounded-2xl border border-white/30 shadow-2xl mb-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-500 rounded-xl shadow-lg">
              <FaGraduationCap className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="text-white text-xl md:text-2xl font-bold">Student Portal</h1>
              <p className="text-purple-200 text-sm font-medium">{getYearSuffix(year)} Year Engineering</p>
            </div>
          </div>
          <button 
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 bg-red-500/80 hover:bg-red-600 text-white px-5 py-2.5 rounded-xl transition-all shadow-lg active:scale-95"
          >
            <FaSignOutAlt /> <span className="hidden md:inline">Logout</span>
          </button>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Notice Feed */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-white text-xl font-semibold flex items-center gap-2 px-2">
              <FaBell className="text-yellow-400" /> Recent Notices
            </h2>
            {notices.map((notice) => (
              <div key={notice.id} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all cursor-pointer group shadow-xl">
                <div className="flex justify-between items-start mb-2">
                  <span className="px-3 py-1 bg-purple-500/40 text-purple-100 text-xs rounded-full border border-purple-400/30">
                    {notice.type}
                  </span>
                  <span className="text-white/50 text-xs flex items-center gap-1">
                    <FaCalendarAlt /> {notice.date}
                  </span>
                </div>
                <h3 className="text-white text-lg font-medium group-hover:text-purple-300 transition-colors">
                  {notice.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Quick Stats/Sidebar */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-600/40 to-blue-600/40 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-2xl">
              <h2 className="text-white font-bold mb-4">Academic Status</h2>
              <div className="space-y-4">
                <div className="bg-black/20 p-4 rounded-xl">
                  <p className="text-white/60 text-xs uppercase tracking-wider">Attendance</p>
                  <p className="text-white text-2xl font-bold">88%</p>
                </div>
                <div className="bg-black/20 p-4 rounded-xl">
                  <p className="text-white/60 text-xs uppercase tracking-wider">Current SEM</p>
                  <p className="text-white text-2xl font-bold">Sem 0{year * 2 - 1}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;