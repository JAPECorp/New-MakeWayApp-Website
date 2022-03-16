import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="mt-20">
      <div className="h-12 w-32 relative">
        <Link href="/">
          <a>
            <Image
              layout="fill"
              objectFit="contain"
              priority
              src={"/Logo.png"}
              alt="makeway-logo"
            />
          </a>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
