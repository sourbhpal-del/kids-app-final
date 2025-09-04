// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* PWA support */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />

        {/* iOS support */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/icon-512.png" />

        {/* SEO basics */}
        <meta name="description" content="Kids Learning App - Fun, Interactive & Educational" />
        <meta property="og:title" content="Kids Learning App" />
        <meta property="og:description" content="Fun and interactive app to learn lessons, play quizzes, and track progress." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kids-app-final.vercel.app/" />
        <meta property="og:image" content="/icon-512.png" />
      </Head>
      <body className="bg-gray-50 text-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

