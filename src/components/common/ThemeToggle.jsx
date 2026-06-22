import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full flex items-center justify-center
      bg-white/10 backdrop-blur-md border border-white/20
      hover:scale-110 transition-all duration-300"
    >
      {theme === "dark" ? (
        <FaSun size={16} />
      ) : (
        <FaMoon size={16} />
      )}
    </button>
  );
}

export default ThemeToggle;