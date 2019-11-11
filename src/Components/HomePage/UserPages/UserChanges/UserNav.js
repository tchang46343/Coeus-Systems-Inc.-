import React from "react";
import { Link } from "react-router-dom";
import "./UserNav.css";

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="NavUserContent">
        <header className="UserAppTitle">
          Welcome to Coeus you are Currently Login as Guest
        </header>
        <nav className="UserNavOptions">
          <label for="hamburger">&#9776;</label>
          <input type="checkbox" id="hamburger" />
          <ul className="UserLinks">
            <li>
              <Link to="/userpage"> Home </Link>
            </li>
            <li>
              <a className="nav-link scroll" href="#ProfileSetting">
                Settings
              </a>
            </li>

            <li>
              <Link to="/"> Sign Out </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
