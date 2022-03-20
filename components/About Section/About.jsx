import Image from "next/image";

function AboutSection(props) {
  return (
    <>
      <div className="mt-32">
        <h1 className="text-black text-left text-makeway-md">About Us</h1>

        <h3 className=" text-black mt-5">
          <span className="text-blue-600">‘</span>We believe that We can Reduce
          Traffic in our Neighbourhood.<span className="text-blue-600">’</span>
        </h3>
        <div>
          <Image
            layout="fill"
            src={"/aboutImage.png"}
            objectFit="contain"
            alt="about-image"
          />
        </div>
      </div>
    </>
  );
}
export default AboutSection;
