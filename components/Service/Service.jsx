import React from "react";
import { Fade } from "react-awesome-reveal";
import ServiceCard from "../utilities/Cards/ServiceCard";

function Service() {
  const upperArray = [
    {
      title: "Speed",
      content: "Ping, Notify and move in a short period.",
      imgSrc: "/Rocket.svg",
      id: 1,
    },
    {
      title: "Ease Of Use",
      content: "Simple and Effective Registration for all cars.",
      imgSrc: "/promotion.svg",
      id: 2,
    },
    {
      title: "Accessibility",
      content: "Access any registered car no matter where you are.",
      imgSrc: "/technical-support.svg",
      id: 3,
    },
  ];

  return (
    <Fade cascade>
      <div className="md:mt-10">
        <h2 className="text-black text-center">
          Lets Help Reduce Traffic In Our Community
        </h2>

        <div className="flex flex-col gap-10 mt-32 items-center lg:flex-row lg:items-end">
          {upperArray.map((item) => (
            <ServiceCard
              title={item.title}
              content={item.content}
              src={item.imgSrc}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </Fade>
  );
}
export default Service;
