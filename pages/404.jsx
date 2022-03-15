import Link from "next/link";

const NotFound = () => {
  return (
    <>
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
