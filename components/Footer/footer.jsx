import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="px-10 mt-20">
      <div className="sm:flex items-center sm:justify-between">
        <Link href="/" className="flex items-center mb-4 sm:mb-0" passHref>
          <img
            src="/Logo2.png"
            className="mr-6 h-12 content-center"
            alt="Logo"
          />
        </Link>
        <ul className="flex mb-10 text-sm text-black sm:mb-0 ">
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

      <span className="block text-base text-black text-center dark:text-black mt-4">
        © 2022{" "}
        <a href="https://makewayapp.com" className="hover:underline">
          MakeWay
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;
