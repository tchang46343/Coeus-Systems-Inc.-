import React from "react";
import "./Get.css";
import UserNav from "./UserNav";
import Context from "../../../../context";

export default class GetData extends React.Component {
  static contextType = Context;
  render() {
    console.log(this.context.vendors);
    return (
      <div className="GetContent">
        <UserNav />
        <form className="addNewPart">
          <label className="vendor">Vendor:</label>
          <input
            type="text"
            placeholder="Madix"
            className="partID"
            required
          ></input>
          <label className="item">Enter Part ID:</label>
          <input type="text" placeholder="GT-413-10" className="partID"></input>
          <button className="Report">Run Report</button>
          <footer className="content-info">
            Created by Terrance Chang Copyright © 2019 All Rights Reserved
          </footer>
        </form>
      </div>
    );
  }
}
