import React from "react";
import "./css/product_list";

class ProductsList extends React.Component {
  render() {
    return (
      <div className="ProductsContainer">
        <div className="FilterContainer">
          <div className="DesktopFilter"></div>
        </div>
        
        <div className="ProductLists">
          <ul className="lists">


            <li className="collection-product">
              <div className="ProductCard">
                <div className="ProductImage">
                  <img className="ProductImage" href={this.props.image} />
                </div>
                <div className="ProductDescription">
                  <a href="/product" className="product-card-link">
                    <h3 className="product-name"> Name </h3>
                    <span className="ProductPrice"> AMD14000 </span>
                  </a>
                </div>
              </div>
            </li>

            <li className="collection-product">
              <div className="ProductCard">
                <div className="ProductImage">
                  <img className="ProductImage" href={this.props.image} />
                </div>
                <div className="ProductDescription">
                  <a href="/product" className="product-card-link">
                    <h3 className="product-name"> Name </h3>
                    <span className="ProductPrice"> AMD14000 </span>
                  </a>
                </div>
              </div>
            </li>


          </ul>
        </div>
      </div>
    );
  }
}
