import { DarkThemeProvider } from "@/contexts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DropDownNavProvider } from "@/contexts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DropDownNavProvider>
      <DarkThemeProvider>
        <Component {...pageProps} />
      </DarkThemeProvider>  
    </DropDownNavProvider>
  );
}
