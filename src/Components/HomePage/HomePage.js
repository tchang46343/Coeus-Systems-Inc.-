import React from "react";
import "./HomePage.css";
import MarketingServices from "./MarketingService";
import NewUser from "./NewUser";

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <MarketingServices />
        <NewUser />
        <footer className="Legal">
          Created by Terrance Chang Copyright © 2020 All Rights Reserved
        </footer>
      </div>
    );
  }
}
