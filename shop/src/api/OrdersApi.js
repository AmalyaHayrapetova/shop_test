async function createOrder (address, customerID, checkout) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      Country: address.country,
      City: address.city,
      District: address.stateProvince,
      Street: address.street,
      Flat: address.flat,
      ZipCode: address.zip,
      PhoneNumber: address.phoneNumber,
      CustomerID: customerID
    })
  }

  const orders = await fetch('/order/new', requestOptions)

  const requestOptionsDetails = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      OrderNumber: orders.OrderNumber,
      ProductName: checkout.productName,
      ProductColor: checkout.color,
      ProductSize: checkout.size,
      Quantity: checkout.quantity,
      Price: checkout.price,
      StoreName: checkout.storeName
    })
  }

  const details = await fetch('/order-details/new', requestOptionsDetails)

  return Promise.all([orders.json()])
}

export { createOrder }
