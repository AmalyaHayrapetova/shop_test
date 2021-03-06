import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { connect } from 'react-redux'
import { showCartDlg, setCheckedOutItems } from '../../Redux/Actions'
import { withRouter } from 'react-router-dom'
import CartRow from './CartRow'

const mapStateToProps = state => {
  return { open: state.showCartDialog, items: state.cartItems }
}

class ConnectedCartDialog extends Component {
  render () {
    let totalPrice = this.props.items.reduce((accumulator, item) => {
      return accumulator + item[0].Price * item.quantity
    }, 0)

    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={() => {
            this.props.dispatch(showCartDlg(false))
          }}
        >
          <div
            style={{
              maxHeight: 400,
              padding: 10,
              overflow: 'auto'
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Item name</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Size</TableCell>
                  <TableCell>Color</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Remove</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.items.map((item, index) => {
                  return <CartRow item={item} key={item.id} {...this.props} />
                })}
              </TableBody>
            </Table>
          </div>

          <div style={{ display: 'flex', padding: 20, alignItems: 'center' }}>
            <div
              style={{
                flex: 1
              }}
            >
              {' '}
              Total Price: {totalPrice} AMD
            </div>
            <Button
              variant='outlined'
              color='primary'
              disabled={totalPrice === 0}
              onClick={() => {
                this.props.dispatch(showCartDlg(false))
                this.props.dispatch(setCheckedOutItems(this.props.items))
                this.props.history.push('/checkout')
              }}
            >
              Checkout
            </Button>
          </div>
        </Dialog>
      </div>
    )
  }
}
const CartDialog = withRouter(connect(mapStateToProps)(ConnectedCartDialog))
export default CartDialog
