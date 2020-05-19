import React from "react";
import "./css/styles.css";
import UserIcon from "./images/user.png";
import SearchIcon from "./images/search.png";
import BagIcon from "./images/bag.png";
import CenteredTabs from "./Tabs";
import { MdShoppingCart } from "react-icons/md";
import { useState } from "react";
import "./css/header.css";
import ShoppingCart from "./ShoppingCart";
import history from "./history";

class Header extends React.Component {
  openShoppingCartHandler = () => {};

  render() {
    return (
      <header>
        <div className="MainHeader">
          <div className="Title">
            <h1 className="title">Shopaholic.</h1>
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
            <ul className="Navigation">
              <li className="Tab">
                <a href="/clothing">CLOTHING</a>
              </li>
              <li className="Tab">
                <a href="/shoes">SHOES</a>
              </li>
              <li className="Tab">
                <a href="/accessorize">ACCESSORIZE</a>
              </li>
              <li className="Tab">
                <a href="/bridal">BRIDAL</a>
              </li>
              <li className="Tab">
                <a href="/stores">STORES</a>
              </li>
              <li className="Tab">
                <a href="/stores">BLOG</a>
              </li>
              <li className="Tab">
                <a href="/account">
                  <svg className="icon AccountIcon" viewBox=" 0 0 19 19">
                    <path
                      d="M7.147 10.746c-2.843-1.363-3.809-4.398-3.024-6.83.744-2.306 2.965-4.015 5.7-3.912 2.333.089 4.544 1.85 5.152 4.173.66 2.518-.46 5.287-3.114 6.566.333.108.653.194.958.314 3.38 1.326 5.427 3.757 6.16 7.275.019.093.023.174.02.286-.004.196-.07.31-.246.346-.173.036-.39-.028-.459-.265-.093-.321-.122-.66-.22-.979-1.105-3.604-3.532-5.833-7.286-6.403-4.942-.752-9.122 2.585-9.997 7.032-.024.122-.03.25-.067.367a.386.386 0 0 1-.442.278.349.349 0 0 1-.275-.42c.738-3.956 3.051-6.533 6.924-7.75l.138-.045c.025-.01.05-.02.078-.033zM4.61 5.598c-.044 2.603 2.075 4.73 4.546 4.888 3.119.199 5.283-2.35 
          5.263-4.847C14.397 2.933 12.256.757 9.546.744 6.81.731 4.617 2.888 4.61 5.598z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="Tab">
                <a href="/cart">
                  <svg className="icon CartIcon" viewBox=" 0 0 17 21">
                    <path
                      d="M12.107 4.524v-2.17c0-1.3-1.034-2.353-2.309-2.354h-3.16C5.365.001 4.332 1.054 4.33 2.354v2.17H.217v14.122C.22 19.946 1.252 21 2.527 21h11.381c1.275-.001 2.308-1.054 2.31-2.354V4.524h-4.11zM5.06 2.354c.001-.89.708-1.61 1.58-1.61h3.16c.871 0 1.578.72 1.58 1.61v2.17h-6.32v-2.17zm10.43 16.292c-.002.89-.709 1.61-1.58 1.61H2.525c-.872 0-1.578-.72-1.58-1.61V5.267H4.33V6.63c0 .205.163.372.364.372a.368.368 0 0 0 .365-.372V5.267h6.32V6.63c0
           .205.162.372.364.372a.368.368 0 0 0 .364-.372V5.267h3.381v13.38z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="Tab">
                <a href="/search">
                  <svg className="icon SearchIcon" viewBox=" 0 0 18 18">
                    <path
                      d="M.735 7.347a6.612 6.612 0 1 1 13.224 0 6.612 6.612 0 0 1-13.224 0m16.804 9.672l-4.75-4.75a7.309 7.309 0 0 0 1.905-4.922 7.347 7.347 0 1 0-7.347
           7.347c1.897 0 3.62-.725 4.923-1.905l4.75 4.75a.367.367 0 1 0 .519-.52"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>

      </header>
    );
  }
}
export default Header;
