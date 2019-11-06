import React from "react";
import "./UserOptions.css";
import { Link } from "react-router-dom";
export default class UserOptions extends React.Component {
  render() {
    return (
      <div className="UserOptions">
        <Link to="/getdata" className="UserLink">
          GET Inventory Data
        </Link>

        <Link to="/postdata" className="UserLink">
          POST Inventory Data
        </Link>

        <Link to="/deletedata" className="UserLink">
          DELETE Inventory Data
        </Link>

        <Link to="/updatedata" className="UserLink">
          UPDATE Inventory Data
        </Link>
      </div>
    );
  }
}
