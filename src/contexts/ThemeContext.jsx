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

  const saveThemeInLocalStorage = (newTheme) => localStorage.setItem('theme', newTheme);

  // set theme to saved value or system preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // this will make light/dark follow system changes
    const updateThemeFromSystem = (e) => {
      const newSystemTheme = e.matches ? 'dark' : 'light';
      // this behavior overrides the saved user preference, but will allow manual changes back
      //  to persist, as it is also saved in "toggleTheme".
      saveThemeInLocalStorage(newSystemTheme);
      setTheme(newSystemTheme);
    }

    mediaQuery.addEventListener('change', updateThemeFromSystem);
    const savedTheme = localStorage.getItem('theme');
    const systemPreference = mediaQuery.matches ? 'dark' : 'light';

    setTheme(savedTheme || systemPreference);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    saveThemeInLocalStorage(newTheme);
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

// TODO: This might be useless; you could just apply `theme` as a className to your 
//  root DOM node in `App.jsx`.
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