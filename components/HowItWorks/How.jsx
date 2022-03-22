import { Fade } from "react-awesome-reveal";
import HowComponent from "../utilities/Cards/HowComponenets";

function How(props) {
  return (
    <Fade cascade>
      <div id="#how-it-works" className="mt-20">
        <h2 className="text-black text-center">How It Works</h2>
        <HowComponent src={"/work-img.webp"} />
      </div>
    </Fade>
  );
}
export default How;
