import "@/styles/globals.css";
import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <Layout>
  <Component {...pageProps} />
  </Layout>
  );
}
