import React from "react";
import "./Contact.css";

function ContactUs() {
  return (
    <div>
      <h4 className="mt-1">Contact Us</h4>
      <div className="mb-3">
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Name"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Email Address"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Subject"
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Message"
          required
        ></textarea>
      </div>
      <div className="mb-3">
        <button type="button" class="btn btn-info button">
          Submit
        </button>
      </div>
    </div>
  );
}

export default ContactUs;
