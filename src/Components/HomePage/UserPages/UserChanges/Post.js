import React from "react";
import "./Post.css";
//import UserNav from "./UserNav";

export default class PostData extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    const url = "https://coeus-system-inc.herokuapp.com/inventory";

    fetch(url);
  }
  render() {
    return (
      <div className="GetContent">
        <form className="addNewPart" onSubmit={event => this.onSubmit(event)}>
          <label className="vendor:">Vendor:</label>
          <input
            type="text"
            className="PostName"
            placeholder="Madix"
            required
          ></input>

          <label className="item">Enter Part ID:</label>
          <input
            type="text"
            className="PostID"
            placeholder="GT-413-10"
            required
          ></input>

          <label className="item">QTY Available:</label>
          <input
            type="string"
            className="PostQtyAvail"
            placeholder="Yes or No"
            required
          ></input>
          <button className="PostButton">POST</button>
        </form>
        <footer className="content-info">
          Created by Terrance Chang Copyright © 2019 All Rights Reserved
        </footer>
      </div>
    );
  }
}
