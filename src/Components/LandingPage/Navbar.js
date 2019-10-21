import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

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
                <Link to="/">Home</Link>
              </li>
              <li>
                <p>Services</p>
              </li>
              <li>
                <p>About Us</p>
              </li>
              <li>
                <Link to="/userpage">Sign-In</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
