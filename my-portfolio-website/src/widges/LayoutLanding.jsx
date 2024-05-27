import React from "react";
import Navigation from "../component/Navigation";
import Footer from "../component/Footer";
import Contact from "../pages/contact/Contact";
import Portfolio from "../pages/porfolio/Portfolio";

const LayoutLanding = (props) => {
  return (
    <div>
      <Navigation />

      <div className="container mx-auto">{props.children}</div>

      <Footer />
    </div>
  );
};

export default LayoutLanding;
