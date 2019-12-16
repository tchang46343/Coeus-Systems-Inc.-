import React from "react";
import "./Get.css";
import { VendorContext } from "../../../../VendorContext";

export default class GetData extends React.Component {
  static contextType = VendorContext;
  constructor(props) {
    super(props);
    this.state = {
      vendor: "",
      item_name: ""
    };
  }
  VendorChanged(vendor) {
    this.setState({
      vendor
    });
  }

  ItemChanged(item_name) {
    this.setState({
      item_name
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.context.updateFilter(this.state.vendor, this.state.item_name);
  };

  render() {
    const { vendor, item_name } = this.state;

    const itemsJSX = this.context.vendors
      .filter(item => {
        return (
          item.vendor.toLowerCase() === vendor.toLowerCase() &&
          item.item_name.toLowerCase() &&
          item_name.toLowerCase()
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

    console.log(itemsJSX);
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
        </form>
        <ul>{itemsJSX}</ul>
      </div>
    );
  }
}
