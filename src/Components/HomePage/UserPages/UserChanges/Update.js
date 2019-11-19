import React from "react";
import "./Update.css";

export default class UpdateData extends React.Component {
  render() {
    return (
      <div className="UpdateContent">
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
          <label className="qty">Enter New QTY:</label>
          <input
            type="number"
            className="ItemQty"
            min="1"
            placeholder="5"
            required
          ></input>
          <button className="Update">Update</button>
        </form>
        <footer className="content-info">
          Created by Terrance Chang Copyright © 2019 All Rights Reserved
        </footer>
      </div>
    );
  }
}
