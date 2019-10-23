import React from "react";
import { Route, Switch } from "react-router-dom";
import CoeusHomePage from "./Components/LandingPage/HomePage";
import Services from "./Components/LandingPage/MarketingService";
import UserPage from "./Components/LandingPage/UserPages/UserHomeScreen/HomeScreen";
import NotFound from "./Components/LandingPage/NotFoundPage";
import GetData from "./Components/LandingPage/UserPages/UserChanges/Get";
import PostData from "./Components/LandingPage/UserPages/UserChanges/Post";
import DeleteData from "./Components/LandingPage/UserPages/UserChanges/Delete";
import UpdateData from "./Components/LandingPage/UserPages/UserChanges/Update";

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="landingLayout">
        <Switch>
          <Route exact path="/" component={CoeusHomePage} />
          <Route exact path="/services" component={Services} />
          <Route path="/userpage" component={UserPage} />
          <Route path="/getdata" component={GetData} />
          <Route path="/postdata" component={PostData} />
          <Route path="/deletedata" component={DeleteData} />
          <Route path="/updatedata" component={UpdateData} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
