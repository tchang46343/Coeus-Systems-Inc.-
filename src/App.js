import React from "react";
import { Route, Switch } from "react-router-dom";
import CoeusHomePage from "./Components/HomePage/HomePage";
import Services from "./Components/HomePage/MarketingService";
import UserPage from "./Components/HomePage/UserPages/UserHomeScreen/HomeScreen";
import NotFound from "./Components/HomePage/NotFoundPage";
import GetData from "./Components/HomePage/UserPages/UserChanges/Get";
import PostData from "./Components/HomePage/UserPages/UserChanges/Post";
import DeleteData from "./Components/HomePage/UserPages/UserChanges/Delete";

import Navbar from "./Components/HomePage/Navbar";
import VendorContextProvider from "./VendorContext";
import "./App.css";

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="landingLayout">
        <Navbar />
        <VendorContextProvider>
          <Switch>
            <Route exact path="/" component={CoeusHomePage} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/userpage" component={UserPage} />
            <Route exact path="/getdata" component={GetData} />
            <Route exact path="/postdata" component={PostData} />
            <Route exact path="/deletedata" component={DeleteData} />
            <Route component={NotFound} />
          </Switch>
        </VendorContextProvider>
      </div>
    );
  }
}
