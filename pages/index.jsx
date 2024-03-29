import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Nav from "../components/NavBar/Nav";
import Service from "../components/Service/Service";
import How from "../components/HowItWorks/How";
import SideBar from "../components/NavBar/sidebar";
import { useState } from "react";
import Cta from "../components/Cta/Cta";
import Faqs from "../components/Faq's/faq";
import Guide from "../components/Guide/Guide";
import Meta from "../components/utilities/meta/meta";


export default function Home() {
  const [sideBar, setSideBar] = useState(false);

  return (
    <>
      <div>
        <Meta title="MakeWay App Website | Home" />
        <Head>
          <meta name="description" content="Developed by JAPECorp" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className="h-96">
          <Nav sideBar={sideBar} setSideBar={setSideBar} />
          <Hero />
        </section>
        <section className="mt-96 bg-makeway-light-blue px-6 pt-10 lg:px-36 pb-32">
          <Service />
        </section>
        <section className="px-8 lg:px-80 pb-2">
          <How />
        </section>
        <section className="bg-makeway-light-blue px-6 pt-10 lg:px-36 pb-32 mt-10">
          <Guide />
        </section>
        <Cta />
        <Faqs />
      </div>
      <SideBar sideBar={sideBar} />
    </>
  );
}
