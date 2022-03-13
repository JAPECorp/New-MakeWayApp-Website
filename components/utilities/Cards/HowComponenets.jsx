import Image from "next/image";
import React from "react";

function HowComponent(props) {
  return (
    <div className="mt-20">
      <div
        className={`flex ${
          props.flexDirection ?? "flex-col"
        } w-full bg-slate-40 justify-center gap-10
      lg:gap-28 
      lg:h-ijikod-px-450 lg:flex-row
      
      `}
      >
        <div className="w-full flex items-center">
          <div>
            <h4 className="text-blue-500">{props.subtitle}</h4>
            <h3 className="text-black">{props.title}</h3>
            <h5 className="text-ijikod-gray mt-5">{props.description}</h5>
            <h5 className="text-ijikod-gray mt-5">{props.description}</h5>
            <h5 className="text-ijikod-gray mt-5">{props.description}</h5>
          </div>
        </div>

        <div className="w-full ">
          <div className="h-full w-full relative hidden lg:block">
            <Image
              objectFit="cover"
              src={props.src}
              alt="how-Image"
              // width="750px"
              // height="900px"
              layout="fill" // layout="fill", layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowComponent;
