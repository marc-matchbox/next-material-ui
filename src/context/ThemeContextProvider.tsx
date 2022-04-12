import { createCustomTheme } from "@/styles/theme";
import { THEMES } from "@/styles/themes";
import { createContext, ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

type ThemeContextProps = {
  theme: string;
  setTheme: (value: string) => void;
  direction: string;
  setDirection: (value: "rtl" | "ltr") => void;
};

export const ThemeContext = createContext({} as ThemeContextProps);

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState(THEMES.LIGHT);
  const [direction, setDirection] = useState<"rtl" | "ltr">("ltr");

  const defaultTheme = createCustomTheme({
    direction,
    responsiveFontSizes: true,
    roundedCorners: true,
    theme,
  });

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        direction,
        setDirection,
      }}
    >
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
