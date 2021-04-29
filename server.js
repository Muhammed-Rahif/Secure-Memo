const express = require("express");
const app = express();
const path = require("path");
const db = require("./config/mongodb-connnection");
const userFunctions = require("./functions/userFunctions");
const bodyParser = require("body-parser");
const session = require("express-session");
const key = "secure memo key";
const port = process.env.PORT || 7000; // Heroku will need the PORT environment variable

// Static Files
app.use(express.static(path.join(__dirname, "build")));

// Express session config
app.use(session({ secret: key, cookie: { maxAge: 1000 * 60 * 60 * 24 * 15 } })); //15 Days

// MongoDB connection
db.connect((err) => {
  if (err) {
    console.log("Database connection Error :" + err);
  } else {
    console.log("Database connected to port 27017");
  }
});

// Body parser
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Server routers
function verifyUserLogin(req, res, next) {
  if (req.session.userLoggedIn) {
    next();
  } else {
    res.redirect("./signup");
  }
}

app.post("/signup-user", (req, res) => {
  let userData = req.body;
  // req.session.user = {};
  // req.session.userLoggedIn = false;
  userFunctions.signUpUser(userData).then((response) => {
    if (response.status) {
      req.session.user.userData = response.userData;
      req.session.userLoggedIn = true;
      res.json(response);
    } else {
      res.json(response);
    }
  });
});

app.post("/signin-user", (req, res) => {
  let userData = req.body;
  // req.session.user = {};
  // req.session.userLoggedIn = false;
  userFunctions.signInUser(userData).then((response) => {
    if (response.status) {
      req.session.user.userData = response.userData;
      req.session.userLoggedIn = true;
      res.json(response);
    } else {
      res.json(response);
    }
  });
});

app.post("/create-user-memo", (req, res) => {
  let userData = req.body;
  userFunctions
});

// Redirect to react app

app.get("/", (req, res) => {
  console.log(req.session);
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.get("/signin", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.get("/signup", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.get("/*", (req, res) => {
  console.log(req.session);
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

// Server listening
app.listen(port, () =>
  console.log(`App is live on port http://localhost:${port} !`)
);
