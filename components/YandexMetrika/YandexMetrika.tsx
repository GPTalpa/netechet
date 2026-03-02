"use client";

import Script from "next/script";
import Image from "next/image";
export default function YandexMetrika() {
  return (
    <>
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),
              a=e.getElementsByTagName(t)[0],
              k.async=1,
              k.src=r,
              a.parentNode.insertBefore(k,a)
            })(window, document,'script',
            'https://mc.yandex.ru/metrika/tag.js?id=106983124',
            'ym');

            ym(106983124, 'init', {
              webvisor:true,
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              ecommerce:"dataLayer"
            });
          `,
        }}
      />

      <noscript>
        <div>
          <Image
            src="https://mc.yandex.ru/watch/106983124"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}
