import React from "react";
import "./NewUser.css";

export default class NewUser extends React.Component {
  render() {
    return (
      <div className="NewUser">
        <header>
          <h1> Talk To An Advisor Today!</h1>
          <form className="signup-form">
            <label className="Name">Name:*</label>
            <input className="UserEntry" type="text" required></input>

            <label className="Name"> Business Email:*</label>
            <input className="UserEntry" type="text" required></input>

            <label className="CompanyNumber"> Phone:</label>
            <input className="UserEntry" type="text" required></input>

            <label className="Company"> Company Name:</label>
            <input className="UserEntry" type="text"></input>

            <div className="Submit_Request">
              <button type="submit" className="submitInfo">
                Submit
              </button>
            </div>
          </form>
        </header>
      </div>
    );
  }
}
