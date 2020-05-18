import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({

  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    marginBottom: 150,

  },

  submit: {
    margin: theme.spacing(3, 0, 2),

  },

  signIn: {
      borderRadius: 50,
      backgroundColor: "#dcedc1",
      padding: "9px",
      fontSize: "18px",

  },

  cancel:{
      borderRadius: 50,
      backgroundColor: "#dcedc1",
      padding: "9px",
      fontSize: "18px",

  },

  account: {
    // padding: "10px",
    paddingTop: "20px",
    paddingBottom: "20px",
    justifyContent: "center",
    alignItems:  "center",
    // paddingLef: "20px"

  }
}));


class SignIn extends React.Component{




  render() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className = {classes.main}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create an Account
        </Typography>
        <form className={classes.form} validate="true">
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
              />
              </Grid>
            <Grid item xs={12} >
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
            className={classes.submit,classes.signIn}
          >
            Sign In
          </Button>
          </Grid>
            <Grid item xs={12} sm={6}>
           <Button 
            type="button"
            fullWidth
            variant="contained"
            className={classes.submit,classes.cancel}
          >
            Cancel
          </Button>
         </Grid>
         </Grid>
          <Grid container justify="flex-end">
            <Grid item className={classes.account}>
              <Link href="./SignIn.jsx" variant="body2">
                Do not have an account? Sign Up
              </Link>
            </Grid>

          </Grid>
        </form>
      </div>
      {/* <Box mt={5}>
        <Copyright />
      </Box> */}
     </Container>
  );
}
}
export default SignIn;