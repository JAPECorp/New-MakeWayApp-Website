import FaqComponenet from "../utilities/Cards/faqComponent";

function Faqs() {
  const faqs = [
    {
      key: 0,
      title: "How many team members can I invite?",
      description: "You can invite as many team members as you like",
    },
    {
      key: 1,
      title: "What is the maximum file upload size?",
      description:
        "No more than 2GB. All files in your account must fit your alloted storage space",
    },
    {
      key: 2,
      title: "How do I reset my password?",
      description:
        "You can use the reset password function from the settings menu",
    },
    {
      key: 3,
      title: "Can I cancel my subscription?",
      description: "You can, but there is no money-back guarantee",
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
  );
}

export default Faqs;
