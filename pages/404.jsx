import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Meta from "../components/utilities/meta/meta";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.push("/");
    }, 4000);
  }, []);

  return (
    <>
      <Meta title='404 - Page not found' />
      <Head>
        <meta name="description" content="Developed by JAPECorp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="px-4 lg:py-12">
          <div className="lg:gap-4 lg:flex">
            <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
              <h1 className="font-bold text-blue-600 text-9xl">404</h1>
              <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                <span className="text-red-400">Ooops!</span> Page not found
              </p>
              <p className="mb-8 text-center text-gray-500 md:text-2xl">
                The page you’re looking for doesn’t exist.
              </p>
              <Link href="/" passHref>
                <button className="flex w-48 h-14 bg-blue-600 text-white rounded-md items-center justify-center">
                  Go To Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
