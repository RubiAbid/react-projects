import { Link, useNavigate, NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useAuth } from "../utils/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const { user,logoutUser } = useAuth();
  const linkStyle = "font-bold transition-colors duration-300";

  

  return (
    <div className="w-full bg-[#FFF7F2] h-[80px] flex justify-between px-10 items-center">
      {/* Logo */}
      <img src="logo1.png" alt="logo" className="w-[120px] h-auto" />

      {/* Navigation */}
      <div className="flex gap-10">
        {user ? (
          <>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `${linkStyle} text-[#004F35] mt-2`
                  : `${linkStyle} text-[#A05525] hover:text-[#004F35] mt-2`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive
                  ? `${linkStyle} text-[#004F35] mt-2`
                  : `${linkStyle} text-[#A05525] hover:text-[#004F35] mt-2`
              }
            >
              Courses
            </NavLink>
          </>
        ) : (
          <>

            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? `${linkStyle} text-[#004F35] mt-2`
                  : `${linkStyle} text-[#A05525] hover:text-[#004F35] mt-2`
              }
            >
              Profile
            </NavLink>

            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? `${linkStyle} text-[#004F35] mt-2`
                  : `${linkStyle} text-[#A05525] hover:text-[#004F35] mt-2`
              }
            >
              Register
            </NavLink>
          </>
        )}

        {user ? (
          <div className="border border-[#A05525] rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-[#A05525] hover:text-white transition">
            <button
              onClick={logoutUser}
              className="text-[#A05525] font-semibold hover:text-white flex items-center gap-2"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="border border-[#A05525] rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-[#A05525] hover:text-white transition">
            <NavLink
              to="/login"
              className="text-[#A05525] font-semibold hover:text-white flex items-center gap-2"
            >
              Login <FaArrowRight />
            </NavLink>
          </div>
        )}
      </div>
       <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? `${linkStyle} text-[#004F35] mt-2`
                  : `${linkStyle} text-[#A05525] hover:text-[#004F35] mt-2`
              }
            >
              Contact Us
            </NavLink>
    </div>
  );
};

export default Header;
