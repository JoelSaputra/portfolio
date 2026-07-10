import "@/styles/globals.css";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${geistSans.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
