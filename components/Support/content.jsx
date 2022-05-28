import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

function SupportContent(props) {
  return (
    <>
      <div className="mt-20 sm:mt-20">
        <h1 className="text-black text-left text-makeway-md">
        Help & Support
        </h1>

        <p className="text-lg md:text-2xl text-gray-600 mt-5">
        At makeway, our core concern are our users.
         We strife to ensure the best services
         that deliver on safety and efficiency. 
        We are here to help make your driving experience
         even more enjoyable. Let us know what your concerns
          are and our team will get right on helping you out!
        </p>
      </div>
      <div className="mt-20">
        <h1 className="text-black text-left text-makeway-md">Our Location</h1>
        <p className="text-lg md:text-2xl text-gray-600 mt-5">
       <span className="text-blue-600">Makeway </span>
          is currently in operation in all major
        cities in Ghana. The app functions nationwide
         as long as there is a valid internet connection
          and parties involved are registers on the app.
           That’s all you need!
        </p>
      </div>
      <div className="mt-20">
        <h1 className="text-black text-left text-makeway-md">Security & Staying Safe</h1>
        <p className="text-lg md:text-2xl text-gray-600 mt-5">
       For all security concerns such as hacked accounts, 
       difficulty signing into account, bugs etc,
        contact our team via email
         and our team will provide quick and swift help.
        </p>
      </div>
      <div className="mt-20">
        <h1 className="text-black text-left text-makeway-md">Suggestions & Recommendations</h1>
        <p className="text-lg md:text-2xl text-gray-600 mt-5">
        Help us help you! Do you have a suggestion or 
        recommendation that can improve the app? 
        Contact us via email
        We appreciate the feedback 
        Support us in achieving our goals! 
        <span className="text-blue-600"> Makeway </span>
          app works best when more people are registered.
           Help us spread the word! 
        </p>
      </div>
      <div className="mt-20 sm:mt-20">
        <h1 className="text-black text-left text-makeway-md">
        Follow and Interact <br />
        with us on Social media. 
        </h1>
        <div className="flex mt-5 gap-10">
        <a
            target={"_blank"}
            href="https://www.instagram.com/makeway_app/"
            className="text-blue-600 hover:text-gray-900 "
            rel="noreferrer"
          >
            <FaInstagram size={80}/>
          </a>
          <a
            target={"_blank"}
            href="https://twitter.com/makeway_app"
            className="text-blue-600 hover:text-gray-900 "
            rel="noreferrer"
          >
            <FaTwitter size={80} />
          </a>
           <a
            target={"_blank"}
            href="https://m.facebook.com/makewayapp/?ref=py_c"
            className="text-blue-600 hover:text-gray-900 "
            rel="noreferrer"
          >
            <FaFacebookF size={80} />
          </a>
        </div>

        <p className="md:w-2/4 text-lg md:text-2xl text-black font-bold mt-5">
          Contact Us
        </p>
        <p className="mt-2">
        <a
            href="mailto:makeway.app34@gmail.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="text-2xl font-medium  text-blue-600"
          >
            makeway.app34@gmail.com
          </a>
        </p>
        <p className="mt-2">
        <a
            href="tel:+233546382860"
            className="text-2xl font-medium  text-blue-600"
          >
            054 638 2860
          </a>
          <a
            href="tel:+233593325012"
            className="text-2xl font-medium  text-blue-600"
          >
            059 332 5012
          </a>
        </p>
      </div>
    </>
  );
}
export default SupportContent;
