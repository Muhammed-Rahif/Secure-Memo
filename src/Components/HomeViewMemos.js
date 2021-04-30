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
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import TemporaryDrawer from "./TemporaryDrawer";
import CreateMemo from "./CreateMemo";
import MuiAlert from "@material-ui/lab/Alert";
import Tooltip from "@material-ui/core/Tooltip";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import $ from "jquery";

// {messages.map(({ id, primary, secondary, person }) => (
//   <React.Fragment key={id}>
//     {id === 1 && (
//       <ListSubheader className={classes.subheader}>
//         Today
//       </ListSubheader>
//     )}
//     {id === 3 && (
//       <ListSubheader className={classes.subheader}>
//         Yesterday
//       </ListSubheader>
//     )}
//     <ListItem button>
//       <ListItemAvatar>
//         <Avatar alt="Profile Picture">
//           {primary.charAt(0).toUpperCase()}
//         </Avatar>
//       </ListItemAvatar>
//       <ListItemText
//         onClick={() => {
//           window.location.href = "./view-memo/1234";
//         }}
//         primary={primary}
//         secondary={secondary}
//       />
//     </ListItem>
//   </React.Fragment>
// ))}

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
  const [anchorEl, setAnchorEl] = useState(null);
  const [memos, setMemos] = useState(new Array());

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    $.ajax({
      url: "./get-user-memos",
      data: {
        userId: props.getLoggedInUserData().userId,
        memoType: "allMemos",
      },
      method: "post",
      success: (allMemos) => {
        setMemos(allMemos);
        console.log(memos);
      },
    });
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5" gutterBottom>
          All Memos
        </Typography>
        <List className={classes.list}>
          <ListSubheader className={classes.subheader}>Today</ListSubheader>
          {memos.map((itm) => {
            let memoId = itm.memoId;
            let memoDate = itm.memoDate;
            delete itm.memoId;
            delete itm.memoDate;
            itm = props.decryptToOrgObj(itm);
            console.log(itm);
            itm.memoBody = itm.memoBody.substring(0, 45);
            return (
              <ListItem
                onClick={() => {
                  window.location.href = `./view-memo/${memoId}`;
                }}
                button
              >
                <ListItemAvatar>
                  <Avatar alt="Profile Picture">
                    {itm.memoTitle.charAt(0).toUpperCase()}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "65vw",
                  }}
                  primary={itm.memoTitle}
                  secondary={itm.memoBody}
                />
              </ListItem>
            );
          })}
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
          <Tooltip title="Create new Memo" arrow>
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
              <AddIcon />
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
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
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
      <TemporaryDrawer anchor="left" active={drawer} />
      {createMemo ? <CreateMemo createUserMemo={props.createUserMemo} /> : null}
    </React.Fragment>
  );
}
