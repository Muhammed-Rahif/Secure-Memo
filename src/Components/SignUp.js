import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { useForm } from "react-hook-form";
import { FormatIndentIncreaseTwoTone } from "@material-ui/icons";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
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
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function signUpUser() {}

export default function SignUp(props) {
  const classes = useStyles();
  const [fnValid, setFnValid] = useState(false);
  const [lnValid, setLnValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ reValidateMode: "onChange" });

  const onSubmit = (formData) => {
    console.log(formData);
    props.signUpUser(formData)
  };
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                variant="outlined"
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                autoComplete="off"
                {...register("firstName", { required: true, minLength: 3 })}
                error={errors.firstName ? true : false}
                helperText={
                  errors.firstName
                    ? errors.firstName.type === "required"
                      ? "First name is required."
                      : " Minimum lenght 3."
                    : "Type your first name."
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="lastName"
                label="Last Name"
                autoComplete="off"
                {...register("lastName", { required: true, minLength: 3 })}
                error={errors.lastName ? true : false}
                helperText={
                  errors.lastName
                    ? errors.lastName.type === "required"
                      ? "Last name is required."
                      : " Minimum lenght 3."
                    : "Type your last name."
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="off"
                {...register("email", {
                  required: true,
                  pattern: emailPattern,
                })}
                error={errors.email ? true : false}
                helperText={
                  errors.email
                    ? errors.email.type === "required"
                      ? "Email address is required."
                      : "Type a valid email address."
                    : "Type your email address."
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Password"
                type="password"
                id="password"
                autoComplete="off"
                {...register("password", { required: true, minLength: 8 })}
                error={errors.password ? true : false}
                helperText={
                  errors.password
                    ? errors.password.type === "required"
                      ? "Password is required."
                      : "Minimum lenght is 8."
                    : "Type your password."
                }
              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
