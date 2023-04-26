import React from "react";
import "./OurContacts.css";

function OurContacts() {
  return (
    <div>
      <div>
        <h4 className="mt-1">Our Contacts</h4>
      </div>
      <div>
        <ul className="contacts-list">
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
          <a href="tel:###" rel="noreferrer noopener" title="make a call">
            <li class="list-item">
              Phone <br />
              <i className="fa-solid fa-phone"></i>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default OurContacts;
