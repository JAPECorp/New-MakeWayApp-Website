import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Nav from "../components/NavBar/Nav";
import Service from "../components/Service /Service";
import How from "../components/HowItWorks/How";

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
      <section className="px-6 lg:px-36 pb-32">
        <Service />
      </section>
      <section>
        <How />
      </section>
    </div>
  );
}
