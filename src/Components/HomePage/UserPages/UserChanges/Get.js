import React from "react";
import "./Get.css";
import { VendorContext } from "../../../../VendorContext";

export default class GetData extends React.Component {
  static contextType = VendorContext;
  constructor(props) {
    super(props);
    this.state = {
      display: false,
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
    this.setState({
      display: true
    });
  };

  render() {
    const { vendor, item_name } = this.state;
    const itemsJSX = this.context.vendors
      ? this.context.vendors
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
                <p className="description">{item.description}</p>
                <p className="price">{item.price}</p>
                <p className="availbility">{item.availbility}</p>
              </li>
            );
          })
      : "";

    const itemsJSXRender = this.state.display ? itemsJSX : "";

    return (
      <div className="GetContent">
        <link
          href="https://fonts.googleapis.com/css?family=Patua+One&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Merriweather:700&display=swap"
          rel="stylesheet"
        ></link>
        <header className="getTitleName"> Retrieve Part </header>
        <form className="addNewPart">
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
          <button className="Report" onClick={this.handleSubmit}>
            Run Report
          </button>
        </form>
        <header className="resultsTitle"> Results: </header>
        <ul className="Results">{itemsJSXRender}</ul>
        <footer className="content-info">
          Created by Terrance Chang Copyright © 2020 All Rights Reserved
        </footer>
      </div>
    );
  }
}
