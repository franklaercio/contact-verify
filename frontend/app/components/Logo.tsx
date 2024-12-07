import React, { useEffect, useState } from "react";

const Logo: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(darkMode);
    document.documentElement.classList.toggle("dark", darkMode);

    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
      document.documentElement.classList.toggle("dark", e.matches);
    };
    matchMedia.addEventListener("change", handleChange);

    return () => matchMedia.removeEventListener("change", handleChange);
  }, []);

  return (
    <a href="#">
      {isDarkMode ? (
        <img src="/logo-dark.svg" alt="Logo" className="h-12 w-auto" />
      ) : (
        <img src="/logo-light.svg" alt="Logo" className="h-12 w-auto" />
      )}
    </a>
  );
};

export default Logo;
