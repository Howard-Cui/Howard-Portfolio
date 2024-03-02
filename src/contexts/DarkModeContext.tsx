import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext<any>(undefined);
DarkModeContext.displayName = "DarkModeContext"

const DarkThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [ darkMode, setDarkMode ] = useState(true); 
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  );
}

const useDarkTheme = () => {
  return useContext(DarkModeContext);
}

export {
  DarkThemeProvider,
  useDarkTheme
}

