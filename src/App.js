import React from "react";
import { Route, Switch } from "react-router-dom";
import CoeusHomePage from "./Components/HomePage/HomePage";
import Services from "./Components/HomePage/MarketingService";
import UserPage from "./Components/HomePage/UserPages/UserHomeScreen/HomeScreen";
import NotFound from "./Components/HomePage/NotFoundPage";
import GetData from "./Components/HomePage/UserPages/UserChanges/Get";
import PostData from "./Components/HomePage/UserPages/UserChanges/Post";
import DeleteData from "./Components/HomePage/UserPages/UserChanges/Delete";
import UpdateData from "./Components/HomePage/UserPages/UserChanges/Update";
import Navbar from "./Components/HomePage/Navbar";
import Context from "./context";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vendors: [],
      filter: ""
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/inventory")
      .then(response => response.json())
      .then(json => {
        this.setState({
          vendors: json
        });
      });
  }

  //add eventhandler to take in params from get.js and modify state filter

  filterData = vendors => {
    let filteredData = this.state.vendors;
    filteredData = filteredData.filter(vendors => {
      let dataReturned =
        vendors.vendor +
        vendors.item_name +
        vendors.description +
        vendors.price;
      return dataReturned.indexOf(vendors.toLowerCase());
    });
  };

  render() {
    const { vendors, filter } = this.state;

    //vendor are going to be filter vendor
    //pass in filter
    //pass in eventhandler

    //create context file, with context and use at the end module.export context.
    //eventhander
    return (
      // <Context.Provider value={value}>
      <div className="landingLayout">
        <Navbar />
        <Switch>
          <Route exact path="/" component={CoeusHomePage} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/userpage" component={UserPage} />
          <Route exact path="/getdata" component={GetData} />
          <Route exact path="/postdata" component={PostData} />
          <Route exact path="/deletedata" component={DeleteData} />
          <Route exact path="/updatedata" component={UpdateData} />
          <Route component={NotFound} />
        </Switch>
      </div>
      // </Context.Provider>
    );
  }
}
