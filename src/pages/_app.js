import "@/styles/globals.css";
import "@/components/LiquidEther.css";
import { Manrope } from "next/font/google";
import { MusicProvider } from "@/context/MusicContext";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <MusicProvider>
      <main className={`${manrope.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </MusicProvider>
  );
}
