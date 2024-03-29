import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function FaqComponenet(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="flex flex-col p-8 border-b text-black cursor-pointer"
    >
      <div className="flex flex-row items-center">
        <p
          className={`flex-auto hover:text-blue-500 font-medium md:hover:text-blue-500 ${
            expanded ? "text-gray-dark font-black" : "font-normal"
          }`}
        >
          {props.title}
        </p>
        <IoIosArrowDown size={25} />
      </div>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          expanded ? "max-h-40" : "max-h-0"
        }`}
      >
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default FaqComponenet;
