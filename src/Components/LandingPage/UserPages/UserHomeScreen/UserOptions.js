import React from "react";
import "./UserOptions.css";
import { Link } from "react-router-dom";
export default class UserOptions extends React.Component {
  render() {
    return (
      <div className="UserOptions">
        <button>
          <Link to="/getdata" className="UserLinks">
            GET Inventory Data
          </Link>
        </button>
        <button>
          <Link to="/postdata" className="UserLinks">
            POST Inventory Data
          </Link>
        </button>

        <button>
          <Link to="/deletedata" className="UserLinks">
            DELETE Inventory Data
          </Link>
        </button>
        <button>
          <Link to="/updatedata" className="UserLinks">
            UPDATE Inventory Data
          </Link>
        </button>
      </div>
    );
  }
}
