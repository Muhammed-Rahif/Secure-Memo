import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

import SignIn from "./Components/SignIn";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./Components/SignUp";
import ViewMemos from "./Components/ViewMemos";
import TemporaryDrawer from "./Components/TemporaryDrawer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "hi",
        },
      ],
    };
  }

  createDataFile = () => {
    
  };

  componentDidMount() {
    this.createDataFile();
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
            <ViewMemos />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
