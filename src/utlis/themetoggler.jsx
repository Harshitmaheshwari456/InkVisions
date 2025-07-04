import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={() => toggleTheme()}
      className="relative w-20 h-8 flex items-center rounded-full bg-yellow-300 dark:bg-blue-800 p-1 transition"
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
          (theme==="dark") ? "translate-x-10" : "translate-x-0"
        }`}
      />
      <span className="absolute left-2 text-xs font-bold text-white">
        {(theme==="dark") ? "🌙" : "☀️"}
      </span>
    </button>
  );
};

export default ThemeToggle;
