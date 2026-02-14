// app/fonts.ts
import { Manrope } from "next/font/google";
import localFont from "next/font/local";

export const manrope = Manrope({
  weight: ["300", "700"],
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--font-manrope",
});

export const balkara = localFont({
  src: [
    {
      path: "../public/fonts/BalkaraFreeCondensed.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-balkara",
});
