import { useState, useRef, useEffect } from "react";
import {
  FaHome,
  FaUpload,
  FaClipboardList,
  FaPowerOff,
  FaFileAlt,
  FaGlobe,
  FaGraduationCap,
  FaClock,
  FaUser,
  FaKey,
  FaChevronDown,
} from "react-icons/fa";
import bg from "../../components/images/landing_bg.png";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [dragActive, setDragActive] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isUploadTypeOpen, setIsUploadTypeOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const profileRef = useRef(null);
  const UploadTypeRef = useRef(null);

  // Mock user data - replace with actual auth context data
  const userEmail = "admin@college.edu";

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        UploadTypeRef.current &&
        !UploadTypeRef.current.contains(event.target)
      ) {
        setIsUploadTypeOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
      const file = files[0];
      if (file.type === "application/pdf") {
        setUploadedFile({
          name: file.name,
          size: (file.size / 1024).toFixed(2) + " KB",
          type: file.type,
        });
      } else {
        alert("Please upload a PDF file only");
      }
    }
  };

  const formatTime = (date) => {
    return (
      date.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }) +
      " IST " +
      date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    );
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
        <div className="max-w-[1400px] mx-auto bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 overflow-visible">
          {/* TOP NAVBAR SECTION */}
          <div className="navbar-section overflow-visible">
            <div className="flex items-center justify-between px-8 py-4 bg-white/40 backdrop-blur-md border-b border-white/30 rounded-t-3xl">
              <div className="flex items-center gap-2 text-purple-700 font-semibold text-lg">
                Admin Dashboard
              </div>

              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <FaClock className="text-purple-500" />
                {formatTime(currentTime)}
              </div>

              {/* Profile Dropdown */}
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="px-6 py-2 rounded-xl bg-white/50 transition-all duration-300 border border-purple-200 text-purple-700 font-medium shadow-md hover:bg-white/90 hover:shadow-xl hover:scale-105 hover:border-purple-400 cursor-pointer flex items-center gap-2"
                >
                  <FaUser className="text-sm" />
                  Profile
                  <FaChevronDown
                    className={`text-xs transition-transform duration-200 ${
                      isProfileOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Dropdown Menu - Positioned outside navbar */}
          {isProfileOpen && (
            <div
              className="fixed w-72 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-purple-200 overflow-hidden z-[9999]"
              style={{
                top: profileRef.current
                  ? `${profileRef.current.getBoundingClientRect().bottom + 8}px`
                  : "0",
                right: "80px",
              }}
            >
              {/* User Email Section */}
              <div className="px-4 py-3 bg-gradient-to-r from-purple-50 to-blue-50 border-b border-purple-100">
                <p className="text-xs text-gray-500 mb-1">Signed in as</p>
                <p className="text-sm font-semibold text-gray-800 truncate">
                  {userEmail}
                </p>
              </div>

              {/* Dropdown Options */}
              <div className="py-2">
                <button
                  onClick={() => {
                    setIsProfileOpen(false);
                    // Add change password logic here
                    console.log("Change password clicked");
                  }}
                  className="w-full px-4 py-3 flex items-center gap-3 hover:bg-purple-50 transition-all duration-200 text-gray-700 hover:text-purple-700"
                >
                  <FaKey className="text-purple-500" />
                  <span className="font-medium">Change Password</span>
                </button>
              </div>
            </div>
          )}

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
              {/* MIDDLE CONTENT SECTION */}
              <div className="middle-content-section">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* UPLOAD SECTION */}
                  <div className="upload-section lg:col-span-2">
                    <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/30">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold text-gray-800">
                          Upload PDF Notice
                        </h2>
                        <div className="relative z-[100]" ref={UploadTypeRef}>
                          <button
                            onClick={() =>
                              setIsUploadTypeOpen(!isUploadTypeOpen)
                            }
                            className="px-6 py-2 rounded-xl bg-white/50 transition-all duration-300 border border-purple-200 text-purple-700 font-medium shadow-md hover:bg-white/90 hover:shadow-xl hover:scale-105 hover:border-purple-400 cursor-pointer flex items-center gap-2"
                          >
                            <FaUser className="text-sm" />
                            Upload Type
                            <FaChevronDown
                              className={`text-xs transition-transform duration-200 ${
                                isUploadTypeOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {/* Upload Type Dropdown Menu */}
                          {isUploadTypeOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-purple-200 overflow-hidden z-[100]">
                              <div className="py-2">
                                {[
                                  "1 Year",
                                  "2 Year",
                                  "3 Year",
                                  "4 Year",
                                  "Global",
                                ].map((option) => (
                                  <button
                                    key={option}
                                    onClick={() => {
                                      setIsUploadTypeOpen(false);
                                      console.log(`Selected: ${option}`);
                                    }}
                                    className="w-full px-4 py-3 flex items-center hover:bg-purple-50 transition-all duration-200 text-gray-700 hover:text-purple-700 font-medium"
                                  >
                                    {option}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <div
                        onDragEnter={uploadedFile ? null : handleDrag}
                        onDragLeave={uploadedFile ? null : handleDrag}
                        onDragOver={uploadedFile ? null : handleDrag}
                        onDrop={uploadedFile ? null : handleDrop}
                        className={`border-2 border-dashed rounded-2xl h-64 flex flex-col items-center justify-center transition-all ${
                          uploadedFile ? "cursor-not-allowed" : "cursor-pointer"
                        } ${
                          dragActive
                            ? "border-purple-500 bg-purple-50/50"
                            : uploadedFile
                            ? "border-green-400 bg-green-50/30"
                            : "border-purple-300 hover:border-purple-400 hover:bg-purple-50/30"
                        }`}
                      >
                        {uploadedFile ? (
                          <>
                            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg animate-bounce">
                              <FaFileAlt className="text-white text-2xl" />
                            </div>
                            <p className="font-semibold text-green-700 text-lg mb-2">
                              ✓ File Uploaded Successfully!
                            </p>
                            <div className="bg-white/80 backdrop-blur-sm rounded-lg px-6 py-3 shadow-md">
                              <p className="font-medium text-gray-800 text-sm truncate max-w-xs">
                                {uploadedFile.name}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                Size: {uploadedFile.size}
                              </p>
                            </div>
                            <p className="mt-4 text-xs text-gray-500 italic">
                              Post this notice to upload another file
                            </p>
                          </>
                        ) : (
                          <>
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                              <FaUpload className="text-white text-2xl" />
                            </div>
                            <p className="font-semibold text-gray-700 text-lg">
                              Drag & Drop your PDF here
                            </p>
                            <span className="text-sm mt-2 text-gray-500">
                              or Browse Files
                            </span>
                          </>
                        )}
                      </div>

                      {/* Post and Delete Buttons */}
                      {uploadedFile && (
                        <div className="flex gap-4 mt-6 justify-center">
                          <button
                            onClick={() => {
                              // Add post notice logic here
                              console.log("Posting notice:", uploadedFile.name);
                              alert("Notice posted successfully!");
                              setUploadedFile(null);
                            }}
                            className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                          >
                            <FaUpload className="text-sm" />
                            Post Notice
                          </button>
                          <button
                            onClick={() => {
                              setUploadedFile(null);
                            }}
                            className="px-8 py-3 rounded-xl bg-white/50 border-2 border-red-300 text-red-600 font-semibold shadow-md hover:bg-red-50 hover:border-red-400 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
                          >
                            <FaPowerOff className="text-sm" />
                            Remove
                          </button>
                        </div>
                      )}
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
                          {
                            text: "Exam Schedule Update",
                            time: "20 mins ago",
                            color: "purple",
                          },
                          {
                            text: "Campus Event Announcement",
                            time: "1 hour ago",
                            color: "blue",
                          },
                          {
                            text: "Holiday Notice",
                            time: "2 hours ago",
                            color: "pink",
                          },
                          {
                            text: "Library Hours Changes",
                            time: "Yesterday",
                            color: "purple",
                          },
                          {
                            text: "New Course Available",
                            time: "2 days ago",
                            color: "orange",
                          },
                        ].map((notice, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 hover:bg-white/50 p-2 rounded-lg transition-all cursor-pointer group"
                          >
                            <div
                              className={`w-2 h-2 rounded-full bg-${notice.color}-500 mt-1.5 group-hover:scale-125 transition-transform`}
                            />
                            <div className="flex-1">
                              <div className="font-medium text-gray-700 group-hover:text-purple-700 transition-colors">
                                {notice.text}
                              </div>
                              <div className="text-xs text-gray-400 mt-0.5">
                                {notice.time}
                              </div>
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
                <div className="text-center text-sm text-gray-600 pt-6 pb-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
