/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

function AboutSection(props) {
  return (
    <>
      <div className="mt-32">
        <h1 className="text-black text-left text-makeway-md">About Us</h1>

        <p className="text-xl md:text-3xl text-black mt-5">
          <span className="text-blue-600">‘</span>We believe that We can Reduce
          Traffic in our Neighbourhood.<span className="text-blue-600">’</span>
        </p>
        
      </div>
    </>
  );
}
export default AboutSection;
