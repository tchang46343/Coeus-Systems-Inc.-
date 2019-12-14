import React from "react";
import "./Get.css";
import { VendorContext } from "../../../../VendorContext";

export default class GetData extends React.Component {
  static contextType = VendorContext;
  constructor(props) {
    super(props);
    this.state = {
      vendor: "",
      item_Name: ""
    };
  }
  VendorChanged(vendor) {
    this.setState({
      vendor
    });
  }

  ItemChanged(item_Name) {
    this.setState({
      item_Name
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    return <p>{this.context}</p>;
  }

  render() {
    console.log(this.vendor);
    console.log(this.item_Name);
    const { vendor, item_Name, description, price, availbility } = this.context;

    const itemsJSX = this.context.inventory
      .filter(item => {
        return (
          item.vendor.toLowerCase() === vendor.toLowerCase() &&
          item.item_Name.toLowerCase() &&
          item_Name.toLowerCase()
        );
      })

      .map((item, idx) => {
        return (
          <li key={idx} className="item">
            <p className="item-vendor">{item.vendor}</p>
            <p className="item-name">{item.item_name}</p>
          </li>
        );
      });
    return (
      <div className="GetContent">
        <form className="addNewPart" onSubmit={this.handleSubmit}>
          <label className="vendor">Vendor:</label>
          <input
            type="text"
            placeholder="Madix"
            className="VendorName"
            required
            value={this.state.vendor}
            onChange={e => this.VendorChanged(e.target.value)}
          ></input>
          <label className="item">Enter Part ID:</label>
          <input
            type="text"
            placeholder="GT-413-10"
            className="PartId"
            required
            value={this.state.item_Name}
            onChange={e => this.ItemChanged(e.target.value)}
          ></input>
          <button className="Report">Run Report</button>
          <footer className="content-info">
            Created by Terrance Chang Copyright © 2019 All Rights Reserved
          </footer>
          <ul>{itemsJSX}</ul>
        </form>
      </div>
    );
  }
}
