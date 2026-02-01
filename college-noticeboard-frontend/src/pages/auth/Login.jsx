import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaUser, FaLock, FaChevronDown } from "react-icons/fa";
import bg from "../../components/images/landing_bg.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("STUDENT");
  const [adminType, setAdminType] = useState("Admin");
  const [showAdminTypes, setShowAdminTypes] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      alert("Credentials required");
      return;
    }

    if (role === "STUDENT") {
      // Prompting for year to determine the dynamic route
      const studentYear = prompt("Enter your year (1, 2, 3, or 4):", "1");
      if (["1", "2", "3", "4"].includes(studentYear)) {
        navigate(`/dashboard/student/${studentYear}`);
      } else {
        alert("Invalid year selected");
      }
    } else {
      console.log(`Logging in as ${adminType}`);
      navigate("/dashboard/admin");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center p-6 relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/40 via-blue-50/30 to-indigo-100/40 backdrop-blur-sm" />

      <div className="relative z-10 w-full max-w-md bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-10">
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500 rounded-2xl shadow-lg mb-4 text-white text-2xl">
            🔔
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-600 mt-2">Access the Campus Portal</p>
        </div>

        <div className="flex p-1 bg-white/40 backdrop-blur-md rounded-xl border border-white/30 mb-6">
          <button
            onClick={() => { setRole("STUDENT"); setShowAdminTypes(false); }}
            className={`flex-1 py-2 rounded-lg font-medium transition-all ${
              role === "STUDENT" ? "bg-purple-500 text-white shadow-md" : "text-gray-600 hover:bg-white/40"
            }`}
          >
            Student
          </button>
          <button
            onClick={() => setRole("ADMIN")}
            className={`flex-1 py-2 rounded-lg font-medium transition-all ${
              role === "ADMIN" ? "bg-purple-500 text-white shadow-md" : "text-gray-600 hover:bg-white/40"
            }`}
          >
            Admin
          </button>
        </div>

        {role === "ADMIN" && (
          <div className="relative mb-6 animate-in fade-in slide-in-from-top-2 duration-300">
            <button
              type="button"
              onClick={() => setShowAdminTypes(!showAdminTypes)}
              className="w-full px-4 py-3 bg-white/50 border border-purple-200 rounded-xl text-purple-700 font-medium flex items-center justify-between hover:bg-white/80 transition-all"
            >
              <span>Logging in as: <span className="font-bold">{adminType}</span></span>
              <FaChevronDown className={`transition-transform ${showAdminTypes ? 'rotate-180' : ''}`} />
            </button>
            
            {showAdminTypes && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl border border-purple-100 rounded-xl shadow-xl z-50 overflow-hidden">
                {["Admin", "Faculty", "Club"].map((type) => (
                  <button
                    key={type}
                    onClick={() => { setAdminType(type); setShowAdminTypes(false); }}
                    className="w-full px-4 py-3 text-left hover:bg-purple-50 text-gray-700 hover:text-purple-700 transition-colors border-b last:border-0 border-purple-50"
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <FaUser className="absolute left-4 top-4 text-purple-400" />
            <input
              type="email"
              placeholder="Username / Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/50 border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/80 transition-all placeholder:text-gray-400 text-gray-700"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-purple-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/50 border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/80 transition-all placeholder:text-gray-400 text-gray-700"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-purple-200 hover:scale-[1.02] transition-all"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-8">
          Need help? <span className="text-purple-600 font-medium cursor-pointer hover:underline" onClick={() => navigate("/")}>Go back to Home</span>
        </p>
      </div>
    </div>
  );
};

export default Login;