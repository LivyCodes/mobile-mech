import React from "react";
import NavBar from "./NavBar";
import Hero from "./hero";
import ContentMain from "./Content";
import Footer from "./Footer";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="wrapper">
      <div className="navigation">
        <NavBar />
      </div>
      <div className="mains">
        <Hero />
        <ContentMain />
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
