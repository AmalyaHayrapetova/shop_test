import React from "react";

class ShoppingCart extends React.Component {
  render() {
    return (
      <div className="ShoppingCartContainer">
        <div className="ShoppingCartMain">
          <aside data-camp="Cart" className="Aside">
            <header className="ShoppingCartHeader">
              <button
                aria-label="Close Shopping Cart"
                className="ShoppingCartClose"
              >
                <svg viewBox="0 0 20 20">
                  <path
                    d="M17 9H5.414l3.293-3.293a.999.999 0 1 0-1.414-1.414l-5 5a.999.999 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L5.414 11H17a1 1 0 1 0 0-2"
                    fill="#31373D"
                  ></path>
                </svg>
                <div className="ShoppingCartTitle">Your Shopping Cart </div>
              </button>
            </header>

            <section>
              <div className="EmptyCartContainer">
                <div className="EmptyTitle">
                  {" "}
                  Your cart is currently empty!{" "}
                </div>
                <a className="BrowseAll" href="./SignIn">
                  {" "}
                  Browse All{" "}
                </a>
              </div>
            </section>
          </aside>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;