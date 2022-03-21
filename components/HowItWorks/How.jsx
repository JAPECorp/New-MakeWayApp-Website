import { Fade } from "react-awesome-reveal";
import HowComponent from "../utilities/Cards/HowComponenets";

function How(props) {
  return (
    <Fade cascade>
      <div id="#how-it-works" className="mt-20">
        <h2 className="text-black text-center">How It Works</h2>
        <HowComponent
          subtitle={"Solutions"}
          title={"MakeWay for People"}
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat"
          src={"/work-img.webp"}
        />
      </div>
    </Fade>
  );
}
export default How;
