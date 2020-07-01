async function findDataWithStoreAndSubCategory (subCategory, store) {
  let data = await fetch(
    `/product/find?subcategory=${subCategory}&store=${store}`
  )
     return Promise.all([data.json()])

}
export {findDataWithStoreAndSubCategory}