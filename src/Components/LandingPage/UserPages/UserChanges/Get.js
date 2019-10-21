import React from "react";
import "./Get.css";
import UserNav from "./UserNav";

export default class GetData extends React.Component {
  render() {
    return (
      <div className="GetContent">
        <UserNav />
        <form className="addNewPart">
          <label className="vendor:">Vendor:</label>
          <input
            type="text"
            placeholder="Madix"
            className="vendorName"
            required
          ></input>
          <label className="item">Enter Part ID:</label>
          <input type="text" placeholder="GT-413-10" className="partID"></input>
          <button className="Report">Run Report</button>
        </form>
        <footer className="content-info">
          Created by Terrance Chang Copyright © 2019 All Rights Reserved
        </footer>
      </div>
    );
  }
}
