  async function registerUser (firstName,lastName, email,password,phoneNumber) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Email: email,
        Password: password,
        FirstName: firstName,
        LastName: lastName,
        PhoneNumber:phoneNumber
      })
    }
    let response = await fetch('/customer/sign-up', requestOptions)
    return Promise.all([response.json()])

  }

export {registerUser} 