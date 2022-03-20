import Link from "next/link";
import Image from "next/image";
import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const FooterItem = (props) => (
  <li>
    <Link href={`#${props.href}`}>
      <a className="nav-link hover:text-blue-500">{props.text}</a>
    </Link>
  </li>
);

function Footer() {
  return (
    <footer className="mt-20 p-4 bg-white sm:p-6">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <a href="" className="flex items-center">
            <Image
              src="/Logo2.png"
              className="mr-3 h-8"
              alt="Logo"
              width={90}
              height={60}
            />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:gap-20 sm:grid-cols-2">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">
              Product
            </h2>
            <ul className="text-gray-800">
              <li className="mb-4">
                <Link href="/about">
                  <a className="nav-link hover:text-blue-500">About Us</a>
                </Link>
              </li>
              <li>
                <FooterItem href="#faqs" text="FAQ's" />
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">
              Information
            </h2>
            <ul className="text-gray-800">
              <li className="mb-4">
                <Link href="/privacy">
                  <a className="nav-link hover:text-blue-500">Privacy Policy</a>
                </Link>
              </li>
              <li>
                <FooterItem href="#" text="Support" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-200 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-black sm:text-center">
          © 2022{" "}
          <a href="" className="hover:underline">
            MakeWay
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a href="#" className="text-blue-600 hover:text-gray-900 ">
            <FaInstagram />
          </a>
          <a href="#" className="text-blue-600 hover:text-gray-900 ">
            <FaFacebookF />
          </a>
          <a href="#" className="text-blue-600 hover:text-gray-900 ">
            <FaTwitter />
          </a>
          <a href="#" className="text-blue-600 hover:text-gray-900 ">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
