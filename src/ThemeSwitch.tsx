import "./styles.css";
import { useState } from "react";
import SunIcon from "./assets/sun.svg";
import MoonIcon from "./assets/moon.svg";

export default function ThemeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? "dark" : "light"}`}>
      <div className="container">
        <div className="toggle-container">
          <label className="switch">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleTheme}
            />
            <span className="slider">
              <span className="icon-container sun">
                <img src={SunIcon} alt="Light mode" className="icon" />
              </span>
              <span className="icon-container moon">
                <img src={MoonIcon} alt="Dark mode" className="icon" />
              </span>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
