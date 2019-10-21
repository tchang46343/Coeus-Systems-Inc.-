import React from "react";
import "./MarketingServices.css";

export default class AdvertisingServices extends React.Component {
  render() {
    return (
      <div>
        <header className="banner">
          <h1>Coeus System Inc.</h1>
          <h2>
            Intuitive, Collobarative, Inventory Management Software for Any
            Business.
          </h2>
          <p>
            Coeus provides a scalble and intuitive inventory management
            software. We priorize our customer demands and build tools to help
            grow and manage their business.
          </p>
        </header>
        <section className="ServiceHook">
          <header>
            <h3> Hassle Free Inventory Management!</h3>
          </header>
          <p>
            Working with our customers we focus on specific category needs such
            as order management, End-to-end tracking, warehouse managment, and
            accounting.
          </p>
          <p>
            Learn more about how our services by contacting our Sales Team:
            <button> Request More Info </button>
          </p>
        </section>
        <section className="clients">
          <header>
            <h4>Some of the world’s leading companies use Coeus System Inc.</h4>
            <ul>
              <li> Acebook</li>
              <li> ittube</li>
              <li> groundbnb</li>
              <li> Dooogle</li>
              <li> letFlix</li>
              <li> grapple</li>
              <li>Ross Dress for Less</li>
            </ul>
          </header>
        </section>
      </div>
    );
  }
}
