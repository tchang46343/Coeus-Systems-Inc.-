import React from "react";
import "./Post.css";
import UserNav from "./UserNav";

export default class PostData extends React.Component {
  render() {
    return (
      <div className="GetContent">
        <UserNav />
        <form className="addNewPart">
          <label className="vendor:">Vendor:</label>
          <input
            type="text"
            className="PostName"
            placeholder="Madix"
            required
          ></input>

          <label className="item">Enter part ID:</label>
          <input
            type="text"
            className="PostID"
            placeholder="GT-413-10"
            required
          ></input>

          <label className="item">QTY Unavailable:</label>
          <input
            type="number"
            className="PostQtyUnavail"
            placeholder="10"
            min="1"
            max="200"
            required
          ></input>

          <label className="item">QTY Available:</label>
          <input
            type="number"
            className="PostQtyAvail"
            placeholder="10"
            min="1"
            max="200000"
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
