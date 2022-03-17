import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.push("/");
    }, 4000);
  }, []);

  return (
    <>
      <Head>
        <title>MakeWay App Website| 404</title>
        <meta name="description" content="Developed by JAPECorp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen">
        <div className="relative top-makeway-hero-offset-t">
          <div className="">
            <h1 className="text-blue-600 text-6xl">Oooops...</h1>
            <h2 className="text-black text-4xl text-center">
              That page cannot be found.
            </h2>
            <p className="text-black text-center">
              Go back to the{" "}
              <Link href="/">
                <a className="text-blue-600">Homepage</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
