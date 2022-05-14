import { Fade } from "react-awesome-reveal";
import GuideCard from "../utilities/Cards/GuideCard";

export default function Instructions() {
  const guideArray = [
    {
      className: "card-1",
      number: "01",
      title: "Register with your own car",
      content:
        "Together we can build a community where trust and integrity is paramount. It's starts with you. You can help the Make Way family by registering on the app with a car you own or a car you have access to at least 90% of the time",
      id: 1,
    },
    {
      className: "card-2",
      number: "02",
      title: "Be a pinger by extending a notification",
      content:
        "Should there be a situation in which an individual registers on the app without being the original owner to the car, we advise that this individual extends the message of his/her car blocking the individual to the original owner of the car in order to makeway for the blocked person.",
      id: 2,
    },
    {
      className: "card-3",
      number: "03",
      title: "The option to register multiple numbers",
      content:
        "We aim to give users the option to register multiple numbers, should it be that the car is used by more than one individual. This gives people the assurance that their ping will be attended to irrespective of who might be using the car at any given moment.",
      id: 3,
    },
    {
      className: "card-4",
      number: "04",
      title: "Security is paramount",
      content:
        "Always make sure to attend to a ping(your car) with a trusted person to prevent any attempt of being robbed or attacked. We are aware that some unscrupulous individuals might only ping you todraw your attention to your car only to further attack/assault you. Help us make our community SAFE.",
      id: 4,
    },
  ];
  return (
    <Fade cascade>
      <div className="mt-20">
        <h2 className="text-black text-center">Guide</h2>
        <p className="text-center mt-6 text-lg font-nomral w-10/12 mx-auto">
        These are the standards <span className="text-blue-500 text-lg font-medium">MAKEWAY</span> entreats users to adhere to ensure smooth and accurate services. By adhering to these guidelines, users are assured of the best service.
        </p>

        <div className="flex flex-col lg:flex-row gap-16 mt-16">
          {guideArray.map((item) => (
            <GuideCard
              className={item.className}
              number={item.number}
              title={item.title}
              content={item.content}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </Fade>
  );
}
