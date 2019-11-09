import React, { Component } from "react";
import "./HomeScreen.css";
import UserNav from "./UserNavBar";
import UserOptions from "./UserOptions";
export default class UserHomeScreen extends Component {
  render() {
    return (
      <div className="UserHomeScreen">
        <main>
          <UserNav />
          <UserOptions />
        </main>
      </div>
    );
  }
}
