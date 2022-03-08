import Image from "next/image";

function How() {
  const howArray = [
    {
      subTitle: "Solution",
      title: "MakeWay for People",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat",
      imgSrc: "/Image.png",
      id: 1,
    },
    {
      subTitle: "Solution",
      title: "MakeWay for People",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat",
      imgSrc: "/Image.png",
      id: 2,
      lgFlexDirection: "g:flex-row-reverse",
    },
  ];

  return (
    <div className="mt-20">
      <h2 className="text-black text-center">How It Works</h2>

      <div className="w-1/2 flex items-center">
        <div className="mt-20">
          <h4 className="text-blue-500">Solutions</h4>
          <h3 className="text-black">MakeWay for People</h3>
          <p className="mt-2 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim
            ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor
            inreprehenderit in voluptate velit esse cillum dolore eu fugiat
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="h-full w-full relative hidden lg:block">ghsdsdjh</div>
      </div>
    </div>
  );
}
export default How;
