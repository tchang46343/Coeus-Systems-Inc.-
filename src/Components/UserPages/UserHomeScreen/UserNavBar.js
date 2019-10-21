import React from "react";
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
                <a class="nav-link scroll" href="#Home">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scroll" href="#Services">
                  Profile Settings
                </a>
              </li>

              <li>
                <a className="SIGN OUT" href="#Login">
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
