import Nav from "../components/NavBar/Nav";
import Footer from "./Footer/footer";
const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <section className="lg:px-60">
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
