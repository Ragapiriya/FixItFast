import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <nav className="navbar row">
      {/* logo */}
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
          <img width="150px" src="./images/logo.png" />
        </div>
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <ul>
          <li className="nav-item">
            <button>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </button>
          </li>
          <li className="nav-item">
            {/* <button
            // className="nav-link active"
            // aria-current="page"
            // onClick={() => setSelectedComponent("Reservation")}
            >
              Reservations
            </button> */}
            <button>
              <Link to="/reservations" className="nav-link">
                Reservations
              </Link>
            </button>
          </li>
          <li className="nav-item">
            {/* <button
            // className="nav-link"
            // onClick={() => setSelectedComponent("UserProfile")}
            >
              Profile
            </button> */}
            <button>
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </button>
          </li>
          <li>
            <button className="btn" id="login_btn">
              Login or Loggout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
