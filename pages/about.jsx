import Head from "next/head";
import Nav from "../components/NavBar/Nav";
import SideBar from "../components/NavBar/sidebar";
import { useState } from "react";
import AboutSection from "../components/About Section/About";
import Content from "../components/About Section/content";
import AboutImage from "../components/About Section/Image";
import Meta from "../components/utilities/meta/meta";


const About = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <div>
      <Meta title="MakeWay App Website| About Us" />
      <Head>
        <meta name="description" content="Developed by JAPECorp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <Nav sideBar={sideBar} setSideBar={setSideBar} />
      </section>

      <section className="px-5 md:px-20 lg:px-72 pb-10">
        <AboutSection />
      </section>
      <AboutImage />
      <section
        className="md:p-6 px-5 md:px-20 lg:px-72 pb-20 "
        style={{ paddingBottom: 30 }}
      >
        <Content />
      </section>

      <SideBar sideBar={sideBar} />
    </div>
  );
};

export default About;
