async function getSubCategoryByCategory () {
  let clothing = await fetch('/subcategory/?category=clothing')
  let shoes = await fetch('/subcategory/?category=shoes')
  let accessories = await fetch('/subcategory/?category=accessories')
  let beauty = await fetch('/subcategory/?category=beauty')
    return Promise.all([
    clothing.json(),
    shoes.json(),
    accessories.json(),
    beauty.json()
  ])
}

export {getSubCategoryByCategory};
