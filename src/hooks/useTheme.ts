import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContextProvider";

export const useTheme = () => useContext(ThemeContext);
