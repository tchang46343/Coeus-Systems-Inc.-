import React from "react";
import "./NewUser.css";

export default class NewUser extends React.Component {
  render() {
    return (
      <div className="NewUser">
        <header>
          <h1> Talk To An Advisor Today!</h1>
          <form className="signup-form">
            <label className="Name">
              Full Name:*
              <input
                className="UserEntry"
                type="text"
                required
                placeholder="David"
              ></input>
            </label>

            <label className="Name">
              {" "}
              Business Email:*
              <input
                className="UserEntry"
                type="text"
                required
                placeholder="Johnson"
              ></input>
            </label>

            <label className="Name">
              {" "}
              Phone Number:*
              <input
                className="UserEntry"
                type="text"
                required
                placeholder="(000)-000-0000"
              ></input>
            </label>

            <label className="Name">
              {" "}
              Company Name:
              <input
                className="UserEntry"
                type="text"
                placeholder="Oracle"
              ></input>
            </label>
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
