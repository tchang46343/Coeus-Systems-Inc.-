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
            className="vendorName"
            placeholder="Madix"
            required
          ></input>

          <label className="item">Enter part ID:</label>
          <input
            type="text"
            className="partID"
            placeholder="GT-413-10"
            required
          ></input>

          <label className="item">Part QTY unavailable:</label>
          <input
            type="text"
            className="idQtyUnavailable"
            placeholder="GT-413-10"
            required
          ></input>

          <label className="item">Part QTY Available:</label>
          <input
            type="text"
            className="idQtyAvailable"
            placeholder="GT-413-10"
            required
          ></input>
          <button className="post">POST</button>
        </form>
        <footer className="content-info">
          Created by Terrance Chang Copyright © 2019 All Rights Reserved
        </footer>
      </div>
    );
  }
}
