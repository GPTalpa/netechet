export const dynamic = "force-static";
import { balkara, manrope } from "./fonts";
import Providers from "./provider";
import YandexMetrika from "@/components/YandexMetrika/YandexMetrika";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${balkara.variable} ${manrope.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="preload"
          href="/fonts/BalkaraFreeCondensed.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Manrope-Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Manrope-Light.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
        <YandexMetrika />
      </body>
    </html>
  );
}
