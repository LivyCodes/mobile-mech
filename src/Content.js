import React from "react";
import ContactUs from "./Contact";
import "./Content.css";
import Container from "./Container";
import Faq from "./faq";

function ContentMain() {
  return (
    <div>
      <div className="container-fluid text-center">
        <div className="row mt-5 mb-5">
          <div className="col-4 hero-a">
            <ContactUs />
          </div>
          <div className="col-4 hero-a">
            <Faq />
          </div>
        </div>
      </div>
      <Container />
    </div>
  );
}

export default ContentMain;
