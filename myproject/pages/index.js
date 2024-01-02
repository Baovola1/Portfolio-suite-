import Head from "next/head";
import Header from "@/components/Header";
import Acceuil from "@/components/Acceuil";
import About from "./about";
import Project from "./project";
import Layout from "@/components/Layout";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>My project</title>
      </Head>
      
      <main className="mt-0 p-5">
        <section id="index" className=" p-10 m-8">
          <Acceuil />
        </section>
        <section id="about" className=" p-10 m-8">
          <About />
        </section>
        <section id="project" className="bg-gray-100 p-8 m-8">
          <Project />
        </section>
      </main>
    </Layout>
  );
}
