import { createContext, useEffect, useState } from "react";

export const appContext = createContext({});

export function AppContextProvider({ children }) {
  let localTheme = "dark";
  const [theme, setTheme] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localTheme = localStorage.getItem("theme");
    setTheme(localTheme);
  }, []);

  return (
    <appContext.Provider value={{ isLoading, setIsLoading, theme, setTheme }}>
      {children}
    </appContext.Provider>
  );
}
