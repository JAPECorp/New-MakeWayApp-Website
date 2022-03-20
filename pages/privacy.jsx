import Head from "next/head";
import Nav from "../components/NavBar/Nav";
import SideBar from "../components/NavBar/sidebar";
import { useState } from "react";
import Privacy from "../components/Privacy Policy/Privacy";

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
      <section className="px-5 md:px-20 lg:px-72 pb-10">
        <Privacy />
      </section>

      <SideBar sideBar={sideBar} />
    </div>
  );
};

export default PrivacyPolicy;
