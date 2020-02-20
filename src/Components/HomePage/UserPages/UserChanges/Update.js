import React from "react";
import "./Update.css";

export default class UpdateData extends React.Component {
  render() {
    return (
      <div className="UpdateContent">
        <link
          href="https://fonts.googleapis.com/css?family=Merriweather:700&display=swap"
          rel="stylesheet"
        ></link>
        <header className="updateTitleName"> Update Part </header>
        <form className="addNewPart">
          <label className="vendorDelete">Vendor:</label>
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
          Created by Terrance Chang Copyright © 2020 All Rights Reserved
        </footer>
      </div>
    );
  }
}
