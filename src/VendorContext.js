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
        item_Name: ""
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

  updateFilter = (vendor, item_Name) => {
    this.setState({
      filter: { vendor, item_Name }
    });
  };
  render() {
    const { vendors, filter } = this.state;
    const value = {
      vendors,
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
