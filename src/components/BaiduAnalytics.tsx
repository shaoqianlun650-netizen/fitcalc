import Script from "next/script";

const BAIDU_HM_ID = "862e941783094ccac29c076f92963c87";

const baiduLoader = [
  "window._hmt=window._hmt||[];",
  "(function(){",
  `var s=document.createElement("script");`,
  `s.src="https://hm.baidu.com/hm.js?${BAIDU_HM_ID}";`,
  "s.async=true;",
  "document.head.appendChild(s);",
  "})();",
].join("");

export default function BaiduAnalytics() {
  return (
    <Script id="baidu-tongji" strategy="afterInteractive">
      {baiduLoader}
    </Script>
  );
}
