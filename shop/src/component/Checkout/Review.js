import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Grid from '@material-ui/core/Grid'

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCheckedOutItems, setAddressInfo } from '../../Redux/Actions'

const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' }
]
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' }
]

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0)
  },
  total: {
    fontWeight: 700
  },
  title: {
    marginTop: theme.spacing(2)
  }
}))

const mapStateToProps = state => {
  return {
    checkedOutItems: state.checkedOutItems,
    addressInfo: state.addressInfo,
    addresses: ['addressInfo.', 'Reactville', 'Anytown', '99999', 'USA']
  }
}

class ReviewOrder extends Component {
  // const classes = useStyles();

  render () {
    let totalPrice = this.props.checkedOutItems.reduce((accumulator, item) => {
      return accumulator + item[0].Price * item.quantity
    }, 0)
    let shippingPrice = totalPrice > 50 ? -5 : 5
    let finalPrice = shippingPrice + totalPrice
    return (
      <div>
        <Typography variant='h6' gutterBottom>
          Order summary
        </Typography>
        <List disablePadding>
          {this.props.checkedOutItems.map((item, index) => {
            return (
              <ListItem key={item[0].ProductName}>
                <ListItemText
                  primary={item[0].ProductName}
                  secondary={item.desc}
                />
                <Typography variant='body2'>{item[0].Price}$</Typography>
              </ListItem>
            )
          })}
          <ListItem>
            <ListItemText primary='Shipping' />
            <Typography variant='subtitle1' style={{ fontWeight: 800 }}>
              {shippingPrice}$
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemText primary='Total' />
            <Typography variant='subtitle1' style={{ fontWeight: 800 }}>
              {finalPrice}$
            </Typography>
          </ListItem>
        </List>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant='h6' gutterBottom>
              Shipping
            </Typography>
            {this.props.addressInfo.map((user, index) => {
              return (
                <Typography gutterBottom>{user.firstName}</Typography>
                //<Typography gutterBottom>{this.state.addresses}</Typography>
              )
            })}
          </Grid>

          <Grid item container direction='column' xs={12} sm={6}>
            <Typography variant='h6' gutterBottom>
              Payment details
            </Typography>
            <Grid container>
              {payments.map(payment => (
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
    )
  }
}

const Review = withRouter(connect(mapStateToProps)(ReviewOrder))

export default Review
