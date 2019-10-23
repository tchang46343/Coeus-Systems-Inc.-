import React from "react";
import { Link } from "react-router-dom";
import "./UserNavBar.css";

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="navContent">
        <header className="AppTitle"> Coeus</header>
        <nav className="Login">
          <div className="AppLinks">
            <label for="hamburger">&#9776;</label>
            <input type="checkbox" id="hamburger" />
            <ul>
              <li>
                <Link to="/userpage"> Home </Link>
              </li>
              <li>
                <a className="nav-link scroll" href="#Services">
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
