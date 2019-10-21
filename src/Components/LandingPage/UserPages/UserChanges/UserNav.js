import React from "react";
import { Link } from "react-router-dom";
import "./UserNav.css";

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="navContent">
        <header className="AppTitle">
          Welcome to Coeus you are Currently Login as Guest User
        </header>
        <nav className="Login">
          <div className="AppLinks">
            <label for="hamburger">&#9776;</label>
            <input type="checkbox" id="hamburger" />
            <ul>
              <li>
                <Link to="/userpage"> Home </Link>
              </li>
              <li>
                <a className="nav-link scroll" href="#ProfileSetting">
                  Profile Settings
                </a>
              </li>

              <li>
                <Link to="/"> Sign Out </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
