import Image from "next/image";
import React from "react";

function HowComponent(props) {
  return (
    <div className="mt-32">
      <div
        className={`flex ${
          props.flexDirection ?? "flex-col"
        } w-full bg-slate-40 justify-center gap-10
      lg:gap-28 
      lg:h-makeway-px-450
      ${props.lgFlexDirection ?? "lg:flex-row"}
      
      `}
      >
        <div className="w-full flex items-center">
          <div>
            <h4 className="text-black">{props.subTitle}</h4>
            <h3 className="text-blue-500">{props.title}</h3>
            <p className="text-makeway-gray mt-5">{props.description}</p>
          </div>
        </div>

        <div className="w-full">
          <div className="h-full w-full relative hidden lg:block">
            <Image
              layout="fill"
              objectFit="contain"
              priority
              src={props.src}
              alt="image-makeway"
            />
          </div>
          <div className="h-makeway-px-450 w-full relative lg:hidden">
            <Image
              layout="fill"
              objectFit="contain"
              priority
              src={props.src}
              alt="image-makeway"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowComponent;
