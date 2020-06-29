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
