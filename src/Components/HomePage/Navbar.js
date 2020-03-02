import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavBarOpen: false
    };
  }

  toggleNavBar = () => {
    const { isNavBarOpen } = this.state;
    this.setState({ isNavBarOpen: !isNavBarOpen });
  };

  closeNavBar = e => {
    this.setState({ isNavBarOpen: false });
  };
  render() {
    const { isNavBarOpen } = this.state;

    const navLinksMenu = isNavBarOpen ? (
      <ul className="navLinksForPages">
        <li className="navOptionsAccess" onClick={this.closeNavBar}>
          <Link to="/">Home</Link>
        </li>
        <li className="navOptionsAccess" onClick={this.closeNavBar}>
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
    ) : (
      ""
    );

    return (
      <header className="MainTitle">
        <nav className="WelcomeLogin">
          <h1 className="Title">Coeus</h1>
          <label
            className="naaaaa"
            htmlFor="hamburger"
            onClick={this.toggleNavBar}
          >
            &#9776;
          </label>
          <input type="checkbox" id="hamburger" />
          {navLinksMenu}
        </nav>
      </header>
    );
  }
}
