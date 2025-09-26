import { createContext, useState, useContext } from "react";
import { IoMoon } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

// Context create
export const ThemeContext = createContext();

// Provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleButton = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleButton }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Toggle Button Component
export const ThemeToggle = () => {
  const { theme, handleButton } = useContext(ThemeContext);

  return (
    <button
      onClick={handleButton}
      className="fixed right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full shadow-lg"
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
      }}
    >
      {theme === "dark" ? (
        <IoMoon className="text-2xl text-white" />
      ) : (
        <MdOutlineWbSunny className="text-2xl text-yellow-500" />
      )}
    </button>
  );
};
