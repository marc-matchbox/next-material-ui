import type { AppProps } from "next/app";
import { GlobalStyle } from "@/styles/globals";
import { ThemeContextProvider } from "@/context/ThemeContextProvider";
import { InternationalizationContextProvider } from "@/context/InternationalizationContext";
import { LayoutContextProvider } from "@/context/LayoutContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <InternationalizationContextProvider>
        <ThemeContextProvider>
          <LayoutContextProvider>
            <GlobalStyle />
            <Component {...pageProps} />
          </LayoutContextProvider>
        </ThemeContextProvider>
      </InternationalizationContextProvider>
    </>
  );
}

export default MyApp;
