import React from "react";
import "./Navbar.css";
// import UserHomeScreen from "./UserPages/UserHomeScreen/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class NavBar extends React.Component {
  render() {
    return (
      <Router>
        <div className="navContent">
          <header className="AppTitle"> Coeus</header>
          <nav className="Login">
            <div className="AppLinks">
              <label for="hamburger">&#9776;</label>
              <input type="checkbox" id="hamburger" />
              <ul>
                <li>
                  <p>Home</p>
                </li>
                <li>
                  <p>Services</p>
                </li>
                <li>
                  <p>About Us</p>
                </li>
                <li>
                  <p>Sign-In</p>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </Router>
    );
  }
}
