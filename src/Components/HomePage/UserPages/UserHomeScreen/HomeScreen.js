import React, { Component } from "react";
import "./HomeScreen.css";
import UserOptions from "./UserOptions";
export default class UserHomeScreen extends Component {
  render() {
    return (
      <div className="UserHomeScreen">
        <main>
          <UserOptions />
        </main>
      </div>
    );
  }
}
