import React from "react";
import "./Post.css";
import { API_BASE_URL } from "../../../../config";

export default class PostData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vendor: "",
      item_name: "",
      description: "",
      price: "",
      availbility: ""
    };
  }

  vendorChanged(vendor) {
    this.setState({
      vendor
    });
  }
  itemChanged(item_name) {
    this.setState({
      item_name
    });
  }
  descriptionChanged(description) {
    this.setState({
      description
    });
  }
  priceChanged(price) {
    this.setState({
      price
    });
  }
  availabilityChanged(availbility) {
    this.setState({
      availbility
    });
  }

  handleClick = event => {
    event.preventDefault();
    const { vendor, item_name, description, price, availbility } = this.state;
    const newVendor = { vendor, item_name, description, price, availbility };

    const options = {
      method: "POST",
      body: JSON.stringify(newVendor),
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(`${API_BASE_URL}/inventory`, options)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again.");
        }
        return res.json();
      })

      .then(data => {
        this.setState({
          vendor: " ",
          item_name: " ",
          description: " ",
          price: " ",
          availability: "Yes"
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
    alert("Your new part has been added to the database!");
  };
  render() {
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
        <header className="postTitleName"> Add New Part </header>
        <form className="addNewPart" onSubmit={event => this.onSubmit(event)}>
          <label className="vendorTitle">Vendor:</label>
          <input
            type="text"
            className="PostName"
            placeholder="Madix"
            required
            value={this.state.vendor}
            onChange={e => this.vendorChanged(e.target.value)}
          ></input>

          <label className="itemID">Enter Part ID:</label>
          <input
            type="text"
            className="PostID"
            placeholder="GT-413-10"
            required
            value={this.state.item_name}
            onChange={e => this.itemChanged(e.target.value)}
          ></input>

          <label className="descriptionTitle">Enter Part Description:</label>
          <input
            type="text"
            className="PostDes"
            placeholder="Shoe Shelf"
            required
            value={this.state.description}
            onChange={e => this.descriptionChanged(e.target.value)}
          ></input>

          <label className="PriceTitle">Enter Price:</label>
          <input
            type="number"
            step="0.01"
            className="PostPrice"
            placeholder="$12.50"
            required
            value={this.state.price}
            onChange={e => this.priceChanged(e.target.value)}
          ></input>

          <label className="itemAvail">Available(Yes or No):</label>
          <input
            type="string"
            className="PostQtyAvail"
            placeholder="Yes or No"
            required
            value={this.state.availbility}
            onChange={e => this.availabilityChanged(e.target.value)}
          ></input>
          <button className="PostButton" onClick={this.handleClick}>
            Add Part
          </button>
        </form>
        <footer className="content-info">
          Created by Terrance Chang Copyright © 2020 All Rights Reserved
        </footer>
      </div>
    );
  }
}
