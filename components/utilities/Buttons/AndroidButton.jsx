import { motion } from "framer-motion";
import Link from "next/link";

function AndroidButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="flex mt-2 w-1/2 md:w-1/3 h-14 bg-blue-600 text-white rounded-md items-center justify-center"
    >
      <div className="mr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27.8"
          height="29.859"
          viewBox="0 0 27.8 29.859"
        >
          <path
            id="logo"
            d="M1.316,29.859h0A2.252,2.252,0,0,1,0,27.817V2.046A2.255,2.255,0,0,1,1.322,0L16.743,14.927,1.316,29.859Zm3.463-.777h0L18.073,16.213l3.563,3.449L4.78,29.082ZM23.321,18.721h0L19.4,14.927l3.917-3.791,3.558,1.989a2.23,2.23,0,0,1,.026,3.594l-3.581,2Zm-5.249-5.08h0L4.784.778l16.85,9.416-3.56,3.446Z"
            fill="#fff"
          />
        </svg>
      </div>
      <Link
        href={"https://play.google.com/store/apps/details?id=com.jebo.makeway"}
        passHref
      >
        <div>
          <div className="text-xs text-left font-normal">Get it on</div>
          <div className="text-xl font-medium">PlayStore</div>
        </div>
      </Link>
    </motion.button>
  );
}

export default AndroidButton;
