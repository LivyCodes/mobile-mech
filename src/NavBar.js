import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#link">
          <i class="fa-solid fa-wrench"></i>
          <i class="fa-solid fa-car"></i>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#link">
                HOME
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#lik"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                CAR WARRANTY SERVICES
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#link">
                    VEHICLE CONDITION CHECK
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#link">
                    ODOMETER CHECK
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#link">
                    COMPRESSOR
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#link"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                DATA SCAN SERVICES
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#link">
                    FUEL TRIM
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#link">
                    FAULT CODE
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#link">
                    ERASED HISTORY
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#link"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                GARAGE SERVICES
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#link">
                    OIL CHANGES
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#link">
                    SERVICING
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#link">
                    BRAKE JOB
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#link">
                    SUSPENSION
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#link"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                EMERGENCY VEHICES
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#link">
                    STAND BY CORE
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#link">
                    ROAD SIDE ASSIST
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#link">
                VEHICLES FOR HIRE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#link">
                ABOUT US
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#link">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
