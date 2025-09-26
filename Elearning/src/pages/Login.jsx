

const Login = () => {
  return (
    <div className="min-h-screen bg-[#FFEDE1] flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-[#1B5241] mb-6 text-center">
          Sign in
        </h1>

        {/* Form */}
        <form className="flex flex-col gap-4">
          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="rubiridz@gmail.com"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1B5241]"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••••••••••••"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1B5241]"
              required
            />
          </div>


          {/* Sign in button */}
          <button
            type="submit"
            className="bg-[#1B5241] text-white py-2 rounded-md hover:bg-[#A05425] transition-colors"
          >
            Sign in
          </button>
        </form>

        {/* Footer text */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-[#1B5241] font-medium hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
