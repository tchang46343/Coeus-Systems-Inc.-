import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class NavBar extends React.Component {
  render() {
    return (
      <header className="MainTitle">
        <h1 className="Title">Coeus</h1>
        <nav className="WelcomeLogin">
          <label for="hamburger">&#9776;</label>
          <input type="checkbox" id="hamburger" />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link>Services</Link>
            </li>
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link to="/userpage">Sign-In</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
