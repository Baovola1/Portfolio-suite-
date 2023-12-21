import Head from "next/head";
import Header from "@/components/Header";
import Acceuil from "@/components/Acceuil";
import About from "./about";
import Project from "./project";

export default function Index() {
  return (
    <>
      <Head>
        <title>My project</title>
      </Head>
      <main className="mt-0">
        <Header/>
        <section id="index">
          <Acceuil />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="project">
          <Project />
        </section>
      </main>
    </>
  );
}
