import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAddressInfo } from '../../Redux/Actions'

const mapStateToProps = state => {
  return {
    addressInfo: state.addressInfo
  }
}

class AddressForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      street: '',
      flat: '',
      city: '',
      stateProvince: '',
      zip: '',
      country: 'Armenia',
      phoneNumber: ''
    }
  }

  render () {
    return (
      <React.Fragment>
        <form>
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
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id='address1'
                name='address1'
                label='Street'
                fullWidth
                autoComplete='billing address-line1'
                value={this.state.street}
                onChange={e => {
                  this.setState({ street: e.target.value })
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id='address1'
                name='address1'
                label='Apt/Flat'
                fullWidth
                autoComplete='billing address-line1'
                value={this.state.flat}
                onChange={e => {
                  this.setState({ flat: e.target.value })
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
              required
                id='country'
                name='country'
                label='Country'
                fullWidth
                value='Armenia'
                onChange={e => {
                  this.setState({ country: e.target.value })
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='phonne'
                name='phone'
                label='Phone Number'
                fullWidth
                value={this.state.phoneNumber}
                onChange={e => {
                  this.setState({ phoneNumber: e.target.value })
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    color='secondary'
                    name='saveAddress'
                    value='yes'
                    onChange={() => {
                      this.props.dispatch(
                        setAddressInfo({
                          firstName: this.state.firstName,
                          lastName: this.state.lastName,
                          street: this.state.street,
                          flat: this.state.flat,
                          city: this.state.city,
                          stateProvince: this.state.stateProvince,
                          zip: this.state.zip,
                          country: this.state.country,
                          phoneNumber: this.state.phoneNumber
                        })
                      )
                    }}
                  />
                }
                label='Use this address for payment details'
              />
            </Grid>
          </Grid>
        </form>
      </React.Fragment>
    )
  }
}
export default withRouter(connect(mapStateToProps)(AddressForm))
