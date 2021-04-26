const express = require("express");
const path = require("path");
const db = require("./config/mongodb-connnection");
const app = express();
const port = process.env.PORT || 7000; // Heroku will need the PORT environment variable

// MongoDB connection
db.connect((err)=>{
  if (err) {
    console.log("Database connection Error :"+err);
  }else{
    console.log("Database connected to port 27017");
  }
})



app.use(express.static(path.join(__dirname, "build")));

// Server routers

// Redirect to react app
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(port, () => console.log(`App is live on port ${port}!`));
