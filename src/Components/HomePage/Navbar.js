import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class NavBar extends React.Component {
  render() {
    return (
      <header className="MainTitle">
        <nav className="WelcomeLogin">
          <h1 className="Title">Coeus</h1>
          <label className="naaaaa" htmlFor="hamburger">
            &#9776;
          </label>
          <input type="checkbox" id="hamburger" />
          <ul className="navLinksForPages">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/userpage">Modify Database</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
