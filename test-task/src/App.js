import { createContext, useEffect, useState } from "react";
import "./App.css";
import MainContent from "./components/MainContent";
import { Context } from './contexts/context';


function App() {

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const value = theme;

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
      <button className={`toggle-button-${theme}`} onClick={toggleTheme}>Toggle Theme</button>
      <Context.Provider value={value}>
        <MainContent/>
      </Context.Provider>
    </div>
  );
}

export default App;
