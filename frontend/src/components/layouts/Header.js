import React from "react";
import { Link } from "react-router-dom";
import Login from "../Auth/Login";
export default function Header() {
  return (
    <nav className="navbar row">
      {/* logo */}
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
          <img alt="FixItFast Logo" width="150px" src="./images/logo.png" />
        </div>
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <ul>
          <li className="nav-item">
            <button className="btn">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </button>
          </li>
          <li className="nav-item">
            <button className="btn">
              <Link to="/reservations" className="nav-link">
                Reservations
              </Link>
            </button>
          </li>
          <Login />
        </ul>
      </div>
    </nav>
  );
}
