import React from "react";
import "./Delete.css";
import UserNav from "./UserNav";

export default class DeleteData extends React.Component {
  render() {
    return (
      <div className="DeleteContent">
        <UserNav />
        <form className="addNewPart">
          <label id="vendor:">Vendor:</label>
          <input
            type="text"
            className="vendorName"
            placeholder="Madix"
            required
          ></input>
          <label className="item">Enter Part ID:</label>
          <input
            type="text"
            className="partID"
            placeholder="GT-413-10"
            required
          ></input>
          <button>Delete</button>
        </form>
        <footer className="content-info">
          Created by Terrance Chang Copyright © 2019 All Rights Reserved
        </footer>
      </div>
    );
  }
}
