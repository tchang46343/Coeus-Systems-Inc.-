import React from "react";
import "./HomePage.css";
import NavBar from "./Navbar";
import MarketingServices from "./MarketingService";
import NewUser from "./NewUser";

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <MarketingServices />
        <NewUser />
        <footer className="Legal">
          Created by Terrance Chang Copyright © 2019 All Rights Reserved
        </footer>
      </div>
    );
  }
}
