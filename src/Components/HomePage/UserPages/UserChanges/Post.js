import React from "react";
import "./Post.css";
//import UserNav from "./UserNav";

export default class PostData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vendor: " ",
      item: " ",
      availability: " "
    };
  }

  vendorChanged(vendor) {
    this.setState({
      vendor
    });
  }
  itemChanged(item) {
    this.setState({
      item
    });
  }
  availabilityChanged(availability) {
    this.setState({
      availability
    });
  }
  onSubmit(event) {
    event.preventDefault();
    const { vendor, item, availability } = this.state;
    const newVendor = { vendor, item, availability };
    const url = "https://coeus-system-inc.herokuapp.com/inventory";
    const options = {
      method: "POST",
      body: JSON.stringify(newVendor),
      header: {
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again.");
        }
        return res.json();
      })

      .then(data => {
        this.setState({
          vendor: " ",
          item: " ",
          availability: "Yes"
        });
        this.props.onSubmit(newVendor);
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
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
            value={this.state.vendor}
            onChange={e => this.vendorChanged(e.target.value)}
          ></input>

          <label className="item">Enter Part ID:</label>
          <input
            type="text"
            className="PostID"
            placeholder="GT-413-10"
            required
            value={this.state.item}
            onChange={e => this.itemChanged(e.target.value)}
          ></input>

          <label className="item">QTY Available:</label>
          <input
            type="string"
            className="PostQtyAvail"
            placeholder="Yes or No"
            required
            value={this.state.availability}
            onChange={e => this.availabilityChanged(e.target.value)}
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
