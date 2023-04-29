import React from "react";
import "./Container.css";

function Container() {
  return (
    <div>
      <div className="container">
        <h4 className="about-title">OUR SERVICES</h4>
        <div className="row mb-5 mt-5">
          <h4 className="about-title">CAR WARRANTY SERVICES</h4>
          <div className="col">
            <img
              src="https://myopal.com.my/wp-content/uploads/2021/01/landing-page-motor-insurance.jpg"
              className="img-fluid"
              alt="insurance"
            />
          </div>
          <div className="col about">
            <p>
              The car warranty services provided by our company include
              comprehensive coverage, odometer checks, and vehicle condition
              checks to ensure the vehicle meets the eligibility criteria. The
              team of professionals conducts thorough inspections to identify
              pre-existing conditions and offer extended warranty options for
              added protection. The services provide peace of mind by protecting
              the vehicle from costly repairs and breakdowns. Interested
              individuals can contact the company for more information below.
            </p>
            <button type="button" class="btn btn-info btn-a">
              Car Warranty Services
            </button>
          </div>
        </div>
        <div className="row  mb-5 mt-5">
          <h4 className="about-title one-a">DATA SCAN SERVICES</h4>
          <div className="row-a">
            <div className="col about">
              <p>
                Our company provides data scan services for vehicles that aim to
                identify issues affecting the car's performance using diagnostic
                tools such as fuel trim, fault code and erased history. The
                services include a comprehensive analysis of crucial systems to
                identify problems early on and provide effective solutions. Car
                owners can save time and money by detecting issues early on. The
                company assures reliable and accurate diagnostic tools to get
                the vehicle running smoothly. Interested individuals can contact
                the company to schedule a data scan service.
              </p>
              <button type="button" class="btn btn-info btn-a">
                Data Scan Services
              </button>
            </div>
            <div className="col">
              <img
                src="https://media.istockphoto.com/id/957612802/vector/hardware-diagnostics-condition-of-car-scanning-test-monitoring-analysis-verification.jpg?s=612x612&w=0&k=20&c=GFulPl818cPbtP7H9mdSoYDu7L7TMFyJatM_bwbgWhk="
                className="img-fluid"
                alt="vehicle scan"
              />
            </div>
          </div>
        </div>
        <div className="row mb-5 mt-5">
          <h4 className="about-title">GARAGE SERVICES</h4>
          <div className="col">
            <img
              src="https://media.istockphoto.com/id/897283320/vector/car-repair.jpg?s=170667a&w=0&k=20&c=hgBqkHkMe6rlBfLq4n32Jlm7AXC_2e8EV508VKVa0J4="
              className="img-fluid"
              alt="garage"
            />
          </div>
          <div className="col about">
            <p>
              Our company provides a range of garage services to ensure that
              vehicles run smoothly and efficiently. Services offered include
              oil changes, comprehensive servicing, brake job, suspension, and
              machining to provide precision repairs to worn-out parts. The
              experienced technicians use the latest tools and techniques to
              provide reliable and efficient services. The services aim to
              prolong the vehicle's life, ensure safety on the road, and improve
              comfort and handling. Interested individuals can contact the
              company to schedule an appointment for their vehicle.
            </p>
            <button type="button" class="btn btn-info btn-a">
              Garage Services
            </button>
          </div>
        </div>
        <div className="row  mb-5 mt-5">
          <h4 className="about-title one-a">EMERGENCY SERVICES</h4>
          <div className="row-a">
            <div className="col about">
              <p>
                Our company provides emergency vehicle services that include
                24/7 roadside assistance and standby core services to help
                drivers get back on the road quickly. The team of experienced
                professionals is equipped with the latest tools and techniques
                to handle any situation. The standby core services provide quick
                and easy access to replacement parts, reducing wait times for
                repairs. The services aim to provide peace of mind to drivers in
                case of unexpected issues. Interested individuals can contact
                the company to learn more about our emergency vehicle services.
              </p>
              <button type="button" class="btn btn-info btn-a">
                Emergency Services
              </button>
            </div>
            <div className="col">
              <img
                src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/09/car-being-towed.jpeg.jpg"
                className="img-fluid"
                alt="road side assist"
              />
            </div>
          </div>
        </div>
        <div className="row mb-5 mt-5">
          <h4 className="about-title">CAR RENTAL SERVICES</h4>
          <div className="col">
            <img
              src="https://cdn.goseetravel.com/public/Cars/car-keys-hands-rental__ScaleMaxHeightWzQ3MF0.jpg"
              className="img-fluid"
              alt="garage"
            />
          </div>
          <div className="col about">
            <p>
              Our company provides car rental services with a range of vehicles
              available to rent for various durations, including daily, weekly,
              and monthly. The fleet includes compact cars and luxury vehicles
              to suit different preferences. The services come with insurance
              coverage for peace of mind on the road. The team aims to provide
              exceptional customer service for a hassle-free rental experience.
              The services offer the freedom and convenience of having a
              personal vehicle without the commitment of owning one. Interested
              individuals can contact the company to book their rental car.
            </p>
            <button type="button" class="btn btn-info btn-a">
              Car Rental Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
