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
import { withRouter, Link } from 'react-router-dom'
import { authenticate } from '../../api/Auth'
import { setLoggedInUser } from '../../Redux/Actions'
import { connect } from 'react-redux'


class SignIn extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      _isAuthenticated: false
    }
    // this.handleSubmit = this.handleSubmit.bind(this)
    //this.handleChange = this.handleChange.bind(this)
  }

  async handleSubmit () {
    let response = await authenticate(this.state.email, this.state.password)
    // if (response.statusCode === 200) {
    //   this.setState({ _isAuthenticated: true })
    // } else {
    //   this.setState({ _isAuthenticated: false })
    //   console.log('login error')
    // }
  }

  componentDidMount () {
    this.handleSubmit()
  }
  // handleChange (event) {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

  render () {
    return (
      <Container component='main' maxWidth='xs'>
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
          <form
            style={{
              width: '100%', // Fix IE 11 issue.
              marginTop: 30,
              marginBottom: 90
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  // variant="outlined"
                  required
                  fullWidth
                  // id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  value={this.state.email}
                  onChange={e => {
                    this.setState({ email: e.target.value })
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  // variant="outlined"
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  autoComplete='current-password'
                  value={this.state.password}
                  onChange={e => {
                    this.setState({ password: e.target.value })
                  }}
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
                    borderRadius: 50,
                    backgroundColor: '#F57F17',
                    padding: '9px',
                    fontSize: '18px'
                  }}
                  onClick={
                    () => this.handleSubmit()

                    // user => {
                    //   this.props.dispatch(
                    //     setLoggedInUser({ email: user.email }) //add id
                    //   )
                    // })
                  }
                >
                  Sign In
                </Button>
                {/* {this.state.wrongCred && (
                  <div style={{ color: 'red' }}>
                    Wrong username and/or password
                  </div>
                )} */}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  type='button'
                  fullWidth
                  variant='contained'
                  style={{
                    borderRadius: 50,
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
              <Grid
                item
                style={{
                  paddingTop: '40px',
                  paddingBottom: '20px',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                onClick={() => {
                  this.props.history.push('/sign-up')
                }}
              >
                <Link>Do not have an account? Sign Up</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    )
  }
}
const Login = withRouter(connect()(SignIn))

export default Login
