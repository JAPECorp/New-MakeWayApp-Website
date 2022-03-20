import Head from "next/head";
import Nav from "../components/NavBar/Nav";
import SideBar from "../components/NavBar/sidebar";
import { useState } from "react";

const PrivacyPolicy = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <div>
      <Head>
        <title>MakeWay App Website| PrivacyPolicy Us</title>
        <meta name="description" content="Developed by JAPECorp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <Nav sideBar={sideBar} setSideBar={setSideBar} />
      </section>

      <SideBar sideBar={sideBar} />
    </div>
  );
};

export default PrivacyPolicy;
