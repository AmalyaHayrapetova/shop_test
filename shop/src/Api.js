import products from "./data/data";

///
//
// Methods of this class are used to simulate calls to server.
//
class Api {
  getItemUsingID(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let res = products.filter((x) => x.id === parseInt(id));
        resolve(res.length === 0 ? null : res[0]);
      }, 500);
    });
  }

  sortByPrice(data, sortval) {
    if (sortval !== "lh" && sortval !== "hl") return data;

    let items = [...data];

    if (sortval === "lh") {
      items.sort((a, b) => a.price - b.price);
    } else {
      items.sort((a, b) => b.price - a.price);
    }

    return items;
  }

  searchItems(
    category,
    gender,
    subcategory,
    term = "",
    sortValue = "lh",
    itemsPerPage = 50,
    usePriceFilter = "false",
    minPrice = 0,
    maxPrice = 1000,
    page = 1
  ) {
    usePriceFilter = usePriceFilter === "true" && true;
    console.log("gender",gender);
    console.log("category",category);
    console.log("subCategory",subcategory);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let data = products.filter((item) => {
          if (
            usePriceFilter &&
            (item.price < minPrice || item.price > maxPrice)
          ) {
            return false;
          }
          if (category !== "All categories" && category !== item.category)
            return false;
          if (subcategory !== undefined && subcategory !== item.subcategory)
            return false;
          if (gender !== item.gender && gender !== undefined) return false;

          if (term && !item.name.toLowerCase().includes(term.toLowerCase()))
            return false;

          return true;
        });

        let totalLength = data.length;

        data = this.sortByPrice(data, sortValue);

        data = data.slice((page - 1) * itemsPerPage, page * itemsPerPage);

        resolve({ data, totalLength });
      }, 500);
    });
  }
}

export default new Api();
