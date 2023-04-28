import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="heros">
      <p>Our Contacts</p>
      <ul class="footer-list">
        <a
          href="https://instagram.com/"
          rel="noreferrer noopener"
          target="_blank"
          title="go to instagram account"
        >
          <li className="list-item">
            Instagram <br />
            <i class="fa-brands fa-instagram"></i>
          </li>
        </a>
        <a
          href="https://facebook.com"
          rel="noreferrer noopener"
          target="_blank"
          title="go  to facebook account"
        >
          <li className="list-item">
            Facebook <br />
            <i class="fa-brands fa-facebook"></i>
          </li>
        </a>
        <a
          href="mailto:bmm@gmail.com"
          rel="noreferrer noopener"
          title="send email"
        >
          <li className="list-item">
            Email <br />
            <i class="fa-regular fa-envelope"></i>
          </li>
        </a>
        <a
          href="tel:+254726695772"
          rel="noreferrer noopener"
          title="make a call"
        >
          <li className="list-item">
            Phone <br />
            <i class="fa-solid fa-phone"></i>
          </li>
        </a>
      </ul>
    </div>
  );
}

export default Footer;
