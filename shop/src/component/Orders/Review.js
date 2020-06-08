import React,{Component} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setCheckedOutItems } from "../../Redux/Actions";

const products = [
  { name: "Product 1", desc: "A nice thing", price: "$9.99" },
  { name: "Product 2", desc: "Another thing", price: "$3.45" },
  { name: "Product 3", desc: "Something else", price: "$6.51" },
  { name: "Product 4", desc: "Best thing of all", price: "$14.11" },
  { name: "Shipping", desc: "", price: "Free" },
];
const addresses = [
  "1 Material-UI Drive",
  "Reactville",
  "Anytown",
  "99999",
  "USA",
];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

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
}));

const mapStateToProps = (state) => {
  return {
    checkedOutItems: state.checkedOutItems,
  };
};

class ReviewOrder extends Component {
  // const classes = useStyles();

  render() {
    let totalPrice = this.props.checkedOutItems.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);

    return (
      <div>
        <Typography variant="h6" gutterBottom>
          Order summary
        </Typography>
        <List disablePadding>
            {this.props.checkedOutItems.map((item, index) => {
              return(
            <ListItem key={item.name}>
              <ListItemText primary={item.name} secondary={item.desc} />
              <Typography variant="body2">{item.price}</Typography>
            </ListItem>
              );
          })}
          <ListItem>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
            {totalPrice}
               </Typography>
               </ListItem>
        
        </List>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Shipping
            </Typography>
            <Typography gutterBottom>John Smith</Typography>
            <Typography gutterBottom>{addresses.join(", ")}</Typography>
          </Grid>
          <Grid item container direction="column" xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Payment details
            </Typography>
            <Grid container>
              {payments.map((payment) => (
                <React.Fragment key={payment.name}>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{payment.name}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{payment.detail}</Typography>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const Review = withRouter(connect(mapStateToProps)(ReviewOrder));

export default Review;
