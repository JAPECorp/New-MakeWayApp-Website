import FaqComponenet from "../utilities/Cards/faqComponent";
import { Fade } from "react-awesome-reveal";

function Faqs() {
  const faqs = [
    {
      key: 0,
      title: "MakeWay, What is it?",
      description:
        "An easy to use app that clears a path for you to leave that heavily crowded parking lot.",
    },
    {
      key: 1,
      title: "Is it really easy to use?",
      description:
        "Yes! With easy instructions and a consumer friendly interface, the app is designed perfectly with you in mind! The engaging interface with the help feature and settings feature, allow you to change default setting to personalized ones for an even better experience!",
    },
    {
      key: 2,
      title: "How do I get it?",
      description:
        "Easy! The app is available on both google playstore and app store. Just search for it and download the it.",
    },
    {
      key: 3,
      title: "Who can use it?",
      description:
        "Everyone! Well not everyone entirely. You first need a phone of course. And to be a driver.",
    },
  ];

  const faqComponents = faqs.map((faq) => {
    return (
      <FaqComponenet
        title={faq.title}
        description={faq.description}
        key={faq.key}
      />
    );
  });

  return (
    <Fade cascade>
      <div id="#faqs" className="mt-32">
        <h2 className="text-black text-center">FAQ’s</h2>
        <div className="lg:px-36 container mx-auto flex items-center">
          <div className="flex-auto flex flex-col md:flex-row items-center bg-white rounded-xl m-5">
            <div className="flex-auto mb-2 w-full">
              <div className="flex-auto mb-2 w-full">{faqComponents}</div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Faqs;
