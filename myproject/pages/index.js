import Head from "next/head";
import Header from "@/components/Header";
import Acceuil from "@/components/Acceuil";

export default function Index() {
  return (
    <>
      <Head>
        <title>My project</title>
      </Head>
      <Header />
      <Acceuil />
    </>
  );
}
