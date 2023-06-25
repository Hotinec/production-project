import { useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext } from "./ThemeContext";

type Props = {
  children?: React.ReactNode
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || THEME.LIGHT;

  const [theme, setTheme] = useState<THEME>(defaultTheme as THEME);

  const defaultProps = useMemo(() => ({
    theme: theme,
    setTheme: setTheme,
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}
