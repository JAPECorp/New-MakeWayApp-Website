import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const NavItem = (props) => (
  <li>
    <Link href={`#${props.href}`}>
      <a className="nav-link">{props.text}</a>
    </Link>
  </li>
);

const SideBar = (props) => {
  return (
    <AnimatePresence>
      {props.sideBar && (
        <>
          <motion.div
            initial={{ y: "-100%" }}
            animate={{
              y: 0,
              top: "10%",
            }}
            exit={{
              y: "-100%",
            }}
            transition={{ type: "smooth", bounce: 0, duration: 0.2 }}
            className="fixed bg-white text-black shadow-lg top-0 right-0 w-full p-5 text-right flex flex-col items-end gap-10 z-30"
          >
            <div className="m-auto">
              <ul className="flex flex-col items-center gap-10">
                <NavItem href="#how-it-works" text="How it Works" />
                <NavItem href="#faqs" text="FAQ’s" />
                <NavItem href="/about-us" text="About" />
              </ul>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
export default SideBar;
