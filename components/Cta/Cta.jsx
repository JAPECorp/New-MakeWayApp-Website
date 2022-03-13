import { Fade } from "react-awesome-reveal";
import CtaCard from "../utilities/Cards/CtaCard";

function Cta() {
  return (
    <Fade cascade>
      <div className="mt-32">
        <h2 className="text-black text-center">
          Lets Help Reduce Traffic In Our Community
        </h2>
        <div>
          <CtaCard />
        </div>
      </div>
    </Fade>
  );
}

export default Cta;
