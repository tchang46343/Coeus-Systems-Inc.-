import React from "react";
import "./UserOptions.css";
import { Link } from "react-router-dom";
export default class UserOptions extends React.Component {
  render() {
    return (
      <div className="UserOptions">
        <link
          href="https://fonts.googleapis.com/css?family=Patua+One&display=swap"
          rel="stylesheet"
        ></link>
        <Link to="/getdata" className="UserLink">
          Retrieve Part
        </Link>
        <Link to="/postdata" className="UserLink">
          Add Part
        </Link>
        <Link to="/deletedata" className="UserLink">
          Delete Part
        </Link>
        <footer className="Legal">
          Created by Terrance Chang Copyright © 2020 All Rights Reserved
        </footer>
      </div>
    );
  }
}
