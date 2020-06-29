import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { withRouter, Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setLoggedInUser } from '../../Redux/Actions'
import { registerUser } from '../../api/SignUp'

class Register extends Component {
  constructor (props) {
    super(props)

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      phoneNumber: null,
      _isAuthenticated: false,
      wrongCred: false,
      redirectToReferrer: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit () {
    let response = await registerUser(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.password,
      this.state.phoneNumber
    )
    if (response[0].statusCode === 404) {
      this.setState({ _isAuthenticated: false })
    } else {
      this.setState({
        _isAuthenticated: true,
        redirectToReferrer: true,
        user: response[0].id
      })
    }
  }

  render () {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    // If user was authenticated, redirect her to where she came from.
    if (this.state.redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <Container maxWidth='xs'>
        <CssBaseline />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar
            style={{
              margin: 10,
              backgroundColor: '#F57170'
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Create an Account
          </Typography>
          <form validate='true'>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='fname'
                  required
                  id='firstName'
                  fullWidth
                  label='First Name'
                  autoFocus
                  value={this.state.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  autoComplete='lname'
                  value={this.state.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  autoComplete='email'
                  value={this.state.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                  value={this.state.password}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label='Phone Number'
                  id='phone'
                  type='text'
                  autoComplete='phoneNumber'
                  value={this.state.phoneNumbe}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value='savePassword' color='primary' />}
                  label='Remember Me.'
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  style={{
                    backgroundColor: '#F57F17',
                    padding: '9px',
                    fontSize: '18px'
                  }}
                  onClick={() => {
                    this.handleSubmit()
                    if (this.state._isAuthenticated) {
                      this.props.dispatch(
                        setLoggedInUser({ user: this.state.user.id })
                      )
                    } else {
                      this.setState({ wrongCred: true })
                      return
                    }
                  }}
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  type='button'
                  fullWidth
                  variant='contained'
                  style={{
                    backgroundColor: '#F57F17',
                    padding: '9px',
                    fontSize: '18px'
                  }}
                  onClick={() => {
                    this.props.history.push('/')
                  }}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
            <Grid container justify='flex-end'>
              <Link to='/sign-in'>
                <Grid
                  item
                  style={{
                    paddingTop: '40px',
                    paddingBottom: '20px',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  Already have an account? Sign in
                </Grid>
              </Link>
            </Grid>
          </form>
        </div>
      </Container>
    )
  }
}

const SignUp = withRouter(connect()(Register))
export default SignUp
