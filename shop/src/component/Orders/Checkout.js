import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./AddressForms";
import Review from "./Review";
import Payment from "./PaymentForms";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setCheckedOutItems } from "../../Redux/Actions";
import { withStyles } from "@material-ui/styles";

const useStyles = (theme) => ({
  appBar: {
    position: "relative",
    marginBottom: 50,
  },
  layout: {
    marginLeft: 16,
    marginRight: 16,
    width: 700,
    // [theme.breakpoints.up(600 + 16 * 2)]: {
    //   width: 600,
    //   marginLeft: "auto",
    //   marginRight: "auto",
    // },
  },
  paper: {
    marginTop: 50,
    marginBottom: 50,
    padding: 16,

    // [theme.breakpoints.up(600 + 24 * 2)]: {
    //   marginTop: 48,
    //   marginBottom: 48,
    //   padding: 24,
    // },
  },
  stepper: {
    padding: (24, 0, 40),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: 24,
    marginLeft: 8,
    backgroundColor: "#F57F17",
  },
});

const handleNext = (state) => {
  // return {
  // activeStep: state.activeStep + 1,

  // };
  console.log(state.activeStep);
};

const handleBack = (state) => {
  return {
    activeStep: state.activeStep - 1,
  };
};

const steps = ["Shipping address", "Review your order", "Payment details"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <Review />;
    case 2:
      return <Payment />;
    default:
      throw new Error("Unknown step");
  }
}

class Checkout extends Component {
  //const classes = useStyles();
  // const [activeStep, setActiveStep] = React.useState(0);

  // const handleNext = () => {
  //   setActiveStep(activeStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep(activeStep - 1);
  // };

  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
    };
  }

  render() {
    const number = 84334324;
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <CssBaseline />
        <AppBar
          position="absolute"
          color="default"
          className={classes.appBar}
        ></AppBar>
        <main className={classes.layout}>
          {/* className={classes.layout} */}
          <Paper className={classes.paper}>
            {/* //className={classes.paper}> */}
            <Typography component="h1" variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {this.state.activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is #{number}. We have emailed your order
                    confirmation, and will send you an update when your order
                    has shipped.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(this.state.activeStep)}
                  <div className={classes.buttons}>
                    {this.state.activeStep !== 0 && (
                      <Button
                        onClick={() =>
                          this.setState({
                            activeStep: this.state.activeStep - 1,
                          })
                        }
                        className={classes.button}
                      >
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() =>
                        this.setState({ activeStep: this.state.activeStep + 1 })
                      }
                      className={classes.button}
                    >
                      {this.state.activeStep === steps.length - 1
                        ? "Place order"
                        : "Next"}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </div>
    );
  }
}

const CheckoutItems = withRouter(Checkout);

export default withStyles(useStyles)(CheckoutItems);
