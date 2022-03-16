import Head from "next/head";
import Nav from "../components/NavBar/Nav";
import SideBar from "../components/NavBar/sidebar";
import { useState } from "react";
import AboutSection from "../components/About Section/About";

const About = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <div>
      <Head>
        <title>MakeWay App Website| About Us</title>
        <meta name="description" content="Developed by JAPECorp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <Nav sideBar={sideBar} setSideBar={setSideBar} />
      </section>
      <AboutSection />
      <SideBar sideBar={sideBar} />
    </div>
  );
};

export default About;
