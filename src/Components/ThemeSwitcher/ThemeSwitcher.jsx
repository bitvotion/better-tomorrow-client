import React, { useState, useEffect } from 'react';


const lightTheme = "bt-light";
const darkTheme = "bt-dark";

const ThemeSwitcher = () => {

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : lightTheme;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((prevTheme) => 
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    // DaisyUI's "swap" component is a styled checkbox, perfect for this.
    // It handles the sun/moon icon switching CSS for us.
    <label className="swap swap-rotate btn btn-ghost btn-circle">
      
      {/* This hidden checkbox's "checked" state is tied to our React state */}
      <input 
        type="checkbox" 
        onChange={handleThemeToggle}
        checked={theme === darkTheme} 
      />
      
      {/* Sun icon (when "checked" is false) */}
      <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M5.64,17l-1.41-1.41L6.36,13.46l1.41,1.41L5.64,17ZM12,2A1,1,0,0,0,11,3V6a1,1,0,0,0,2,0V3A1,1,0,0,0,12,2ZM18.36,13.46l1.41,1.41L17,17l-1.41-1.41L18.36,13.46ZM21,11H18a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2ZM11,18v3a1,1,0,0,0,2,0V18a1,1,0,0,0-2,0ZM4.22,6.36l-1.41-1.41L1,6.36,2.41,7.78l1.41-1.41L4.22,6.36ZM7.78,2.41,6.36,1,5.64,2.41l1.41,1.41L7.78,2.41ZM3,11H6a1,1,0,0,0,0,2H3a1,1,0,0,0,0-2ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Z"/>
      </svg>
      
      {/* Moon icon (when "checked" is true) */}
      <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M21.64,13.14A1,1,0,0,0,21.05,12.56c-.71-.21-1.43-.33-2.16-.33A7,7,0,0,0,12,18.94a6.94,6.94,0,0,0,.34,2.16c.14.71.39,1.43.71,2.16A1,1,0,0,0,14.05,24a1,1,0,0,0,1-1.73c-.09-.15-.18-.3-.27-.45A4.89,4.89,0,0,1,13.1,20.42a5,5,0,0,1,3.29-3.29c.15-.08.3-.17.45-.27A1,1,0,0,0,17.44,16.2a1,1,0,0,0,1.73-1c.21-.71.33-1.43.33-2.16A6.9,6.9,0,0,0,21.64,13.14Z"/>
      </svg>
    </label>
  );
};

export default ThemeSwitcher;