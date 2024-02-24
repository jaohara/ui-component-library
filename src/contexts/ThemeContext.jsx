import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

const ThemeContext = createContext(undefined);

const ThemeContextProvider = ({ children }) => {
  const [ hasHero, setHasHero ] = useState(false);
  // TODO: How do I want to implement this?
  const [ primaryColor, setPrimaryColor ] = useState();
  const [ theme, setTheme ] = useState('light');
  const [ navBarIsFixed, setNavBarIsFixed ] = useState(false);

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
        hasHero,
        navBarIsFixed,
        setHasHero,
        setNavBarIsFixed,
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
const ThemeWrapper = ({ children }) => {
  const [ useFixedNavClass, setUseFixedNavClass ] = useState(false);

  const {
    hasHero,
    navBarIsFixed, 
    theme,
  } = useContext(ThemeContext);

  useEffect(() => {
    setUseFixedNavClass(navBarIsFixed && !hasHero);
  }, [hasHero, navBarIsFixed])

  // const useFixedNavClass = navBarIsFixed && !hasHero;

  const themeWrapperClassNames = `
    ${theme}
    ${useFixedNavClass ? "fixed-nav" : ""}
  `;

  return (
    <div className={themeWrapperClassNames}>
      {children}
    </div>
  )
};

export { 
  ThemeWrapper,
  ThemeContext, 
  ThemeContextProvider,
};