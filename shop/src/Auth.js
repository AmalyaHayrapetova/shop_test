// Simulate authentication service
/*
const Auth = {
  _isAuthenticated: false,

  authenticate(name, pass, cb) {
    setTimeout(
      () =>
        cb({
          name: name
        }),
      100
    );
   this._isAuthenticated = true;
  },

  signout(cb) {
    this._isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
*/
import { Component } from 'react'

class Auth extends Component {
  constructor (props) {
    this.state = {
      data: null,
      _isAuthenticated: false
    }
  }

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

}
export default Auth
