import React, { createContext, Component } from "react";

export const VendorContext = createContext();

class VendorContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendors: [],
      filter: ""
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/inventory", {
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

  render() {
    return (
      <VendorContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </VendorContext.Provider>
    );
  }
}

export default VendorContextProvider;
