async function createOrderDetails (id) {
  const orders = await fetch('/order-details/customer/details/?id=' + id)

  return Promise.all([orders.json()])
}

export { createOrderDetails }
