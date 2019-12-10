import React from "react";
import "./Get.css";
import Context from "../../../../context";

export default class GetData extends React.Component {
  static contextType = Context;
  // const { search = "" } = req.query;
  // // filter the results by the search query

  // const results = consumerData.filter(consumer =>
  //   consumer.Vendor.toLowerCase().includes(search.toLowerCase())
  // );

  // if (results === []) {
  //   res
  //     .status(404)
  //     .json({ error: "Vendor Invalid, please enter a valid vendor" });
  // }

  // res.json(results);
  render() {
    console.log(this.context.vendors);
    return (
      <div className="GetContent">
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
