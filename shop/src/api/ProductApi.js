async function callBackendAPI (gender, subCategory, store) {
  try {
    let data
    let responseJson
    if (gender !== undefined && subCategory === undefined) {
      switch (gender) {
        case 'women': {
          data = await fetch('/product/gender/women')
          break
        }
        case 'men': {
          data = await fetch('/product/gender/men')
          break

          // responseJson = data.json()
          // return responseJson
        }
        case 'boys': {
          data = await fetch('/product/gender/boys')
          break

          // responseJson = data.json()
          // return responseJson
        }
        case 'girls': {
          data = await fetch('/product/gender/girls')
          break

          // responseJson = data.json()
          // return responseJson
        }
      }
    } else if (store === undefined) {
      data = await fetch(`/find?subcategory=${subCategory}&gender=${gender}`)

      // responseJson = data.json()
      // console.log('res ', responseJson)
      // return responseJson
    } else if (gender === undefined) {
      data = await findDataWithStoreAndSubCategory(subCategory, store)
    } else {
      data = await findAll(subCategory, store, gender)
    }

    // return new Promise(resolve => {
    //   // simulate a fetch call
    //   // setTimeout(() => {
    //     resolve(data.json())
    //   // }, 500)
    // })
    return Promise.all([data.json()])
  } catch (error) {
    console.error(`Error is: ${error}`)
  }
}

async function findDataWithStoreAndSubCategory (subCategory, store) {
  let data = await fetch(`/find?subcategory=${subCategory}&store=${store}`)
  return data
}

async function findAll (subCategory, store, gender) {
  let data = await fetch(
    `/find?subcategory=${subCategory}&store=${store}&gender=${gender}`
  )
  return data
}

export { callBackendAPI }
