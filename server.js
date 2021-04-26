const express = require("express");
const app = express();
const path = require("path");
const db = require("./config/mongodb-connnection");
const userFunctions = require("./functions/userFunctions");
const bodyParser = require("body-parser");
const port = process.env.PORT || 7000; // Heroku will need the PORT environment variable

// Static Files
app.use(express.static(path.join(__dirname, "build")));

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

app.post("/signup-user", (req, res) => {
  let userData = req.body;
  console.log(userData);
  userFunctions.decryptToOrgObj(userData).then((userData)=>{
    userFunctions.signUpUser(userData).then(() => {
      console.log(userData);
      res.json({ status: true });
    });
  })
});

// Redirect to react app

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

// Server listening
app.listen(port, () =>
  console.log(`App is live on port http://localhost:${port} !`)
);
