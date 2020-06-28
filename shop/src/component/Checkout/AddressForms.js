import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = state => {}

class AddressForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      addressOne: '',
      city: '',
      stateProvince: '',
      zip: '',
      country: 'Armenia'
    }
  }

  render () {
    return (
      <React.Fragment>
        <Typography variant='h6' gutterBottom>
          Shipping address
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='firstName'
              name='firstName'
              label='First name'
              fullWidth
              autoComplete='fname'
              value={this.state.firstName}
              onChange={e => {
                this.setState({ firstName: e.target.value })
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='lastName'
              name='lastName'
              label='Last name'
              fullWidth
              autoComplete='lname'
              value={this.state.lastName}
              onChange={e => {
                this.setState({ lastName: e.target.value })
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id='address1'
              name='address1'
              label='Address line 1'
              fullWidth
              autoComplete='billing address-line1'
              value={this.state.addressOne}
              onChange={e => {
                this.setState({ addressOne: e.target.value })
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='city'
              name='city'
              label='City'
              fullWidth
              autoComplete='billing address-level2'
              value={this.state.city}
              onChange={e => {
                this.setState({ city: e.target.value })
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='state'
              name='state'
              label='State/Province/Region'
              fullWidth
              value={this.state.stateProvince}
              onChange={e => {
                this.setState({ stateProvince: e.target.value })
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='zip'
              name='zip'
              label='Zip / Postal code'
              fullWidth
              autoComplete='billing postal-code'
              value={this.state.zip}
              onChange={e => {
                this.setState({ zip: e.target.value })
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='country'
              name='country'
              label='Country'
              fullWidth
              value='Armenia'
              onChange={e => {
                this.setState({ county: e.target.value })
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color='secondary' name='saveAddress' value='yes' />
              }
              label='Use this address for payment details'
            />
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}
export default withRouter(AddressForm)
