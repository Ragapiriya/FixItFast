import React from "react";
import { Link } from "react-router-dom";
import Login from "../Auth/Login";
import "./Header.css";
export default function AdminHeader() {
  return (
    <nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
          <img alt="FixItFast Logo" width="150px" src="./images/logo.png" />
        </div>
      </div>

      <div className="col-12 col-md-6 mt-4 mt-md-0 text-center">
        <ul>
          <li className="nav-item">
            <button className="btn">
              <Link to="/admin" className="nav-link">
                Dashboard
              </Link>
            </button>
          </li>
          <li className="nav-item">
            <button className="btn">
              <Link to="/" className="nav-link">
                Book a reservation
              </Link>
            </button>
          </li>
          <li className="nav-item">
            <button className="btn">
              <Link to="/reservations" className="nav-link">
                Your Reservations
              </Link>
            </button>
          </li>
          <Login />
        </ul>
      </div>
    </nav>
  );
}
