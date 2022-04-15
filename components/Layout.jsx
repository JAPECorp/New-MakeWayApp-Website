import Nav from "../components/NavBar/Nav";
import Footer from "./Footer/footer";
import { useState } from "react";
import SideBar from "../components/NavBar/sidebar";

const Layout = ({ children }) => {
  const [sideBar, setSideBar] = useState(false);

  return (
    <div>
      <Nav sideBar={sideBar} setSideBar={setSideBar} />
      <SideBar sideBar={sideBar} />
      {children}
      <section className="lg:px-72">
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
