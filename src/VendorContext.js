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

  updateItems = id => {
    const updatedItem = this.state.vendors.filter(vendor => vendor.id !== id);
    this.setState({
      vendors: updatedItem
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
      updateFilter: this.updateFilter,
      updateItems: this.updatedItems
    };
    return (
      <VendorContext.Provider value={value}>
        {this.props.children}
      </VendorContext.Provider>
    );
  }
}

export default VendorContextProvider;
