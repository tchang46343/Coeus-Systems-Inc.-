import React from "react";
import "./HomeScreen.css";
import UserNav from "./UserNavBar";
import UserOptions from "./UserOptions";
export default class UserHomeScreen extends React.Component {
  render() {
    return (
      <div className="UserHomeScreen">
        <main>
          <UserNav />
          <UserOptions />
        </main>
        <footer className="Legal">
          Created by Terrance Chang Copyright © 2019 All Rights Reserved
        </footer>
      </div>
    );
  }
}
