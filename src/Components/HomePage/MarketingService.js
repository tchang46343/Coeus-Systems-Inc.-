import React from "react";
import "./MarketingServices.css";

export default class AdvertisingServices extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    alert(
      "Your request has been recieved! We will get back to you in 3 business."
    );
  }
  render() {
    return (
      <div>
        <header className="banner">
          <h1>Coeus System Inc.</h1>
          <h2>Intuitive, inventory management software for any business.</h2>
          <p>
            Coeus provides a scalble and intuitive inventory management
            software.We priorize our customer demands, and build tools to help
            grow their business.
          </p>
        </header>
        <form className="ServiceHook" onSubmit={event => this.onSubmit(event)}>
          <header>
            <h3 className="grabberPitch"> Hassle Free Inventory Management!</h3>
          </header>
          <p>
            Working with our customers, we focus on specific category needs such
            as order management, end-to-end tracking, and warehouse managment.
          </p>
          <p className="submitRequest">
            Learn more about how our services by contacting our Sales Team:
            <button> Request More Info </button>
          </p>
        </form>
        <section className="clients">
          <header>
            <h4>
              Coeus System Inc is proud to work with companies such as Myspace,
              YouTube, NetFlix, Apple, and Ross Dress for Less.
            </h4>
          </header>
        </section>
      </div>
    );
  }
}
