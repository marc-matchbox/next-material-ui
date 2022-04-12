import { useContext } from "react";
import { InternationalizationContext } from "@/context/InternationalizationContext";

export const useLocale = () => useContext(InternationalizationContext);
