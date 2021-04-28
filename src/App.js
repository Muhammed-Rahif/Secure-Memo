import React, { Component, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";

import $ from "jquery";
const CryptoJS = require("crypto-js");

import SignIn from "./Components/SignIn";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./Components/SignUp";
import HomeViewMemos from "./Components/HomeViewMemos";
import MyProfile from "./Components/MyProfile";
import AboutUs from "./Components/AboutUs";
import ViewMemo from "./Components/ViewMemo";
import EditMemo from "./Components/EditMemo";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Redirect } from "react-router";
const clientStorageKey = "SecureMemoStorage";
const encKey = "secure memo key";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
      userLoggedIn: false,
      myMemos: [],
      snackbar: {
        openSnackbar: false,
        msg: "",
        type: "success",
        position: { vertical: "left", horizontal: "bottom" },
      },
    };
  }

  encryptObj = (obj) => {
    let encObj = {};
    Object.keys(obj).map((itm) => {
      encObj[itm] = CryptoJS.AES.encrypt(obj[itm], encKey).toString();
    });
    return encObj;
  };

  decryptToOrgObj = (obj) => {
    let decObj = {};
    Object.keys(obj).map((itm) => {
      console.log(obj[itm]);
      decObj[itm] = CryptoJS.AES.decrypt(obj[itm], encKey).toString(
        CryptoJS.enc.Utf8
      );
      decObj[itm] = decObj[itm].replace(/['"]+/g, "");
    });
    return decObj;
  };

  signUpUser = (userData) => {
    $.ajax({
      method: "post",
      url: "./signup-user",
      data: this.encryptObj(userData),
      success: (response) => {
        if (response.status) {
          this.setState({ userData: response.userData });
          this.setState({ userLoggedIn: true });
          this.verifyUserLogin();
          <Redirect push to="./" />;
        } else {
          this.setState({
            snackbar: {
              openSnackbar: true,
              msg: `Can't sign up : ${response.errorMsg}`,
              type: "error",
              position: {
                vertical: "center",
                horizontal: "top",
              },
            },
          });
        }
      },
    });
  };

  signInUser = (userData) => {
    $.ajax({
      method: "post",
      url: "./signin-user",
      data: this.encryptObj(userData),
      success: (response) => {
        if (response.status) {
          this.setState({ userData: response.userData });
          this.setState({ userLoggedIn: true });
          this.verifyUserLogin();
          <Redirect push to="./" />;
        } else {
          this.setState({
            snackbar: {
              openSnackbar: true,
              msg: `Can't sign in : ${response.errorMsg}`,
              type: "error",
              position: {
                vertical: "center",
                horizontal: "top",
              },
            },
          });
        }
      },
    });
  };

  logoutUser = () =>{
    this.setState({ userLoggedIn:false,userData:null });
    window.localStorage.setItem(clientStorageKey,"null");
    window.location.reload();
  }

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

  handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ snackbar: { openSnackbar: false } });
  };

  verifyUserLogin = () => {
    let userData = this.state.userData;
    let userLocalStorage = JSON.parse(
      window.localStorage.getItem(clientStorageKey)
    );
    console.log(userData);
    if (userLocalStorage) {
      console.log(userData);
      this.setState({
        userData: userLocalStorage,
        userLoggedIn: true,
      });
      console.log("seting state");
    } else {
      window.localStorage.setItem(clientStorageKey, JSON.stringify(userData));
    }
    console.log(this.state.userData);
  };

  componentDidMount = () => {
    this.verifyUserLogin();
  };

  render() {
    console.log(JSON.parse(window.localStorage.getItem(clientStorageKey)));
    console.log(this.state.userLoggedIn);

    return (
      <Router>
        {/* Alert a snackbar */}
        {this.state.snackbar.openSnackbar ? (
          <Snackbar
            open={this.state.snackbar.openSnackbar}
            autoHideDuration={6000}
            onClose={this.handleSnackbarClose}
            anchorOrigin={this.state.snackbar.position}
          >
            <Alert
              onClose={this.handleSnackbarClose}
              severity={this.state.snackbar.type}
            >
              {this.state.snackbar.msg}
            </Alert>
          </Snackbar>
        ) : null}
        <Switch>
          <Route exact path="/" component={SignIn}>
            {this.state.userLoggedIn ? (
              <HomeViewMemos logoutUser={this.logoutUser} />
            ) : (
              <Redirect push to="./signup" />
            )}
          </Route>
          <Route path="/signin">
            {this.state.userLoggedIn ? (
              <Redirect push to="./" />
            ) : (
              <SignIn signInUser={this.signInUser} />
            )}
          </Route>
          <Route path="/signup">
            {this.state.userLoggedIn ? (
              <Redirect push to="./" />
            ) : (
              <SignUp signUpUser={this.signUpUser} />
            )}
          </Route>
          <Route path="/my-memos">
            <HomeViewMemos logoutUser={this.logoutUser} />
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
