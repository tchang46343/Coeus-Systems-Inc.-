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
            <li className="navOptionsAccess">
              <Link to="/" onClick={this.closeNavbar}>
                Home
              </Link>
            </li>
            <li className="navOptionsAccess">
              <Link to="/getdata">Review Part</Link>
            </li>
            <li className="navOptionsAccess">
              <Link to="/postdata">Add New Part</Link>
            </li>
            <li className="navOptionsAccess">
              <Link to="/deletedata">Delete Part</Link>
            </li>
            <li className="navOptionsAccess">
              <Link to="/updatedata">Update Part</Link>
            </li>
            <li className="navOptionsAccess">
              <Link to="/userpage">All Options</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
