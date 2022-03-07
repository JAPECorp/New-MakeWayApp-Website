import HowComponent from "./HowComponent";

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
    <div className="md:mt-20">
      <h2 className="text-black text-center">How It Works</h2>

      <div className="text-black">GJHSGKDH</div>
      <div className="mt-32"></div>
    </div>
  );
}
export default How;
