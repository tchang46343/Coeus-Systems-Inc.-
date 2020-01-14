import React from "react";
import "./Delete.css";

export default class DeleteData extends React.Component {
  render() {
    return (
      <div className="DeleteContent">
        <form className="DeleteData">
          <section className="vendorSection1">
            <label className="VendorDelete">Vendor:</label>
            <input
              type="text"
              className="VendorDeleteName"
              placeholder="Madix"
              required
            ></input>
          </section>
          <section className="vendorSection2">
            <label className="DeleteItem">Enter Part ID:</label>
            <input
              type="text"
              className="DeletePartID"
              placeholder="GT-413-10"
              required
            ></input>
          </section>

          <button className="DeleteButton">Delete</button>
        </form>

        <footer>
          Created by Terrance Chang Copyright © 2019 All Rights Reserved
        </footer>
      </div>
    );
  }
}
