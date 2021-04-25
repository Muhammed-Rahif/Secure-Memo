import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="./">
        Secure Memo
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <CssBaseline />
        <Container component="main" className={classes.main} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            <Link href="./" style={{color:"white"}}>Secure Memo</Link>
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {"This website created and maintained by "}
            <Link href="https://github.com/Muhammed-Rahif" variant="h5" style={{color:"white"}}>
              <b>Muhammed Rahif.</b>
            </Link>
            <br />
          </Typography>
          <Typography variant="subtitle1" component="h3">
            {"I hope you will contact me for any inquiries..."}
          </Typography>
          <Typography variant="body1">Have a nice day.</Typography>
        </Container>
        <footer className={classes.footer}>
          <Container maxWidth="sm">
            <Typography variant="body1">
              Made with{" "}
              <Link variant="body1" href="https://material-ui.com/" style={{color:"white"}}>
                React Material UI
              </Link>
            </Typography>
            <Copyright />
          </Container>
        </footer>
      </div>
    </ThemeProvider>
  );
}
