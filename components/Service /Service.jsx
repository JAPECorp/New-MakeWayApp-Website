import React from "react";
import ServiceCard from "../utilities/Cards/ServiceCard";

function Service() {
  const upperArray = [
    {
      title: "Consulting",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imgSrc: "/operator.svg",
      id: 1,
    },
    {
      title: "Marketing",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imgSrc: "/promotion.svg",
      id: 2,
    },
    {
      title: "Management",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imgSrc: "/technical-support.svg",
      id: 3,
    },
  ];

  return (
    <div className="md:mt-20">
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
  );
}
export default Service;
