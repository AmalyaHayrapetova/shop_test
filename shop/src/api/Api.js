
async function callBackendAPI (gender = '', subCategory = '') {
  try {
    let data 
    let responseJson 
    
    switch (gender) {
      case 'women': {
        data = await fetch('/product/gender/women')
        responseJson = data.json()
        return responseJson
      }
      case 'men': {
        data = await fetch('/product/gender/men')
        responseJson = data.json()
        return responseJson
      }
      case 'boys': {
        data = await fetch('/product/gender/boys')
        responseJson = data.json()
        return responseJson
      }
      case 'girls': {
        data = await fetch('/product/gender/girls')
        responseJson = data.json()
        return responseJson
      }
    }
    
  } catch (error) {
    console.error(`Error is: ${error}`)
  }
}

//  async function getItemUsingID (id) {
//   try {
//     let data = await fetch('/product/:id')
//     let responseJson = data.json()
//     return responseJson;
//   } catch (error) {
//     console.error(`Error is: ${error}`)
//   }
// }

export { callBackendAPI}

class Api {
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js

  sortByPrice (data, sortval) {
    if (sortval !== 'lh' && sortval !== 'hl') return data

    let items = [...data]

    if (sortval === 'lh') {
      items.sort((a, b) => a.price - b.price)
    } else {
      items.sort((a, b) => b.price - a.price)
    }

    return items
  }

  searchItems = async (gender, subcategory, itemsPerPage = 50, page = 1) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // let data = products.filter(item => {
        //   if (
        //     usePriceFilter &&
        //     (item.price < minPrice || item.price > maxPrice)
        //   ) {
        //     return false
        //   }
        //   if (category !== 'All categories' && category !== item.category)
        //     return false
        //   if (subcategory !== undefined && subcategory !== item.subcategory)
        //     return false
        //   if (gender !== item.gender && gender !== undefined) return false

        //   if (term && !item.name.toLowerCase().includes(term.toLowerCase()))
        //     return false

        //   return true
        // })

        let totalLength = this.state.data.length

        this.state.data = this.state.data.slice(
          (page - 1) * itemsPerPage,
          page * itemsPerPage
        )

        resolve(this.state.data, totalLength)
      }, 500)
    })
  }
}

export default new Api()
