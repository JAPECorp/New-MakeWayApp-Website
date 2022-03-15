import Nav from "../components/NavBar/Nav";
const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
