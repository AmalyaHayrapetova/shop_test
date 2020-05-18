import React from "react";
import "./css/styles.css";
import UserIcon from "./images/user.png";
import SearchIcon from "./images/search.png";
import BagIcon from "./images/bag.png";
import CenteredTabs from "./Tabs";
import { MdShoppingCart } from "react-icons/md";
import { useState } from "react";
import "./css/header.css";
import ShoppingCart from "./ShoppingCart"
import history from './history';

class Header extends React.Component {

  openShoppingCartHandler= () => {


  }

  render() {
    return (
      <header>
        <div className="MainHeader">
          <div className="Title">
            <h1 className="title">Shopoholic.</h1>
            <link
              href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;900&display=swap"
              rel="stylesheet"
            />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
          </div>
        </div>

        <div className="CategoryTabsContainer">
          <nav className="CategoryTabsNavigation">
            <div className="CategoriesMenu">
              <div className="CategoriesMain">
                <div className="CategoryContainer">
                  <a className="Catgory" data-comp="LinkAnimate" href="/clothing">
                    <span className="CategoryTab"> CLOTHING </span>
                  </a>
                </div>

                <div className="CategoryContainer">
                  <a className="Catgory" data-comp="LinkAnimate" href="/shoes">
                    <span className="CategoryTab"> SHOES </span>
                  </a>
                </div>

                <div className="CategoryContainer">
                  <a className="Catgory" data-comp="LinkAnimate" href="/accessorize">
                    <span className="CategoryTab"> ACCESSORIZE </span>
                  </a>
                </div>

                <div className="CategoryContainer">
                  <a className="Catgory" data-comp="LinkAnimate" href="/bridal">
                    <span className="CategoryTab"> BRIDAL </span>
                  </a>
                </div>

                <div className="CategoryContainer">
                  <a className="Catgory" data-comp="LinkAnimate" href="/shoes">
                    <span className="CategoryTab"> STORES </span>
                  </a>
                </div>

                <div className="CategoryContainer">
                  <a className="Catgory" data-comp="LinkAnimate" href="/blog">
                    <span className="CategoryTab"> BLOG </span>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="IconsContainer">
          <div className="SearchContainer">
            <div className="SearchFieldContainer"></div>
            <button className="SearchButton" aria-label="Search">
              <svg width="14" height="14" viewBox="0 0 14 14">
                <path
                  d="M13.787 12.752l-3.451-3.466a5.519 5.519 0 0 0 1.373-3.634C11.71 2.536 9.083 0 5.855 0 2.626 0 0 2.536 0 5.652c0 3.117 2.626 5.653 5.855 5.653a5.936 5.936 0 0 0 3.354-1.023l3.477 3.492c.146.146.341.226.55.226a.774.774 0 0 0 .53-.206.72.72 0 0 0 .021-1.042zM5.855 1.475c2.386 0 4.327 1.874 4.327 4.177 0 2.304-1.941
         4.178-4.327 4.178S1.527 7.956 1.527 5.652c0-2.303 1.942-4.177 4.328-4.177z"
                ></path>
              </svg>
            </button>
          </div>
          <button className="OpenCart" aria-label="Open Cart" onClick={() => history.push('/ShoppingCart')} >
            <svg width="16px" height="14px" viewBox="0 0 16 14">
              <MdShoppingCart className="react-icons" size={20} />
            </svg>
          </button>

        </div>
      </header>
    );
  }
}
export default Header;
