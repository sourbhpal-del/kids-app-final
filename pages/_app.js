// pages/_app.js
import "@/styles/globals.css"; // Global styles (Tailwind + custom)
import Navbar from "@/components/Navbar"; // Navigation bar

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Navbar always on top */}
      <Navbar />

      {/* Page content */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
