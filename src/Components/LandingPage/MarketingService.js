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
            <h4>
              Coeus System Inc has partnered with companies such as Acebook,
              ittube, letFlix, grapple, and Ross Dress for Less.
            </h4>
          </header>
        </section>
      </div>
    );
  }
}
