const products = [
  //   {
  //     id: 1,
  //     name: "Brown Shirt",
  //     description: "Brown T-Shirt for Women",
  //     price: 16.99,
  //     gender: "women",
  //     type: "shirt",
  //     img: "https://image.ibb.co/kOhL6k/img1.jpg",
  //     inCart: false,
  //     category: "clothes"
  //   },
  //   {
  //     id: 2,
  //     name: "Light Brown Shirt",
  //     description: "Light Brown Shirt for Women",
  //     price: 4.99,
  //     gender: "women",
  //     type: "shirt",
  //     img: "https://image.ibb.co/nNmKz5/img2.jpg",
  //     inCart: false,
  //     category: "clothes"
  //   },
  //   {
  //     id: 3,
  //     name: "Women Grey Shirt",
  //     description: "Grey Shirt for Women",
  //     price: 14.99,
  //     gender: "women",
  //     type: "shirt",
  //     img: "https://image.ibb.co/n6iMCQ/img3.jpg",
  //     inCart: false,
  //     category: "clothes"
  //   },
  //   {
  //     id: 4,
  //     name: "Warm Shirt Women",
  //     description: "Woolen Hoodie Women",
  //     price: 20.00,
  //     gender: "women",
  //     type: "shirt",
  //     img: "https://image.ibb.co/dVfORk/img4.jpg",
  //     inCart: false,
  //     category: "clothes"
  //   },
  //   {
  //     id: 5,
  //     name: "Women Grey Shirt",
  //     description: "Light Grey Shirt for Women",
  //     price: 4.99,
  //     gender: "women",
  //     type: "shirt",
  //     img: "https://image.ibb.co/jpMxmk/img5.jpg",
  //     inCart: false,
  //     category: "clothes"
  //   },
  //   {
  //     id: 6,
  //     name: "Women Red/Brown Shirt",
  //     description: "Red/Brown Blouse for Women",
  //     price: 19.99,
  //     gender: "women",
  //     type: "blouse",
  //     img: "https://image.ibb.co/mJppz5/img6.jpg",
  //     inCart: false,
  //     category: "clothes"
  //   },
  //   {
  //     id: 7,
  //     name: "Dark Grey Shirt Women",
  //     description: "Dark Grey Shirt for Women",
  //     price: 6.00,
  //     gender: "women",
  //     type: "shirt",
  //     img: "https://image.ibb.co/eZiSmk/img7.jpg",
  //     inCart: false,
  //     category: "clothes"
  //   },
  //   {
  //     id: 8,
  //     name: "White Shirt Women",
  //     description: "White Shirt for Women",
  //     price: 14.99,
  //     gender: "women",
  //     type: "shirt",
  //     img: "https://image.ibb.co/dyCysQ/img8.jpg",
  //     inCart: false,
  //     category: "clothes"
  //   },
  //   {
  //     id: 9,
  //     name: "Black Shirt Women",
  //     description: "Black Shirt for Women",
  //     price: 20.99,
  //     gender: "women",
  //     type: "shirt",
  //     img: "https://image.ibb.co/eOYre5/img10.jpg",
  //     inCart: false,
  //     category: "clothes"
  //   },
  //   {
  //     id: 10,
  //     name: "No Shoulder Hoodie",
  //     description: "Hoodie for Women",
  //     price: 4.99,
  //     gender: "women",
  //     type: "shirt",
  //     img: "https://image.ibb.co/f6gcK5/img9.jpg",
  //     inCart: false,
  //     category: "clothes"
  //   },
  //   {
  //     id: 11,
  //     name: "Women Watch Gold",
  //     description: "Golden Watch for Women",
  //     price: 45.99,
  //     gender: "women",
  //     type: "watch",
  //     img: "https://images.pexels.com/photos/69046/watch-wrist-watch-packshot-time-69046.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
  //     inCart: false,
  //     category: "accessories"
  //   },
  //   {
  //     id: 12,
  //     name: "Black Pearl Necklace",
  //     description: "Black Pearl Necklace for Women",
  //     price: 14.99,
  //     gender: "women",
  //     type: "necklace",
  //     img: "https://images.pexels.com/photos/221550/pexels-photo-221550.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
  //     inCart: false,
  //     category: "accessories"
  //   },
  //   {
  //     id: 13,
  //     name: "Man Black Shirt",
  //     description: "Black T-Shirt for Men",
  //     price: 10.99,
  //     gender: "men",
  //     type: "shirt",
  //     img: "http://media.istockphoto.com/photos/smiling-young-man-in-blank-black-tshirt-picture-id464946525?k=6&m=464946525&s=612x612&w=0&h=KAjCFoJGDcFcx8R33Tq1vzqbfixh1XwGpFeiRNoTkRQ=",
  //     inCart: false,
  //     category: "clothes"
  //   },
  //   {
  //     id: 14,
  //     name: "Man Grey Tanktop",
  //     description: "Grey Tanktop for Men",
  //     price: 14.99,
  //     gender: "men",
  //     type: "shirt",
  //     img: "http://media.istockphoto.com/photos/portrait-of-young-man-wearing-tshirt-picture-id465207699?k=6&m=465207699&s=612x612&w=0&h=wSacC0bmcrekig1DW8lOwH7y3X0e4R9266-TuivVQJA=",
  //     inCart: false,
  //     category: "clothes"
  //   },
  {
    id: 1,
    name: "Nike Air Presto",
    category: "Clothing and Shoes",
    price: 55,
    description:
      "The Nike Air Presto Women's Shoe delivers the same unrivaled fit and comfort that marked the 2000 debut of the original.",
    popular: true,
    imageUrls: [
      "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/wokkcny4zbhvzobfwc7i/air-presto-womens-shoe-89Tqz1nG.jpg",
      "https://media.hypedc.com/media/catalog/product/cache/1/image/750x/9df78eab33525d08d6e5fb8d27136e95/_/o/_o8a4329_2.jpg",
    ],
  },
  {
    id: 15,
    name: "Print Shirred Popover Shirt",
    description: ["Spring is here", "Cotton", "Washing"],
    price: 20.99,
    gender: "women",
    type: "shirt",
    imageUrls: [
      "https://www1.assets-gap.com/webcontent/0018/423/887/cn18423887.jpg",
      "https://www1.assets-gap.com/webcontent/0018/423/887/cn18423887.jpg",
      "https://www1.assets-gap.com/webcontent/0018/423/887/cn18423887.jpg",
      "https://www1.assets-gap.com/webcontent/0018/423/887/cn18423887.jpg",
    ],
    inCart: false,
    category: "clothes",
    store: "Zara",
    sizes: [
      {
        size: "S",
        count: 2,
      },
      {
        size: "M",
        count: 5,
      },
      {
        size: "L",
        count: 4,
      },
      {
        size: "XL",
        count: 0,
      },
    ],
  },
  {
    id: 16,
    name: "High Destructed Rise Cheeky Straight Jeans",
    description: "Dark Indigo",
    gender: "women",
    type: "jeans",
    img: "https://www1.assets-gap.com/webcontent/0018/476/769/cn18476769.jpg",
    inCart: false,
    category: "clothes",
    store: "Zara",
  },
  {
    id: 17,
    name: "Kids Leopard Sunglasses",
    description: "Just use it",
    price: 13.99,
    gender: "boy",
    type: "sunglass",
    img: "https://www1.assets-gap.com/webcontent/0018/313/743/cn18313743.jpg",
    inCart: false,
    category: "accessories",
    store: "Zara",
  },
  {
    id: 18,
    name: "Black Shirt Men",
    description: "Smooth, sturdy twill weave.",
    price: 9.99,
    gender: "men",
    type: "cap",
    img:
      "http://media.istockphoto.com/photos/smiling-man-in-a-black-t-shirt-picture-id520883622?k=6&m=520883622&s=612x612&w=0&h=XuxfQE0EOo_uWqA8SzNJvZ9Vn-sKR_cT4J9GRIudE4U=",
    inCart: false,
    category: "clothes",
    store: "Zara",
  },
  {
    id: 19,
    name: "Washed Baseball Hat",
    description: "Smooth, sturdy twill weave",
    price: 35.99,
    gender: "men",
    type: "hat",
    img: "https://www1.assets-gap.com/webcontent/0016/309/754/cn16309754.jpg",
    inCart: false,
    category: "accessories",
    store: "Zara",
  },
  {
    id: 20,
    name: "Reversible Belt",
    description: "Genuine leather.",
    price: 15.99,
    gender: "men",
    type: "belt",
    img: "https://www1.assets-gap.com/webcontent/0015/568/364/cn15568364.jpg",
    inCart: false,
    category: "accessories",
    store: "Zara",
  },
  {
    id: 21,
    name: "5X DELICATE CHAIN BRACELET PACK",
    description: "Made with layered looks in mind",
    price: 45.99,
    gender: "women",
    type: "braslet",
    img:
      "https://media.monsoon.co.uk/medias/sys_master/9451421794334.jpg?buildNumber=491a8746e3a11586a76a5fed2f391635eecf347a",
    inCart: false,
    category: "accessories",
    store: "Gap",
  },
  {
    id: 22,
    name: "NYLON QUILTED CROSS BODY BAG",
    description: "Created in nylon, our quilted cross-body bag",
    price: 45.99,
    gender: "women",
    type: "bag",
    img:
      "https://media.monsoon.co.uk/medias/sys_master/9440081149982.jpg?buildNumber=491a8746e3a11586a76a5fed2f391635eecf347a",
    inCart: false,
    category: "accessories",
    store: "Zara",
  },
  {
    id: 23,
    name: "LILY GLITTER ENVELOPE CLUTCH BAG",
    description: "Make your entrance with our Lily envelope clutch bag",
    price: 45.99,
    gender: "women",
    type: "bag",
    img:
      "https://media.monsoon.co.uk/medias/sys_master/9440839663646.jpg?buildNumber=491a8746e3a11586a76a5fed2f391635eecf347a",
    inCart: false,
    category: "accessories",
    store: "Accessorize",
  },
  {
    id: 24,
    name: "LILY GLITTER ENVELOPE CLUTCH BAG",
    description: "Make your entrance with our Lily envelope clutch bag",
    price: 45.99,
    gender: "women",
    type: "bag",
    img:
      "https://media.monsoon.co.uk/medias/sys_master/9440839663646.jpg?buildNumber=491a8746e3a11586a76a5fed2f391635eecf347a",
    inCart: false,
    category: "accessories",
    store: "Accessorize",
  },
  {
    id: 25,
    name: "LILY GLITTER ENVELOPE CLUTCH BAG",
    description: "Make your entrance with our Lily envelope clutch bag",
    price: 45.99,
    gender: "women",
    type: "bag",
    img:
      "https://media.monsoon.co.uk/medias/sys_master/9440839663646.jpg?buildNumber=491a8746e3a11586a76a5fed2f391635eecf347a",
    inCart: false,
    category: "accessories",
    store: "Accessorize",
  },
  {
    id: 26,
    name: "LILY GLITTER ENVELOPE CLUTCH BAG",
    description: "Make your entrance with our Lily envelope clutch bag",
    price: 45.99,
    gender: "women",
    type: "bag",
    img:
      "https://media.monsoon.co.uk/medias/sys_master/9440839663646.jpg?buildNumber=491a8746e3a11586a76a5fed2f391635eecf347a",
    inCart: false,
    category: "accessories",
    store: "Accessorize",
  },
  {
    id: 27,
    name: "5X DELICATE CHAIN BRACELET PACK",
    description: "Made with layered looks in mind",
    price: 45.99,
    gender: "women",
    type: "braslet",
    img:
      "https://media.monsoon.co.uk/medias/sys_master/9451421794334.jpg?buildNumber=491a8746e3a11586a76a5fed2f391635eecf347a",
    inCart: false,
    category: "accessories",
    store: "Gap",
  },
  {
    id: 28,
    name: "5X DELICATE CHAIN BRACELET PACK",
    description: "Made with layered looks in mind",
    price: 45.99,
    gender: "women",
    type: "braslet",
    img:
      "https://media.monsoon.co.uk/medias/sys_master/9451421794334.jpg?buildNumber=491a8746e3a11586a76a5fed2f391635eecf347a",
    inCart: false,
    category: "accessories",
    store: "Gap",
  },
  {
    id: 29,
    name: "5X DELICATE CHAIN BRACELET PACK",
    description: "Made with layered looks in mind",
    price: 45.99,
    gender: "women",
    type: "braslet",
    img:
      "https://media.monsoon.co.uk/medias/sys_master/9451421794334.jpg?buildNumber=491a8746e3a11586a76a5fed2f391635eecf347a",
    inCart: false,
    category: "accessories",
    store: "Gap",
  },
  {
    id: 30,
    name: "5X DELICATE CHAIN BRACELET PACK",
    description: "Made with layered looks in mind",
    price: 45.99,
    gender: "women",
    type: "braslet",
    img:
      "https://media.monsoon.co.uk/medias/sys_master/9451421794334.jpg?buildNumber=491a8746e3a11586a76a5fed2f391635eecf347a",
    inCart: false,
    category: "accessories",
    store: "Gap",
  },
];

