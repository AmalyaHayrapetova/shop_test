import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";




const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    display: "flex",
    justifyContent: "center",

  },
}));

const steps = ["Shipping address", "Review your order", "Payment details"];

export default function PaymentForm() {
  const classes = useStyles();
  const [activeStep,setActiveStep] = React.useState(0);


  const handlePay = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <List>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total Price" />
          <Typography variant="subtitle1" className={classes.total}>
            $34.06
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}
