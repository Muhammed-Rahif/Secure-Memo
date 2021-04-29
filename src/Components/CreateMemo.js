import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import LockIcon from "@material-ui/icons/Lock";
import Tooltip from "@material-ui/core/Tooltip";
import SaveIcon from "@material-ui/icons/Save";
import Paper from "@material-ui/core/Paper";
import ReactMarkdown from "react-markdown";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  devider: {
    maxWidth: "95%",
    margin: "auto",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [addMemoTo, setAddMemoTo] = React.useState("allMemos");
  const [textAreaHeight, setTextAreaHeight] = React.useState(null);
  const [mdScrollable, setMdScrollable] = React.useState(false);
  const [memoHeading, setMemoHeading] = React.useState(null);
  const [textAreaContent, setTextAreaContent] = React.useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ reValidateMode: "onChange" });

  const onSubmit = (formData) => {
    props.createUserMemo(formData);
    handleClose();
    props.showSnackBar(true);
  };

  const changePreviewScrollable = (event) => {
    setMdScrollable(event.target.checked);
    if (mdScrollable) {
      document.getElementById("markdown-preview").style.overflowY = "visible";
      document.getElementById("markdown-preview").style.height = "auto";
    } else {
      document.getElementById("markdown-preview").style.overflowY = "scroll";
      document.getElementById("markdown-preview").style.height = textAreaHeight;
    }
  };

  useEffect(() => {
    setOpen(true);
    setTimeout(() => {
      setTextAreaHeight(
        document.getElementById("bodyTextarea").clientHeight +
          (document.getElementById("bodyTextarea").clientHeight * 2.5) / 10 +
          "px"
      );
    }, 500);
  }, []);

  const handleClose = () => {
    document.getElementById("addBtn").click();
    setOpen(false);
  };

  const handleSelectChange = (event) => {
    setAddMemoTo(event.target.value);
  };

  const updateMarkdown = () => {
    setTextAreaContent(document.getElementById("bodyTextarea").value);
  };

  const switchHandler = (event) => {
    setMdScrollable(document.getElementById("mdSwitch").checked);
    changePreviewScrollable(event);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <form
          className={classes.form}
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Tooltip title="Cancel" arrow>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
              </Tooltip>
              <Typography variant="h6" className={classes.title}>
                Create a new Memo
              </Typography>
              <Tooltip title="Save Memo" arrow>
                <Button
                  autoFocus
                  color="inherit"
                  variant="outlined"
                  startIcon={<SaveIcon />}
                  type="submit"
                >
                  save
                </Button>
              </Tooltip>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem style={{ paddingBottom: 0 }}>
              <ListItemText primary="Memo Heading" />
            </ListItem>
            <ListItem>
              <TextField
                id="outlined-basic"
                label="Memo Heading"
                variant="outlined"
                fullWidth
                value={memoHeading}
                onChange={() => {
                  setMemoHeading(event.target.value);
                }}
                {...register("memoTitle", { required: true, minLength: 8 })}
                error={errors.memoTitle ? true : false}
                helperText={
                  errors.memoTitle
                    ? errors.memoTitle.type === "required"
                      ? "Title is required."
                      : "Minimum lenght 8."
                    : "Memo Title here."
                }
              />
            </ListItem>
            <Divider className={classes.devider} />
            <ListItem style={{ paddingBottom: 0 }}>
              <ListItemText primary="Memo Body" />
              <p style={{ textAlign: "right" }}>
                <small>* Markdown enabled</small>
              </p>
            </ListItem>
            <ListItem>
              <TextField
                id="bodyTextarea"
                label="Memo Body"
                variant="outlined"
                rows="7"
                multiline={true}
                fullWidth
                aria-label="textarea"
                value={textAreaContent}
                onChange={updateMarkdown}
                {...register("memoBody", { required: true, minLength: 12 })}
                error={errors.memoBody ? true : false}
                helperText={
                  errors.memoBody
                    ? errors.memoBody.type === "required"
                      ? "Title is required."
                      : "Minimum lenght 12."
                    : "Memo Body here."
                }
              />
            </ListItem>
            <ListItem style={{ paddingBottom: 0 }}>
              <ListItemText primary="Memo Body Preview" />
              <p style={{ textAlign: "right" }}>
                Scrollable
                <Switch
                  id="mdSwitch"
                  onChange={switchHandler}
                  color="primary"
                  checked={mdScrollable}
                />
              </p>
            </ListItem>
            <ListItem>
              <Paper
                id="markdown-preview"
                variant="outlined"
                style={{
                  minHeight: textAreaHeight,
                  margin: ".13rem",
                  width: "100vw",
                  overflowY: "visible",
                  paddingLeft: ".7rem",
                }}
              >
                <ReactMarkdown children={textAreaContent} />
              </Paper>
            </ListItem>
            <Divider className={classes.devider} />
            <ListItem style={{ paddingBottom: 0 }}>
              <ListItemText primary="Add Memo to" />
            </ListItem>
            <ListItem>
              <FormControl
                variant="outlined"
                fullWidth
                className={classes.formControl}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  Add to
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={addMemoTo}
                  onChange={handleSelectChange}
                  label="Add to"
                  {...register("memoTitle", { required: true})}
                  error={errors.memoTitle ? true : false}
                  helperText="Memo will add to all memos section by default."
                >
                  <MenuItem value="allMemos">
                    <AllInboxIcon /> All Memos
                  </MenuItem>
                  <MenuItem value="hiddenMemos">
                    <VisibilityOffIcon /> Hidden
                  </MenuItem>
                  <MenuItem value="secureMemos">
                    <LockIcon /> Secure
                  </MenuItem>
                </Select>
              </FormControl>
            </ListItem>
            <Divider className={classes.devider} />
          </List>
        </form>
      </Dialog>
    </div>
  );
}
