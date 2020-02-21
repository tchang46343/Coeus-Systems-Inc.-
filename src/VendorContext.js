import React, { createContext, Component } from "react";
import { API_BASE_URL } from "./config";

export const VendorContext = createContext();

class VendorContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendors: [],
      filter: {
        vendor: "",
        item_Name: "",
        description: "",
        price: "",
        availbility: ""
      }
    };
  }
  //fetch(`${API_BASE_URL}/inventory`)
  componentDidMount() {
    fetch(`${API_BASE_URL}/inventory`)
      .then(response => response.json())
      .then(results => {
        this.setState({
          vendors: results
        });
      });
  }

  updateFilter = (vendor, item_Name, description, price, availbility) => {
    this.setState({
      filter: { vendor, item_Name, description, price, availbility }
    });
  };
  render() {
    const {
      vendors,
      item_Name,
      description,
      price,
      availbility,
      filter
    } = this.state;
    const value = {
      vendors,
      item_Name,
      description,
      price,
      availbility,
      filter,
      updateFilter: this.updateFilter
    };
    return (
      <VendorContext.Provider value={value}>
        {this.props.children}
      </VendorContext.Provider>
    );
  }
}

export default VendorContextProvider;
