async function callBackendAPI (gender, subCategory, store) {
  try {
    let data
    if (gender !== undefined && subCategory === undefined) {
      switch (gender) {
        case 'women': {
          data = await fetch('/product/gender/women')
          break
        }
        case 'men': {
          data = await fetch('/product/gender/men')
          break
        }
        case 'boys': {
          data = await fetch('/product/gender/boys')
          break
        }
        case 'girls': {
          data = await fetch('/product/gender/girls')
          break
        }
        default: {
          console.error('No such gender type')
        }
      }
    } else if (store === undefined) {
      data = await fetch(
        `/product/find?subcategory=${subCategory}&gender=${gender}`
      )
    } else if (gender === undefined) {
      data = await findDataWithStoreAndSubCategory(subCategory, store)
    } else {
      data = await findAll(subCategory, store, gender)
    }
    return Promise.all([data.json()])
  } catch (error) {
    console.error(`Error is: ${error}`)
  }
}

async function findDataWithStoreAndSubCategory (subCategory, store) {
  let data = await fetch(
    `/product/find?subcategory=${subCategory}&store=${store}`
  )
  return data
}

async function findAll (subCategory, store, gender) {
  let data = await fetch(
    `/find?subcategory=${subCategory}&store=${store}&gender=${gender}`
  )
  return data
}

export { callBackendAPI }
