async function getProductById (id) {
  const productColor = await fetch('/product-color?product=' + id)
  const productDetails = await fetch('/product/material/?id=' + id)
  const productSize = await fetch('/product/clothing/size/?id=' + id)
  const product = await fetch('/product/?id=' + id)

  return Promise.all([
    productColor.json(),
    productDetails.json(),
    productSize.json(),
    product.json()
  ])
}

export { getProductById }
