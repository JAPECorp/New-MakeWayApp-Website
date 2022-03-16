import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="px-10 mt-10">
      <div className="sm:flex items-center sm:justify-between">
        <Link href="/" className="flex items-center mb-4 sm:mb-0" passHref>
          <img src="/Logo2.png" className="mr-6 h-12" alt="Logo" />
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-black sm:mb-0 ">
          <li>
            <Link href="/about">
              <a className="mr-4 hover:text-blue-500 ">About</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="mr-4 hover:text-blue-500">FAQ</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="mr-4 hover:text-blue-500">Support</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="mr-4 hover:text-blue-500">Privacy Policy</a>
            </Link>
          </li>
        </ul>
      </div>

      <span className="block text-base text-black text-center dark:text-black">
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
