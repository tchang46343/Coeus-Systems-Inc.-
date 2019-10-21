import React from "react";
import "./NewUser.css";

export default class NewUser extends React.Component {
  render() {
    return (
      <div className="NewUser">
        <header>
          <h1> Talk Advisor Today To Setup An Account!</h1>
          <form className="signup-form">
            <div>
              <label htmlFor="First-name"> First Name:*</label>
              <input type="text" id="First-name"></input>
            </div>
            <div>
              <label htmlfor="last-name"> Last Name:*</label>
              <input type="text" id="last-name"></input>
            </div>
            <div>
              <div>
                <label htmlfor="Business-Email"> Business Email:*</label>
                <input type="text" id="Business-Email" required></input>
              </div>
              <div>
                <label htmlfor="Phone-Number"> Phone:*</label>
                <input type="text" id="Business-Email" required></input>
              </div>
              <label htmlfor="Company"> Company Name:*</label>
              <input type="text" placeholder="Google" id="company-name"></input>
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
