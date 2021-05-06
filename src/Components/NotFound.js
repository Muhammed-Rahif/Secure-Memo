import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "whitesmoke",
    flexDirection: "column",
    minHeight: "100vh",
  },
}));

function NotFound(props) {
  var classes = useStyles();
  var history = useHistory();
  return (
    <div className={classes.wrapper}>
      <Typography variant="h1" component="h2" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        <b>Ooops..!</b>
      </Typography>
      <Typography variant="p" gutterBottom>
        THAT PAGE DOESN'T EXIST OR IS UNAVAILABLE.
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            history.push("/");
          }}
        >
          Take Me Home
        </Button>
        <Button
          style={{ marginLeft: "2rem" }}
          variant="outlined"
          onClick={() => {
            window.location.href = "https://github.com/Muhammed-Rahif";
          }}
        >
          Contact Developer
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
