import { useState } from "react";
import { FaHome, FaUpload, FaClipboardList, FaPowerOff, FaFileAlt, FaGlobe, FaGraduationCap, FaClock } from "react-icons/fa";
import bg from "../../components/images/landing_bg.png";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [dragActive, setDragActive] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useState(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Handle file drop here
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      console.log("File dropped:", files[0].name);
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-IN', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    }) + ' IST ' + date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/40 via-blue-50/30 to-indigo-100/40 backdrop-blur-sm" />

      <div className="relative z-10 min-h-screen p-8 px-10">
        {/* Main Container - Glassmorphic Card */}
        <div className="max-w-[1400px] mx-auto bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
          
          {/* TOP NAVBAR SECTION */}
          <div className="navbar-section">
            <div className="flex items-center justify-between px-8 py-4 bg-white/40 backdrop-blur-md border-b border-white/30">
              <div className="flex items-center gap-2 text-purple-700 font-semibold text-lg">
                 Admin Dashboard
              </div>
              
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <FaClock className="text-purple-500" />
                {formatTime(currentTime)}
              </div>
              
              <button className="px-6 py-2 rounded-xl bg-white/50 transition-all duration-300 border border-purple-200 text-purple-700 font-medium shadow-md hover:bg-white/90 hover:shadow-xl hover:scale-105 hover:border-purple-400 cursor-pointer">
                Login
              </button>
            </div>
          </div>

          <div className="flex gap-6 p-8">
            {/* SIDEBAR SECTION */}
            <div className="sidebar-section bg-transparent">
              <aside className="w-56 bg-white/20   backdrop-blur-2xl rounded-2xl p-4 shadow-2xl border border-white/40">
                <nav className="space-y-2 text-gray-700">
                  <div 
                    onClick={() => setActiveTab("dashboard")}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all font-medium ${
                      activeTab === "dashboard" 
                        ? "bg-purple-500 text-white shadow-lg" 
                        : "hover:bg-white/60 text-gray-700"
                    }`}
                  >
                    <FaHome className="text-lg" /> Dashboard
                  </div>

                  <div 
                    onClick={() => setActiveTab("upload")}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all font-medium ${
                      activeTab === "upload" 
                        ? "bg-purple-500 text-white shadow-lg" 
                        : "hover:bg-white/60 text-gray-700"
                    }`}
                  >
                    <FaUpload className="text-lg" /> Upload Notice
                  </div>

                  <div 
                    onClick={() => setActiveTab("manage")}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all font-medium ${
                      activeTab === "manage" 
                        ? "bg-purple-500 text-white shadow-lg" 
                        : "hover:bg-white/60 text-gray-700"
                    }`}
                  >
                    <FaClipboardList className="text-lg" /> Manage Notices
                  </div>

                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-400 hover:bg-red-500 text-white cursor-pointer mt-6 transition-all font-medium shadow-lg">
                    <FaPowerOff className="text-lg" /> Logout
                  </div>
                </nav>
              </aside>
            </div>

            {/* MAIN CONTENT SECTION */}
            <div className="main-content-section flex-1 space-y-6">

              {/* STATS SECTION */}
              <div className="stats-section">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: "Total Notices", value: "128", icon: FaFileAlt, gradient: "from-purple-500 to-indigo-600" },
                    { title: "Global Notices", value: "45", icon: FaGlobe, gradient: "from-blue-500 to-purple-600" },
                    { title: "Year Notices", value: "36", icon: FaGraduationCap, gradient: "from-indigo-500 to-blue-600" },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={i}
                        className={`bg-gradient-to-br ${item.gradient} text-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 cursor-pointer`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-sm opacity-90 font-medium">{item.title}</div>
                          <Icon className="text-3xl opacity-80" />
                        </div>
                        <div className="text-4xl font-bold">{item.value}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* MIDDLE CONTENT SECTION */}
              <div className="middle-content-section">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                  {/* UPLOAD SECTION */}
                  <div className="upload-section lg:col-span-2">
                    <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/30">
                      <h2 className="text-xl font-semibold text-gray-800 mb-6">
                        Upload PDF Notice
                      </h2>

                      <div 
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                        className={`border-2 border-dashed rounded-2xl h-64 flex flex-col items-center justify-center transition-all cursor-pointer ${
                          dragActive 
                            ? "border-purple-500 bg-purple-50/50" 
                            : "border-purple-300 hover:border-purple-400 hover:bg-purple-50/30"
                        }`}
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                          <FaUpload className="text-white text-2xl" />
                        </div>
                        <p className="font-semibold text-gray-700 text-lg">Drag & Drop your PDF here</p>
                        <span className="text-sm mt-2 text-gray-500">or Browse Files</span>
                      </div>
                    </div>
                  </div>

                  {/* RECENT NOTICES SECTION */}
                  <div className="recent-notices-section">
                    <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/30">
                      <h2 className="text-xl font-semibold text-gray-800 mb-6">
                        Recent Notices
                      </h2>

                      <ul className="space-y-4 text-sm">
                        {[
                          { text: "Exam Schedule Update", time: "20 mins ago", color: "purple" },
                          { text: "Campus Event Announcement", time: "1 hour ago", color: "blue" },
                          { text: "Holiday Notice", time: "2 hours ago", color: "pink" },
                          { text: "Library Hours Changes", time: "Yesterday", color: "purple" },
                          { text: "New Course Available", time: "2 days ago", color: "orange" },
                        ].map((notice, i) => (
                          <li 
                            key={i} 
                            className="flex items-start gap-3 hover:bg-white/50 p-2 rounded-lg transition-all cursor-pointer group"
                          >
                            <div className={`w-2 h-2 rounded-full bg-${notice.color}-500 mt-1.5 group-hover:scale-125 transition-transform`} />
                            <div className="flex-1">
                              <div className="font-medium text-gray-700 group-hover:text-purple-700 transition-colors">
                                {notice.text}
                              </div>
                              <div className="text-xs text-gray-400 mt-0.5">{notice.time}</div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* FOOTER SECTION */}
              <div className="footer-section">
                <div className="text-center text-sm text-gray-600 pt-6 pb-4">
                  <span className="hover:text-purple-600 cursor-pointer transition-colors">About</span>
                  <span className="mx-2">·</span>
                  <span className="hover:text-purple-600 cursor-pointer transition-colors">Privacy</span>
                  <span className="mx-2">·</span>
                  <span className="hover:text-purple-600 cursor-pointer transition-colors">Terms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
