import React, { Component } from "react";
import "./HomeScreen.css";
import UserOptions from "./UserOptions";
export default class UserHomeScreen extends Component {
  render() {
    return (
      <div className="UserHomeScreen">
        <main>
          <section className="userInstructions">
            <h1 className="howToUseIntro">Instructions</h1>
            <p className="howToUse">
              Welcome, to the database modification page. This page allows users
              to add, review, delete, and update parts from the database. Try
              adding a part to the database by clicking on the Add Part tile.
              Once in the Add Part form, you must enter all the required fields
              and click "Add Part".
            </p>
          </section>
          <UserOptions />
        </main>
      </div>
    );
  }
}
