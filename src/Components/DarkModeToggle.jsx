import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const html = document.documentElement;

    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="md:w-16 md:h-8 w-10 h-5 rounded-full bg-gray-200 dark:bg-gray-700 relative transition"
    >
      <span
        className={`absolute top-1 left-1 md:h-6 md:w-6 h-3 w-3 rounded-full transition-transform duration-500 ${
          theme === "dark"
            ? "md:translate-x-8 translate-x-4 bg-rab-light"
            : "translate-x-0 bg-rab-navy"
        }`}
      ></span>
    </button>
  );
}
