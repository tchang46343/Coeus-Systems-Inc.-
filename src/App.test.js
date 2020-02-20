import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./Components/HomePage/HomePage";
import MarketingService from "./Components/HomePage/MarketingService";
import Navbar from "./Components/HomePage/Navbar";
import NewUser from "./Components/HomePage/NewUser";
import HomeScreen from "./Components/HomePage/UserPages/UserHomeScreen/HomeScreen";

import DELETE from "./Components/HomePage/UserPages/UserChanges/Delete";
import POST from "./Components/HomePage/UserPages/UserChanges/Post";
import UPDATE from "./Components/HomePage/UserPages/UserChanges/Update";

it("Homepage renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});

it("Homepage renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Homepage />, div);

  ReactDOM.unmountComponentAtNode(div);
});

it("MarketingService renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<MarketingService />, div);

  ReactDOM.unmountComponentAtNode(div);
});

it("Navbar renders without crashing", () => {
  const header = document.createElement("header");

  ReactDOM.render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
    header
  );

  ReactDOM.unmountComponentAtNode(header);
});

it("New user renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<NewUser />, div);

  ReactDOM.unmountComponentAtNode(div);
});

it("Home screen renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <HomeScreen />
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});

it("POST data renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<POST />, div);

  ReactDOM.unmountComponentAtNode(div);
});
it("DELETE dta renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<DELETE />, div);

  ReactDOM.unmountComponentAtNode(div);
});
it("UPDATE data renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<UPDATE />, div);

  ReactDOM.unmountComponentAtNode(div);
});
