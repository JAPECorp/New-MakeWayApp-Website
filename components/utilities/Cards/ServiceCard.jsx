import Image from "next/image";
import React from "react";

function ServiceCard(props) {
  return (
    <>
      <div className="lg:w-1/3 flex flex-col items-center text-center">
        <div className="h-20 w-20 relative">
          <Image
            layout="fill"
            objectFit="contain"
            priority
            src={props.src}
            alt="mini-icons"
          />
        </div>
        <h4 className="my-4 font-bold">{props.title}</h4>
        <p className="px-20 text-xl">{props.content}</p>
      </div>
    </>
  );
}

export default ServiceCard;
