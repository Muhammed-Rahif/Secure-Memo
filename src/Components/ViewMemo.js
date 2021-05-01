import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import TemporaryDrawer from "./TemporaryDrawer";
import EditMemo from "./EditMemo";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Tooltip from "@material-ui/core/Tooltip";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ReactMarkdown from "react-markdown";
import HomeIcon from "@material-ui/icons/Home";
import DeleteIcon from "@material-ui/icons/Delete";
import $ from "jquery";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
    minHeight: "80vh",
    padding: "1.5rem",
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function BottomAppBar(props) {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);
  const [createMemo, setCreateMemo] = useState(false);
  const [snackBar, setSnackBar] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [memoData, setMemoData] = React.useState("");

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSnackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackBar(false);
  };

  const showSnackBar = (message, severity) => {
    return (
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={snackBar}
        autoHideDuration={6000}
        onClose={handleSnackBarClose}
      >
        <Alert onClose={handleSnackBarClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    );
  };

  useEffect(() => {
    var memoId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    console.log(memoId);
    console.log(window.location.href);
    $.ajax({
      url: "/get-memo-data",
      data: {
        userId: props.getLoggedInUserData().userId,
        memoId: memoId,
        memoType:"allMemos"
      },
      method: "post",
      success: (memoData) => {
        setMemoData(props.decryptToOrgObj(memoData))
        console.log(memoData);
      },
    });
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5" gutterBottom>
          {memoData.memoTitle}
        </Typography>
        <List className={classes.list}>
          <ReactMarkdown children={memoData.memoBody} />
        </List>
      </Paper>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton
            onClick={() => {
              drawer ? setDrawer(false) : setDrawer(true);
              document.getElementById("openDrawer").click();
            }}
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Tooltip title="Edit this Memo" arrow>
            <Fab
              id="addBtn"
              color="secondary"
              aria-label="add"
              className={classes.fabButton}
              onClick={() => {
                createMemo
                  ? setTimeout(() => {
                      setCreateMemo(false);
                    }, 500)
                  : setCreateMemo(true);
              }}
            >
              <EditIcon />
            </Fab>
          </Tooltip>
          <div className={classes.grow} />
          <Tooltip title="Search" arrow>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Options" arrow>
            <IconButton
              aria-controls="simple-menu"
              edge="end"
              color="inherit"
              aria-aria-haspopup="true"
              onClick={handleMenuClick}
            >
              <MoreIcon />
            </IconButton>
          </Tooltip>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem
              id="editBtn"
              onClick={() => {
                handleMenuClose();
                createMemo
                  ? setTimeout(() => {
                      setCreateMemo(false);
                    }, 500)
                  : setCreateMemo(true);
              }}
            >
              <EditIcon fontSize="small" />
              Edit
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <DeleteIcon fontSize="small" />
              Delete
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <HomeIcon fontSize="small" />
              Home
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <TemporaryDrawer anchor="left" active={drawer} />
      {snackBar
        ? showSnackBar("Memo updated successsfully..!", "success")
        : null}
      {createMemo ? <EditMemo showSnackBar={setSnackBar} /> : null}
    </React.Fragment>
  );
}
