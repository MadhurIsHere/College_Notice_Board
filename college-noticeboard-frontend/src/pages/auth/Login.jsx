import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    // later: call login() from AuthContext
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE – LOGIN FORM */}
      <div className="w-1/2 bg-[#0f0f14] flex items-center justify-center">
        <div className="w-95">
          <h2 className="text-white text-3xl font-semibold mb-2">
            Login
          </h2>
          <p className="text-gray-400 mb-8">
            Enter your account details
          </p>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-6">
              <label className="text-gray-400 text-sm block mb-2">
                Username
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-gray-600 text-white py-2 focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Password */}
            <div className="mb-10">
              <label className="text-gray-400 text-sm block mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-gray-600 text-white py-2 focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 transition text-white py-3 rounded-lg font-medium"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE – WELCOME PANEL */}
      <div className="w-1/2 bg-purple-500 flex items-center justify-center relative">
        <div className="bg-purple-400/60 rounded-3xl p-12 w-[80%] h-[80%] flex flex-col justify-center">
          <h1 className="text-white text-4xl font-bold mb-4">
            Welcome to
            <br />
            student portal
          </h1>
          <p className="text-purple-100">
            Login to access your account
          </p>

          {/* Illustration placeholder */}
          <div className="mt-10 flex justify-center">
            <div className="w-64 h-64 bg-purple-300/40 rounded-xl flex items-center justify-center text-white/70">
              Illustration
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
