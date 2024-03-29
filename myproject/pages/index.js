import Head from "next/head";
import Acceuil from "@/components/Acceuil";
import About from "./about";
import Project from "./project";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <>
      <Head>
        <title>My project</title>
      </Head>
      <main className="mt-0 p-5">
        <section id="acceuil" className=" p-10 m-8">
          <Acceuil />
        </section>
        <section id="about" className=" p-10 m-8">
          <About />
        </section>
        <section id="project">
          <Project />
        </section>
      </main>
      <Footer/>
    </>
  );
}
