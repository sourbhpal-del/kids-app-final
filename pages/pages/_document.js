// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="h-full">
      <Head>
        {/* PWA manifest & icons */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon-192.png" sizes="192x192" />
        <link rel="icon" href="/icon-512.png" sizes="512x512" />
        <meta name="theme-color" content="#2563eb" />

        {/* iOS PWA support */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/icon-192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/icon-512.png" sizes="512x512" />

        {/* Progressive enhancement / perf helpers (safe to keep) */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        {/* Example font – remove if you’re not using it */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" /> */}

        {/* Basic meta */}
        <meta name="application-name" content="Kids Learning App" />
        <meta name="description" content="Fun, mobile-first learning app for kids with quizzes, badges, and progress tracking." />
      </Head>
      <body className="h-full bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
