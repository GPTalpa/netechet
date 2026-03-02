import localFont from "next/font/local";

export const manrope = localFont({
  src: [
    {
      path: "../public/fonts/Manrope-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Manrope-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
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
