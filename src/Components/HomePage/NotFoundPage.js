import React, { Component } from "react";
import "./NotFoundPage.css";

export default class NotFoundPage extends Component {
  render() {
    return (
      <div className="NotFoundPage">
        <h2>Page Not Found</h2>
        <p>This is not a valid web page. Please check the URL.</p>
      </div>
    );
  }
}
