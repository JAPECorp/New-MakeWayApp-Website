import Image from "next/image";
import Link from "next/link";
import { IoClose, IoMenu } from "react-icons/io5";

const NavItem = (props) => (
  <li>
    <Link href={`#${props.href}`}>
      <a className="nav-link hover:text-blue-500">{props.text}</a>
    </Link>
  </li>
);

function Nav(props) {
  return (
    <nav>
      <div className="h-12 w-32 relative">
        <Image
          layout="fill"
          objectFit="contain"
          priority
          src={"/Logo.png"}
          alt="makeway logo"
        />
      </div>

      <div className="hidden md:block">
        <ul className="inline-flex space md:gap-5 text-base font-medium space-x-6 ">
          <NavItem href="#how-it-works" text="How It Works" />
          <NavItem href="#faqs" text="FAQ's" />
          <NavItem href="/about-us" text="About" />
        </ul>
      </div>

      <div className="block md:hidden ">
        <div
          className="inline-flex items-center justify-center p-2 text-black"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open Menu</span>
          <span
            className="cursor-pointer"
            onClick={() => props.setSideBar((isOpen) => !isOpen)}
          >
            {!props.sideBar ? <IoMenu size={35} /> : <IoClose size={35} />}
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
