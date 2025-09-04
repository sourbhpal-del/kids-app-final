import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
