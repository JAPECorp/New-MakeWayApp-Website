import Image from "next/image";
import PrivacyContent from "./privacyContent";

function Privacy(props) {
  return (
    <>
      <div className="mt-32">
        <h1 className="text-black text-left text-makeway-md">Privacy Policy</h1>
        <div className="">
          <PrivacyContent />
        </div>
      </div>
    </>
  );
}
export default Privacy;
