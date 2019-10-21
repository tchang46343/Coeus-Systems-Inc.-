import React from "react";
import "./UserOptions.css";
export default class UserOptions extends React.Component {
  render() {
    return (
      <div className="UserOptions">
        <button> GET Inventory Data</button>
        <button> POST Inventory Data</button>
        <button> DELETE Inventory Data</button>
        <button> UPDATE Inventory Data</button>
      </div>
    );
  }
}
