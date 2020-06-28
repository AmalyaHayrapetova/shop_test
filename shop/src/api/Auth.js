// Simulate authentication service

  async function authenticate (email, pass) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Email: email,
        Password: pass
      })
    }
    let response = await fetch('/customer/sign-in', requestOptions)
    return Promise.all([response.json()])

  }

  // signout (cb) {
  //   this._isAuthenticated = false
  //   setTimeout(cb, 100)
  // }


export  {authenticate}

// Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
// async function authenticate (requestOptions) {

//   const response = await fetch('/customer/sign-in', requestOptions)
//   const body = await response.json()

//   if (response.status !== 200) {
//     throw Error(body.message)
//   }
//   return body
// }
