import React, { Component, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";

import $ from "jquery";
const CryptoJS = require("crypto-js");
var store = require("store");

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
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import NotFound from "./Components/NotFound";
const clientStorageKey = "SecureMemoStorage";
const encKey = "secure memo key";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: undefined,
      userLoggedIn: false,
      myMemos: [],
      snackbar: {
        openSnackbar: false,
        msg: "",
        type: "success",
        position: { vertical: "bottom", horizontal: "left" },
      },
      backdropOpen: false,
    };
  }

  backdropClose = () => {
    this.setState({ backdropOpen: false });
  };
  backdropToggle = () => {
    this.setState({ backdropOpen: !this.state.backdropOpen });
  };

  encryptObj = (obj) => {
    let encObj = {};
    Object.keys(obj).map((itm) => {
      encObj[itm] = CryptoJS.AES.encrypt(obj[itm], encKey).toString();
    });
    return encObj;
  };

  encUnSaltStr = (str) => {
    return CryptoJS.AES.encrypt(str, CryptoJS.enc.Utf8.parse(encKey), {
      iv: { words: [0, 0, 0, 0], sigBytes: 16 },
    }).toString();
  };

  decryptToOrgObj = (obj) => {
    let decObj = {};
    Object.keys(obj).map((itm) => {
      decObj[itm] = CryptoJS.AES.decrypt(obj[itm], encKey).toString(
        CryptoJS.enc.Utf8
      );
      decObj[itm] = decObj[itm].replace(/['"]+/g, "");
    });
    return decObj;
  };

  signUpUser = (userData) => {
    this.backdropToggle();
    var userEmail = userData.email;
    delete userData.email;
    userData = this.encryptObj(userData);
    userData.email = this.encUnSaltStr(userEmail);
    $.ajax({
      method: "post",
      url: "./signup-user",
      data: userData,
      success: (response) => {
        if (response.status) {
          this.backdropToggle();
          store.set(clientStorageKey, response.userData);
          this.setState({ userData: response.userData });
          this.setState({ userLoggedIn: true });
          this.verifyUserLogin();
          <Redirect push to="./" />;
        } else {
          this.backdropToggle();
          this.setState({
            snackbar: {
              openSnackbar: true,
              msg: `Can't sign up : ${response.errorMsg}`,
              type: "error",
              position: {
                vertical: "top",
                horizontal: "center",
              },
            },
          });
        }
      },
    });
  };

  signInUser = (userData) => {
    this.backdropToggle();
    var userEmail = userData.email;
    delete userData.email;
    userData = this.encryptObj(userData);
    userData.email = this.encUnSaltStr(userEmail);
    $.ajax({
      method: "post",
      url: "./signin-user",
      data: userData,
      success: (response) => {
        if (response.status) {
          this.backdropToggle();
          store.set(clientStorageKey, response.userData);
          this.setState({ userData: response.userData });
          this.setState({ userLoggedIn: true });
          this.verifyUserLogin();
          <Redirect push to="./" />;
        } else {
          this.backdropToggle();
          this.setState({
            snackbar: {
              openSnackbar: true,
              msg: `Can't sign in : ${response.errorMsg}`,
              type: "error",
              position: {
                vertical: "top",
                horizontal: "center",
              },
            },
          });
        }
      },
    });
  };

  logoutUser = () => {
    this.setState({ userLoggedIn: false, userData: undefined });
    store.remove(clientStorageKey);
    window.location.reload();
  };

  getLoggedInUserData = () => {
    let userData = store.get(clientStorageKey);
    return userData;
  };

  createUserMemo = (memoData) => {
    this.backdropToggle();
    memoData = this.encryptObj(memoData);
    var userData = this.getLoggedInUserData();
    Object.assign(userData, memoData);
    $.ajax({
      method: "post",
      url: "./create-user-memo",
      data: userData,
      success: (response) => {
        this.backdropToggle();
        if (response.status) {
          this.setState({
            snackbar: {
              openSnackbar: true,
              msg: response.firstMemo
                ? "Successfully saved your first memo.!"
                : "Successfully saved your memo.!",
              type: "success",
              position: {
                vertical: "bottom",
                horizontal: "left",
              },
            },
          });
        } else {
          this.setState({
            snackbar: {
              openSnackbar: true,
              msg: "Oops..! Something went wrong, Try again.",
              type: "error",
              position: {
                vertical: "bottom",
                horizontal: "left",
              },
            },
          });
        }
      },
    });
  };

  updateUserMemo = (memoData) => {
    this.backdropToggle();
    let memoId = memoData.memoId;
    delete memoData.memoId;
    memoData = this.encryptObj(memoData);
    memoData.memoId = memoId;
    var userData = this.getLoggedInUserData();
    Object.assign(userData, memoData);
    $.ajax({
      method: "post",
      url: "/update-user-memo",
      data: userData,
      success: (response) => {
        this.backdropToggle();
        if (response.status) {
          this.setState({
            snackbar: {
              openSnackbar: true,
              msg: "Successfully updated your memo.!",
              type: "success",
              position: {
                vertical: "bottom",
                horizontal: "left",
              },
            },
          });
        } else {
          this.setState({
            snackbar: {
              openSnackbar: true,
              msg: "Oops..! Something went wrong, Try again.",
              type: "error",
              position: {
                vertical: "bottom",
                horizontal: "left",
              },
            },
          });
        }
      },
    });
  };

  getUserMemo = (userId, memoId) => {
    alert("editUserMemo");
  };

  dltUserMemo = (memoData) => {
    this.backdropToggle();
    var userData = this.getLoggedInUserData();
    Object.assign(userData, memoData);
    $.ajax({
      method: "post",
      url: "/delete-user-memo",
      data: userData,
      success: (response) => {
        this.backdropToggle();
        if (response.status) {
          this.setState({
            snackbar: {
              openSnackbar: true,
              msg: "Successfully deleted.!",
              type: "success",
              position: {
                vertical: "bottom",
                horizontal: "left",
              },
            },
          });
          <Redirect push to="/" />;
        } else {
          this.setState({
            snackbar: {
              openSnackbar: true,
              msg: "Oops..! Something went wrong, Try again.",
              type: "error",
              position: {
                vertical: "bottom",
                horizontal: "left",
              },
            },
          });
        }
      },
    });
  };

  SnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ snackbar: { openSnackbar: false } });
  };

  verifyUserLogin = () => {
    if (store.get(clientStorageKey)) {
      console.log("here");
      this.setState({
        userData: store.get(clientStorageKey),
        userLoggedIn: true,
      });
    } else {
      store.set(clientStorageKey, this.state.userData);
    }
  };

  componentWillMount = () => {
    console.log(store.get(clientStorageKey));
    this.verifyUserLogin();
  };

  render() {
    console.log(this.state.userLoggedIn);
    console.log(this.state.userData);
    console.log(store.get(clientStorageKey));
    return (
      <Router>
        {/* Backdrop */}
        <Backdrop style={{ zIndex: 999999 }} open={this.state.backdropOpen}>
          <CircularProgress color="inherit" />
        </Backdrop>
        {/* Alert a snackbar */}
        {this.state.snackbar.openSnackbar ? (
          <Snackbar
            open={this.state.snackbar.openSnackbar}
            autoHideDuration={6000}
            style={{ position: "absolute" }}
            onClose={this.SnackbarClose}
            anchorOrigin={this.state.snackbar.position}
          >
            <Alert
              onClose={this.SnackbarClose}
              severity={this.state.snackbar.type}
            >
              {this.state.snackbar.msg}
            </Alert>
          </Snackbar>
        ) : null}
        <Switch>
          <Route exact path="/" component={SignIn}>
            {this.state.userLoggedIn ? (
              <Redirect push to="/all-memos" />
            ) : (
              <Redirect push to="/signup" />
            )}
          </Route>
          <Route path="/signin">
            {this.state.userLoggedIn ? (
              <Redirect push to="/" />
            ) : (
              <SignIn signInUser={this.signInUser} />
            )}
          </Route>
          <Route path="/signup">
            {this.state.userLoggedIn ? (
              <Redirect push to="/" />
            ) : (
              <SignUp signUpUser={this.signUpUser} />
            )}
          </Route>
          <Route path="/all-memos">
            {this.state.userLoggedIn ? (
              <HomeViewMemos
                decryptToOrgObj={this.decryptToOrgObj}
                getLoggedInUserData={this.getLoggedInUserData}
                createUserMemo={this.createUserMemo}
                logoutUser={this.logoutUser}
              />
            ) : (
              <Redirect push to="/signup" />
            )}
          </Route>
          <Route path="/my-profile">
            {this.state.userLoggedIn ? (
              <MyProfile logoutUser={this.logoutUser} />
            ) : (
              <Redirect push to="/signup" />
            )}
          </Route>
          <Route path="/view-memo/:id">
            {this.state.userLoggedIn ? (
              <ViewMemo
                dltUserMemo={this.dltUserMemo}
                getLoggedInUserData={this.getLoggedInUserData}
                decryptToOrgObj={this.decryptToOrgObj}
                updateUserMemo={this.updateUserMemo}
              />
            ) : (
              <Redirect push to="/" />
            )}
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          {/* 404 page */}
          <Route path="/404" component={NotFound} />
          <Route path="/" component={NotFound} />
          <Route path="/*" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
