import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'theme1' | 'theme2' | 'theme3';

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('theme1');

  useEffect(() => {
    const storedTheme = localStorage.getItem('app-theme') as Theme;
    if (storedTheme) {
      setThemeState(storedTheme);
      document.body.classList.add(storedTheme);
    } else {
      document.body.classList.add('theme1');
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
    setThemeState(newTheme);
    localStorage.setItem('app-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used inside ThemeProvider');
  return context;
};
