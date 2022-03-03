import ServiceCard from "../utilities/Cards/ServiceCard";

function Service() {
  const cardArray = [
    {
      title: "Consulting",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,illo tempor incididunt ut labore et dolore magna aliqua.",
      imgSrc: "/operator.svg",
      id: 1,
    },
    {
      title: "Marketing",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,illo tempor incididunt ut labore et dolore magna aliqua.",
      imgSrc: "/promotion.svg",
      id: 2,
    },
    {
      title: "Management",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,illo tempor incididunt ut labore et dolore magna aliqua.",
      imgSrc: "/technical-support.svg",
      id: 3,
    },
  ];

  return (
    <div className="md:mt-32">
      <h3 className="text-center text-black">
        Lets Help Reduce Traffic In Our Community
      </h3>
      <div className="flex flex-col lg:flex-row gap-16 mt-16"></div>
      {cardArray.map((item) => (
        <ServiceCard
          title={item.title}
          content={item.content}
          src={item.imgSrc}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default Service;