const categories = [
  {
    clothing: [
      {
        name: "Jumpers & Cardigans",
        icon: "list",
      },
      {
        name: "Jeans",
        icon: "group",
      },
      {
        name: "Shirts",
        icon: "group",
      },
      {
        name: "Dresses",
        icon: "group",
      },
      {
        name: "Computers",
        icon: "computer",
      },
    ],
  },
  {
    shoes: [
      {
        name: "Jumpers & Cardigans",
        icon: "list",
      },
      {
        name: "Jeans",
        icon: "group",
      },
      {
        name: "Shirts",
        icon: "group",
      },
      {
        name: "Dresses",
        icon: "group",
      },
      {
        name: "Computers",
        icon: "computer",
      },
    ],
  },
  {
    accessorise: [
      {
        name: "Jumpers & Cardigans",
        icon: "list",
      },
      {
        name: "Jeans",
        icon: "group",
      },
      {
        name: "Shirts",
        icon: "group",
      },
      {
        name: "Dresses",
        icon: "group",
      },
      {
        name: "Computers",
        icon: "computer",
      },
    ],
  },
];

// Data for rendering menu.
const categoryList = [
  {
    name: "Clothing",
    id: 1,
    children: categories[0].clothing.map((x, i) => {
      return {
        name: x.name,
        id: i,
        url: "/?category=" + x.name,
      };
    }),
  },

  {
    name: "Shoes",
    id: 2,
    children: categories[1].shoes.map((x, i) => {
      return {
        name: x.name,
        id: i,
        url: "/?category=" + x.name,
      };
    }),
  },
  {
    name: "Accessorise",
    id: 3,
    children: categories[2].accessorise.map((x, i) => {
      return {
        name: x.name,
        id: i,
        url: "/?category=" + x.name,
      };
    }),
  },
];

// const categories = [
//   {
//     name: "All categories",
//     icon: "list",
//   },
//   {
//     name: "Clothing and Shoes",
//     icon: "group",
//   },
//   {
//     name: "Jewelry and Watches",
//     icon: "watch",
//   },
//   {
//     name: "Books",
//     icon: "menu_book",
//   },
//   {
//     name: "Computers",
//     icon: "computer",
//   },
// ];

// // Data for rendering menu.
// const dataForTheMenu = [
//   {
//     name: "Home page",
//     url: "/",
//     icon: "home",
//     id: 0,
//   },
//   {
//     name: "Product categories",
//     id: 1,
//     children: categories.map((x, i) => {
//       return {
//         name: x.name,
//         id: i,
//         url: "/?category=" + x.name,
//         icon: x.icon,
//       };
//     }),
//   },
// ];

export default { products, categoryList, categories };
//export default products;
