import React, { createContext, Component } from "react";

export const VendorContext = createContext();

class VendorContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendors: [],
      filter: {
        vendor: "",
        item_Name: ""
      }
    };
  }

  componentDidMount() {
    fetch("https://coeus-system-inc.herokuapp.com/inventory", {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(results => {
        console.log(results);
        this.setState({
          vendors: results
        });
      });
  }

  updateFilter(vendor, item_Name) {
    this.setState({
      filter: { vendor, item_Name }
    });
  }
  render() {
    return (
      <VendorContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </VendorContext.Provider>
    );
  }
}

export default VendorContextProvider;
