import { createContext, ReactNode, useMemo, useState } from "react";
import { IntlProvider } from "react-intl";

// Languages JSON
import portuguese from "@/config/locale/pt-BR.json";
import english from "@/config/locale/en-US.json";
import spanish from "@/config/locale/es-ES.json";

type InternationalizationContextProps = {
  locale: string;
  setLocale: (value: string) => void;
};

export const InternationalizationContext = createContext(
  {} as InternationalizationContextProps
);

type InternationalizationContextProviderProps = {
  children: ReactNode;
};

export const InternationalizationContextProvider = ({
  children,
}: InternationalizationContextProviderProps) => {
  const [locale, setLocale] = useState("pt-BR");

  const messages = useMemo(() => {
    switch (locale) {
      case "en-US":
        return english;
      case "es-ES":
        return spanish;
      default:
        return portuguese;
    }
  }, [locale]);

  return (
    <InternationalizationContext.Provider
      value={{
        locale,
        setLocale,
      }}
    >
      <IntlProvider locale={locale} messages={messages} onError={() => null}>
        {children}
      </IntlProvider>
    </InternationalizationContext.Provider>
  );
};
