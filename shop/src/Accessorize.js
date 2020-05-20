import React, { Component } from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';
//Internals
import PRODUCTS from './Data/data.js';
import './css/accessorize.css';
import ProductPage from  "./ProductPage"


class Accessories extends Component {

  constructor(props) {
    super(props);
    this.state = ({
		      id: 1,
		      ProductName: '',
		      Description: '',
		      Price: '',
		      isAvailable: false ,
		      Quantity: 3 ,
		      BrandName: '',
		      StoreID: 2,
		      ProductSubCategoryName: ''
		   })  
}

componentDidMount() {
		fetch('/product/category/clothing')
		.then(res => res.json())
		.then(data => {
			if(data.data.cod === '404') {
				this.setState({
					isLoading: false,
					cityNotFound: '404'
				})
			} else {
			   // Determine weather icon
			   let productId = data.data.Products.id;

			     this.setState({
			        id: productId,
			        ProductName: data.data.Products.ProductName,
			        Description: data.data.Products.Description,
                    Price: data.data.Products.Price,
                    img: ""
			     });
			}
		})
		.catch(err => {
		   console.log(err);
		})	
	}


  render() {
    return(
        <div>
      <div className="accessories">
        <div className="accessories-title">
          <h4>Accessories</h4>
        </div>
        <div className="items">
         {this.state.map((product) => {
              return(
                <div className="item">
                  <Link to={`/products/:${product.id}`}>
                  <div className="product-img">
                    <img alt={product.ProductName} src={product.img} />
                  </div>
                  <div className="product-details">
                    <h2 id="product-name">{product.ProductName}</h2>
                    <h4 id="product-description">{product.Description}</h4>
                  </div>
                  </Link>
                  <div className="price-add">
                    <h5 id="product-price">${product.Price}</h5>
                    <AddShoppingCartIcon small onClick={() => this.addProduct(product)} id="add-icon">add_shopping_cart</AddShoppingCartIcon>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>
      </div>
    );
  }
}

export default Accessories;
