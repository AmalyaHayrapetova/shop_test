import React from "react";
import "./css/category_drop_drown.css";

function BridalCategoryLayout() {
  return (
    <div className="dropdown">
      <div className="dropdown-content">
        <div className="dropdon-inner">
          <div className = "category-gender">
            <a className="gender" href="/women/clothing">Women</a>
            <ul>
              <li>
                <a href="/women/clothing/dresses">Dresses </a>{" "}
              </li>
              <li>
                <a href="/women/clothing/shirts-tops">Shirts&Tops </a>{" "}
              </li>
              <li>
                <a href="/womenc/clothing/jeans">Jeans </a>{" "}
              </li>
              <li>
                <a href="/women/clothing/sweaters">Sweaters </a>{" "}
              </li>
              <li>
                <a href="/women/clothing/pants">Pants </a>{" "}
              </li>
              <li>
                <a href="/women/clothing/sleapwear">Sleapwear </a>{" "}
              </li>
              <li>
                <a href="/women/clothing/shors">Shorts </a>{" "}
              </li>
              <li>
                <a href="/women/clothing/shors">T-Shirts </a>{" "}
              </li>
              <li>
                <a href="/women/clothing/jumpsuites">Jump Suites </a>{" "}
              </li>
            </ul>
          </div>

          <div className = "category-gender">
            <a className="gender" href="/men/clothing">Men</a>
            <ul>
              <li>
                <a href="/men/clothing/t-shirts">T-Shirts </a>{" "}
              </li>
              <li>
                <a href="/men/clothing/jeans"> Jeans</a>{" "}
              </li>
              <li>
                <a href="/men/clothing/shorts">Shorts </a>{" "}
              </li>
              <li>
                <a href="/men/clothing/sweaters">Sweaters</a>{" "}
              </li>
              <li>
                <a href="/men/clothing/pants">Pants </a>{" "}
              </li>
              <li>
                <a href="/men/clothing/coats">Coats</a>{" "}
              </li>
              <li>
                <a href="/men/clothing/shors">Polos </a>{" "}
              </li>
              <li>
                <a href="/men/clothing/jumpsuites">Activwear</a>{" "}
              </li>
            </ul>
          </div>
          <div className = "category-gender">
            <a className="gender" href="/girls/clothing"></a>
            <ul>
              <li>
                <a href="/girls/clothing/jeans">Jeans </a>{" "}
              </li>
              <li>
                <a href="/girls/clothing/dresses"> Dresses</a>{" "}
              </li>
              <li>
                <a href="/girls/clothing/tops-tshirts">Tops & T-Shirts </a>{" "}
              </li>
              <li>
                <a href="/girls/clothing/sweaters">Sweaters</a>{" "}
              </li>
              <li>
                <a href="/girls/clothing/jackets">Jackets </a>{" "}
              </li>
              <li>
                <a href="/girls/clothing/coats">Coats</a>{" "}
              </li>
            </ul>
          </div>
          <div className ="category-gender">
            <a className="gender" href="/boys/clothing"></a>
            <ul>
              <li>
                <a href="/boys/clothing/jeans">Jeans </a>{" "}
              </li>
              <li>
                <a href="/boys/clothing/dresses"> Polos</a>{" "}
              </li>
              <li>
                <a href="/boys/clothing/tops-tshirts">Tops & T-Shirts </a>{" "}
              </li>
              <li>
                <a href="/boys/clothing/sweaters">Sweaters</a>{" "}
              </li>
              <li>
                <a href="/boys/clothing/jackets">Jackets </a>{" "}
              </li>
              <li>
                <a href="/boys/clothing/coats">Coats</a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BridalCategoryLayout;
