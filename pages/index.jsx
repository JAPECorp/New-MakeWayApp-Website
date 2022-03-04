import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Nav from "../components/NavBar/Nav";
import Service from "../components/Service /Service";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MakeWay App Website</title>
        <meta name="description" content="Developed by JAPECorp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="h-screen">
        <Nav />
        <Hero />
      </section>
      <section className="main">
        <Service />
      </section>
    </div>
  );
}
