import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import LockIcon from "@material-ui/icons/Lock";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import InfoIcon from "@material-ui/icons/Info";
import { useHistory } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
const clientStorageKey = "SecureMemoStorage";
import $ from "jquery";
var store = require("store");

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  profileSection: {
    width: "100%",
    height: "10rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 !important",
  },
  bg: {
    background: "#3f51b5",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    color: "white",
  },
});

const profileIconStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function TemporaryDrawer(props) {
  const anchor = props.anchor;
  const [userData, setUserData] = React.useState();
  const classes = useStyles();
  const profileIconClasses = profileIconStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const history = useHistory();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const getUserData = () => {
    $.ajax({
      url: "/get-user-data",
      method: "post",
      data: {
        userId: store.get(clientStorageKey).userId,
      },
      success: (userData) => {
        setUserData(userData);
      },
    });
  };

  React.useEffect(() => {
    setUserData(getUserData());
  }, []);

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.profileSection}>
        <div className={classes.bg}>
          <Avatar
            className={[profileIconClasses.orange, profileIconClasses.large]}
          >
            {userData
              ? userData.firstName.charAt(0).toUpperCase() +
                userData.lastName.charAt(0)
              : null}
          </Avatar>
          <p>
            {userData ? userData.firstName + " " + userData.lastName : null}
          </p>
        </div>
      </List>
      <Divider />
      <List>
        <ListItem
          onClick={() => {
            history.push("/all-memos");
          }}
          button
          key="All Memos"
        >
          <ListItemIcon>
            <AllInboxIcon />
          </ListItemIcon>
          <ListItemText primary="All Memos" />
        </ListItem>
        <ListItem disabled="true" button key="Hidden Memos">
          <ListItemIcon>
            <VisibilityOffIcon />
          </ListItemIcon>
          <Badge
            badgeContent={"Coming soon"}
            color="primary"
            variant="standard"
          >
            <ListItemText primary="Hidden Memos" />
          </Badge>
        </ListItem>
        <ListItem disabled="true" button key="Secure Memos">
          <ListItemIcon>
            <LockIcon />
          </ListItemIcon>
          <Badge
            badgeContent={"Coming soon"}
            color="primary"
            variant="standard"
          >
            <ListItemText primary="Secure Memos" />
          </Badge>
        </ListItem>
        <Divider />
        <ListItem
          onClick={() => {
            history.push("/about-us");
          }}
          button
          key="Secure Memos"
        >
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About Us" />
        </ListItem>
      </List>
    </div>
  );
  useEffect(() => {
    if (props.active) {
      document.getElementById("openDrawer").click();
    }
  }, []);
  return (
    <div>
      {
        <React.Fragment key={anchor}>
          <Button
            style={{ display: "none" }}
            hidden
            id="openDrawer"
            onClick={toggleDrawer(anchor, true)}
          >
            {anchor}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      }
    </div>
  );
}
