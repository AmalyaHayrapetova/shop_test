import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { withRouter, Redirect, Link } from "react-router-dom";
import { useState } from "react";
import Auth from "../../Auth";
import { setLoggedInUser } from "../../Redux/Actions";
import { connect } from "react-redux";

/*
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#F57170",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(10),
    marginBottom: 90,
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  signIn: {
    borderRadius: 50,
    backgroundColor: "#F57F17",
    padding: "9px",
    fontSize: "18px",
  },

  cancel: {
    borderRadius: 50,
    backgroundColor: "#F57F17",
    padding: "9px",
    fontSize: "18px",
  },

  account: {
    // padding: "10px",
    paddingTop: "40px",
    paddingBottom: "20px",
    justifyContent: "center",
    alignItems: "center",
    // paddingLef: "20px"
  },

  link: {
    color: "inherit",
    textDecoration: "inherit",
  },
}));
*/

class SignIn extends Component {
  //const classes = useStyles();
  //const [isClose, setClose] = useState(false);
  state = {
    userName: "",
    pass: "",
    redirectToReferrer: false,
  };

  handleUserNameTextFieldChange = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };

  handlePassTextFieldChange = (e) => {
    this.setState({
      pass: e.target.value,
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    if (this.state.redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            style={{
              margin: 10,
              backgroundColor: "#F57170",
            }}
            // className={classes.avatar}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create an Account
          </Typography>
          <form
            style={{
              width: "100%", // Fix IE 11 issue.
              marginTop: 30,
              marginBottom: 90,
            }}
            validate="true"
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  // variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={this.state.userName}
                  onChange={this.handleUserNameTextFieldChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  // variant="outlined"
                  required
                  fullWidth
                  // name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={this.state.pass}
                  onChange={this.handlePassTextFieldChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="savePassword" color="primary" />}
                  label="Remember Me."
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{
                    borderRadius: 50,
                    backgroundColor: "#F57F17",
                    padding: "9px",
                    fontSize: "18px",
                  }}
                  //className={(classes.submit, classes.signIn)}
                  onClick={() => {
                    // Simulate authentication call
                    if(this.state.userName === "" || this.state.pass === ""){
                      return;
                    } else {
                    Auth.authenticate(
                      this.state.userName,
                      this.state.pass,
                      (user) => {
                        if (!user) {
                          this.setState({ wrongCred: true });
                          return;
                        }

                        this.props.dispatch(
                          setLoggedInUser({ name: user.name }) //add id
                        );
                        this.setState(() => ({
                          redirectToReferrer: true,
                        }));
                      }
                    );
                    }
                  }}
                >
                  Sign In
                </Button>
                {this.state.wrongCred && (
                  <div style={{ color: "red" }}>
                    Wrong username and/or password
                  </div>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  style={{
                    borderRadius: 50,
                    backgroundColor: "#F57F17",
                    padding: "9px",
                    fontSize: "18px",
                  }}
                  onClick={() => {
                    this.props.history.push("/");
                  }}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
            <Grid container justify="flex-end">
              <Grid
                item
                style={{
                  paddingTop: "40px",
                  paddingBottom: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => {
                  this.props.history.push("/sign-up");
                }}
              >
                <Link>Do not have an account? Sign Up</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}
const Login = withRouter(connect()(SignIn));

export default Login;
