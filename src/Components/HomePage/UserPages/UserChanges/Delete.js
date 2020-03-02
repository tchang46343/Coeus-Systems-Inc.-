import React from "react";
import "./Delete.css";
import { VendorContext } from "../../../../VendorContext";
import { API_BASE_URL } from "../../../../config";

export default class DeleteData extends React.Component {
  static contextType = VendorContext;
  constructor(props) {
    super(props);
    this.state = {
      id: [],
      item_name: ""
    };
  }

  itemChecked(id) {
    console.log(id);
    const newid = this.state.id;
    newid.push(id);
    this.setState({
      id: newid
    });
  }

  handleDelete = e => {
    const id = this.state.id;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    };
    const idfilter = id.map(id =>
      fetch(`${API_BASE_URL}/inventory/${id}`, options)
    );
    Promise.all(idfilter).then(res => {
      for (res = 0; res < res.length; res++) {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again.");
        }
        return;
      }
    });
  };

  render() {
    const itemsJSX = this.context.vendors
      ? this.context.vendors.map((item, idx) => {
          return (
            <li key={idx} className="itemDisplayed">
              <input
                type="checkbox"
                className="trash"
                onChange={e => this.itemChecked(item.id)}
              ></input>
              <p className="item-id">🗑 ID#: {item.id} </p>
              <p className="item-vendor">Vendor: {item.vendor} </p>
              <p className="item-name">Item Name: {item.item_name}</p>
              <p className="description">Description: {item.description}</p>
              <p className="price">Price: {item.price}</p>
              <p className="availbility">Availbility: {item.availbility}</p>
            </li>
          );
        })
      : "";

    const itemsJSXRender = itemsJSX;

    return (
      <div className="DeleteContent">
        <form onSubmit={this.handleDelete}>
          <header className="resultsTitle">
            {" "}
            Choose a ID # to Delete. Then click the Delete button{" "}
          </header>

          <ul className="Results">{itemsJSXRender}</ul>

          <div className="button-Container">
            <button className="DeleteButton">Delete</button>
          </div>
        </form>
      </div>
    );
  }
}
