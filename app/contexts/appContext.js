import { createContext, useEffect, useState } from "react";

export const appContext = createContext({});

export function AppContextProvider({ children }) {
  const [theme, setTheme] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let selectedTheme = localStorage.getItem("theme");
    if (!selectedTheme) {
      selectedTheme = "dark";
    }
    document.body.classList.add(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
    setTheme(selectedTheme);
  }, []);

  return (
    <appContext.Provider value={{ isLoading, setIsLoading, theme, setTheme }}>
      {children}
    </appContext.Provider>
  );
}
