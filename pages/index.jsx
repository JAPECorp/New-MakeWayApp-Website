import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Nav from "../components/NavBar/Nav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MakeWay App Website</title>
        <meta name="description" content="Developed by JAPECorp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="h-screen bg-ijikod-wine">
        <Nav />
        <Hero />
      </section>
    </div>
  );
}
