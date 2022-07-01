import Head from "next/head";
import Nav from "../components/NavBar/Nav";
import SideBar from "../components/NavBar/sidebar";
import { useState } from "react";
import SupportSection from "../components/Support/Support";
import SupportContent from "../components/Support/content";
import SupportImage from "../components/Support/Image";
import Meta from "../components/utilities/meta/meta";

const Support = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <div>
      <Meta title="MakeWay App Website| Support" />
      <Head>
        <meta name="description" content="Developed by JAPECorp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <Nav sideBar={sideBar} setSideBar={setSideBar} />
      </section>
      <section className="px-5 md:px-20 lg:px-72 pb-10">
        <SupportSection />
      </section>
      <SupportImage />
      <section
        className="md:p-6 px-5 md:px-20 lg:px-72 pb-20 "
        style={{ paddingBottom: 30 }}
      >
        <SupportContent />
      </section>

      <SideBar sideBar={sideBar} />
    </div>
  );
};

export default Support;
