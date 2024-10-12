import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import { Fragment } from "react"
export default function Header() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
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
            {/* <button
            // className="nav-link active"
            // aria-current="page"
            // onClick={() => setSelectedComponent("Reservation")}
            >
              Reservations
            </button> */}
            <button className="btn">
              <Link to="/reservations" className="nav-link">
                Reservations
              </Link>
            </button>
          </li>

          {isAuthenticated ? (
            <>
              <li>
                <button className="btn" id="login_btn" onClick={logout}>
                  Logout
                </button>
              </li>
              <li className="nav-item">
                <button className="btn">
                  <Link to="/profile" className="nav-link">
                    Profile
                  </Link>
                </button>
              </li>
            </>
          ) : (
            <li>
              <button
                className="btn"
                id="login_btn"
                onClick={loginWithRedirect}
              >
                Login{" "}
              </button>
            </li>
          )}
          {/* <button className="btn" id="login_btn">
              Login or Loggout
            </button> */}
        </ul>
      </div>
    </nav>
  );
}
