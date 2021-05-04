import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import TemporaryDrawer from "./TemporaryDrawer";
import { Menu, MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import TextField from "@material-ui/core/TextField";
import $ from "jquery";
const clientStorageKey = "SecureMemoStorage";
import store from "store";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    alignItems: "center",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    textAlign: "center",
  },
  headerDiv: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  bg: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  bodyDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem",
    flexDirection: "column",
  },
  textFields: {
    margin: ".73rem",
  },
}));

export default function ProminentAppBar(props) {
  const classes = useStyles();
  const [drawer, setDrawer] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [userData, setUserData] = React.useState();
  const history = useHistory();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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

  return (
    <div className={classes.root}>
      <AppBar className={classes.imgBg} position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => {
              drawer ? setDrawer(false) : setDrawer(true);
              document.getElementById("openDrawer").click();
            }}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.headerDiv}>
            <Typography className={classes.title} variant="h5" noWrap>
              My Profile
            </Typography>
          </div>
          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton
            aria-label="display more actions"
            edge="end"
            color="inherit"
            onClick={handleMenuClick}
          >
            <MoreIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem
              onClick={() => {
                handleMenuClose();
                history.push("/");
              }}
            >
              Home
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuClose();
                history.push("/my-account");
              }}
            >
              My account
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuClose();
                props.logoutUser();
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <div className={classes.bodyDiv}>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          value={userData ? userData.firstName : ""}
          fullWidth
          className={classes.textFields}
          focused="true"
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          value={userData ? userData.lastName : ""}
          fullWidth
          className={classes.textFields}
          focused="true"
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value="example@email.in"
          fullWidth
          className={classes.textFields}
          focused="true"
          type="password"
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value="12345678"
          fullWidth
          type="password"
          className={classes.textFields}
          focused="true"
        />
      </div>
      <TemporaryDrawer anchor="left" active={drawer} />
    </div>
  );
}
