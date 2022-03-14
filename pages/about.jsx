import Head from "next/head";
import Nav from "../components/NavBar/Nav";
const About = () => {
  return (
    <div>
      <Head>
        <title>MakeWay App Website||About Us</title>
        <meta name="description" content="Developed by JAPECorp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <Nav />
      </section>

      <div className="mt-20">
        <div className="w-full flex items-center">
          <div className="text-black">About us</div>
        </div>
      </div>
    </div>
  );
};

export default About;
