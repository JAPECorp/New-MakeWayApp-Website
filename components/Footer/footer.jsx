import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="px-10">
      <div className="sm:flex items-center sm:justify-between">
        <Link href="/" className="flex md:items-center mb-4 sm:mb-0" passHref>
          <Image
            layout="fill"
            objectFit="contain"
            priority
            src={"/Logo.png"}
            alt="makeway logo"
          />
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://flowbite.com" className="hover:underline">
          Flowbite™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;
