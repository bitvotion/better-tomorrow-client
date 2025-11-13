import React, { useEffect, useState } from 'react';

const ThemeSelector = () => {
  const themes = [
    { label: "Light Mode", value: "bt-light" },
    { label: "Dark Mode", value: "bt-dark" }
  ];

  // Get theme from localStorage or default to light
  const getInitialTheme = () => localStorage.getItem("theme") || "bt-light";
  const [theme, setTheme] = useState(getInitialTheme);

  // Update theme when changed
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="form-control w-full max-w-xs flex justify-between items-center">
      <label className="label">
        <span className="label-text font-medium text-base-content">Theme</span>
      </label>
      <select
        className="select select-ghost select-sm w-1/2 "
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        {themes.map((t) => (
          <option key={t.value} value={t.value}>
            {t.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeSelector;
