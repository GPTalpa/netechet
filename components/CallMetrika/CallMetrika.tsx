"use client";

import Script from "next/script";
export default function CallMetrika() {
  return (
    <>
      <Script
        id="call-metrika"
        async
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
           (function ct_load_script() {
            var ct = document.createElement('script'); ct.type = 'text/javascript'; ct.async=true; ct.rel="preload";
            ct.src = document.location.protocol+'//cc.calltracking.ru/phone.11457.16239.async.js?nc='+Math.floor(new Date().getTime()/300000);
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ct, s);
            })();
          `,
        }}
      />
    </>
  );
}
