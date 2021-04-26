import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

import $ from "jquery";

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
    this.state = {
      userData: {},
      memo: {},
    };
  }

  signInUser = (userData) => {
    alert("editUserMemo");
  };

  signUpUser = (userData) => {
    alert("editUserMemo");
  };

  createUserMemo = (userId, memoData) => {
    alert("createUserMemo");
  };

  updateUserMemo = (userId, memoId, memoData) => {
    alert("updateUserMemo");
  };

  getUserMemo = (userId, memoId) => {
    alert("editUserMemo");
  };

  dltUserMemo = (userId, memoId) => {
    alert("dltUserMemo");
  };

  editUserMemo = (userId, memoId) => {
    alert("editUserMemo");
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn}>
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
