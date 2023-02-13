import Footer from "../components/Footer";
import Navigation from "../components/navigation/Navbar";
import Logo from "../components/Logo";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <React.Fragment>
      <Logo />
      <Navigation />
      <div>{children}</div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
