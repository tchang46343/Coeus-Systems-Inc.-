import React from "react";
import "./UserOptions.css";
import { Link } from "react-router-dom";
export default class UserOptions extends React.Component {
  render() {
    return (
      <div className="UserOptions">
        <Link to="/getdata" className="UserLink">
          Retrieve Items
        </Link>

        <Link to="/postdata" className="UserLink">
          Add Item
        </Link>

        <Link to="/deletedata" className="UserLink">
          Delete Item
        </Link>

        <Link to="/updatedata" className="UserLink">
          Update Item
        </Link>
        <footer className="Legal">
          Created by Terrance Chang Copyright © 2019 All Rights Reserved
        </footer>
      </div>
    );
  }
}
