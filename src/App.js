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
import MockData from "./Components/mockdata";
import Context from "./context";

export default class HomePage extends React.Component {
  state = {
    vendors: MockData
  };
  render() {
    const value = { vendors: this.state.vendors };
    return (
      <Context.Provider value={value}>
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
      </Context.Provider>
    );
  }
}
