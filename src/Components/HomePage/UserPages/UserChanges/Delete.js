import React from "react";
import "./Delete.css";
import { VendorContext } from "../../../../VendorContext";

export default class DeleteData extends React.Component {
  static contextType = VendorContext;
  constructor(props) {
    super(props);
    this.state = {
      display: true,
      vendor: "",
      item_name: "",
      description: "",
      price: "",
      availbility: ""
    };
  }

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
      <div className="DeleteContent">
        <link
          href="https://fonts.googleapis.com/css?family=Merriweather:700&display=swap"
          rel="stylesheet"
        ></link>
        {/* <form className="DeleteData">
          <section className="vendorSection1">
            <header className="titleDelete">Delete Part</header>
            <label className="VendorDelete">Vendor:</label>
            <input
              type="text"
              className="VendorDeleteName"
              placeholder="Madix"
              required
              value={this.state.vendor}
              onChange={e => this.vendorChanged(e.target.value)}
            ></input>
          </section>
          <section className="vendorSection2">
            <label className="DeleteItem">Part ID:</label>
            <input
              type="text"
              className="DeletePartID"
              placeholder="GT-413-10"
              required
            ></input>
          </section>

          <button className="DeleteButton">Delete</button>
        </form> */}

        <header className="resultsTitle"> Results: </header>
        <ul className="Results">{itemsJSXRender}</ul>
      </div>
    );
  }
}
