import React from 'react';

export function getInitialColorMode() {
  const persistedColorPreference = window.localStorage.getItem('color-mode');
  const hasPersistedPreference = typeof persistedColorPreference === 'string';

  if (hasPersistedPreference) {
    return persistedColorPreference;
  }

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const hasMediaQueryPreference = typeof mql.matches === 'boolean';

  if (hasMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light';
  }

  return 'light';
}

type ColorMode = 'light' | 'dark';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({children}) => {
  const [colorMode, rawSetColorMode] = React.useState(getInitialColorMode());

  const setColorMode = (value: any) => {
    rawSetColorMode(value);

    window.localStorage.setItem('color-mode', value);
  };

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
