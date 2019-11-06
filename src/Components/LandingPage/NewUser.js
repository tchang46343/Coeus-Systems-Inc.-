import React from "react";
import "./NewUser.css";

export default class NewUser extends React.Component {
  render() {
    return (
      <div className="NewUser">
        <header>
          <h1> Talk To An Advisor Today!</h1>
          <form className="signup-form">
            <div className="FirstName">
              <label className="Name"> First Name:*</label>
              <input type="text"></input>
            </div>
            <div className="LastName">
              <label className="Name"> Last Name:*</label>
              <input type="text"></input>
            </div>

            <div className="BusinessEmail">
              <label className="Email"> Business Email:*</label>
              <input className="EmailBox" type="text" required></input>
            </div>

            <div className="CustomeNumber">
              <label className="CompanyNumber"> Phone:*</label>
              <input type="text" required></input>
            </div>

            <div className="CompanyName">
              <label className="Company"> Company Name:*</label>
              <input type="text"></input>
            </div>

            <button type="submit" id="Submit_Request">
              Submit
            </button>
          </form>
        </header>
      </div>
    );
  }
}
