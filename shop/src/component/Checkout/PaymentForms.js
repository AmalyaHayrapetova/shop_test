import React, {Component} from "react";
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";

const useStyles = (theme) => ({
  listItem: {
    padding: 8,
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: 20,
  },
  button: {
    marginTop: 30,
    marginLeft: 10,
    display: "flex",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => {
  return {
    checkedOutItems: state.checkedOutItems,
  };
}

class PaymentForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };

  }
  render() {
    
    const { classes } = this.props;

    let totalPrice = this.props.checkedOutItems.reduce((accumulator, item) => {
      return accumulator + item[0].Price * item[0].quantity;
    }, 0);



    return (
      <div>
        <Typography variant="h6" gutterBottom>
          Payment method
        </Typography>
        <List>
          <ListItem className={classes.listItem}>
            <ListItemText primary="Total Price" />
            <Typography variant="subtitle1" className={classes.total}>
              {totalPrice}$
            </Typography>
          </ListItem>
        </List>
      </div>
    );
  }
}

const Payment = withRouter(connect(mapStateToProps)(PaymentForm));
export default withStyles(useStyles)(Payment);
