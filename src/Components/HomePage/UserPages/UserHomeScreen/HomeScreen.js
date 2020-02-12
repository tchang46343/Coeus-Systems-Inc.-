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
              to add, review, and delete items from the database. To start,
              let's try adding a database item. Click on the add item tile. Once
              in the Add Item form, you must enter all the required fields and
              click "POST". Next, let's verify that the item you just added is
              in the database click on the "Retrieve Items". In the form fill
              out Vendor and the Part ID. You should be able to view the new
              item you just added to the database. Finally, you may also choose
              to delete and update items from the database.{" "}
            </p>
          </section>
          <UserOptions />
        </main>
      </div>
    );
  }
}
