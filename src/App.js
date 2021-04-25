import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

import SignIn from "./Components/SignIn";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./Components/SignUp";
import HomeViewMemos from "./Components/HomeViewMemos";
import MyProfile from "./Components/MyProfile";
import AboutUs from "./Components/AboutUs";
import ViewMemo from "./Components/ViewMemo";
import EditMemo from "./Components/EditMemo";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/my-memos">
            <HomeViewMemos />
          </Route>
          <Route path="/my-profile">
            <MyProfile />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/view-memo/:id">
            <ViewMemo />
          </Route>
          <Route path="/edit-memo/:id">
            <EditMemo />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
