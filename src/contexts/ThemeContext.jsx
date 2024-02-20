import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

const ThemeContext = createContext(undefined);

const ThemeContextProvider = ({ children }) => {
  // TODO: How do I want to implement this?
  const [ primaryColor, setPrimaryColor ] = useState();
  const [ theme, setTheme ] = useState('light');

  // set theme to saved value or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)')
      .matches ? 'dark' : 'light';

    setTheme(savedTheme || systemPreference);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
};

const DarkModeWrapper = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      {children}
    </div>
  )
};

export { 
  DarkModeWrapper,
  ThemeContext, 
  ThemeContextProvider,
};