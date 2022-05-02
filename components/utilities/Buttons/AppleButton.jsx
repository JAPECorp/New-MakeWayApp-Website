import { motion } from "framer-motion";
import Link from "next/link";

function AppleButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="flex mt-2 w-1/2 md:w-1/3 h-14 bg-blue-600 text-white rounded-md items-center justify-center"
    >
      <div className="mr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30.8"
          height="30.8"
          viewBox="0 0 25 30"
        >
          <g id="Icon" transform="translate(-0.997 -0.271)">
            <path
              id="Shape"
              d="M20.881,8.547a6.67,6.67,0,0,1,3.326-5.608A7.264,7.264,0,0,0,18.574.024C16.2-.214,13.907,1.381,12.7,1.381,11.469,1.381,9.611.047,7.608.087A7.549,7.549,0,0,0,1.3,3.771C-1.433,8.295.6,14.941,3.217,18.6c1.308,1.791,2.837,3.79,4.837,3.719,1.957-.077,2.688-1.194,5.05-1.194,2.34,0,3.027,1.194,5.067,1.15,2.1-.032,3.423-1.8,4.685-3.605A14.516,14.516,0,0,0,25,14.489a6.511,6.511,0,0,1-4.119-5.942Z"
              transform="translate(0.997 7.952)"
              fill="#fff"
            />
            <path
              id="Shape-2"
              data-name="Shape"
              d="M4.812,5.1A7.081,7.081,0,0,0,6.457,0,7.341,7.341,0,0,0,1.725,2.427,6.741,6.741,0,0,0,.037,7.342,6.066,6.066,0,0,0,4.812,5.1Z"
              transform="translate(13.234 0.271)"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
      <a
        target={"_blank"}
        href="https://apps.apple.com/app/makeway-app/id1592269187"
        rel="noreferrer"
      >
        <div>
          <div className="text-xs text-left font-normal">Download on</div>
          <div className="text-xl font-medium">AppStore</div>
        </div>
      </a>
    </motion.button>
  );
}

export default AppleButton;
