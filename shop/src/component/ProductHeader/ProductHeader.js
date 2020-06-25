import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ProductsHeader extends Component {
  state = {
    openPriceDialog: false,
  };

  render() {
    let { parsedQS, totalItemsCount, updateQueryString } = this.props;

    // Grab some values from the query string
    let usePriceFilter = parsedQS.usePriceFilter === "true";
    let minPrice = parsedQS.minPrice || 0;
    let maxPrice = parsedQS.maxPrice || 1000;
    let sortValue = parsedQS.sortValue || "lh";
    let keyword = parsedQS.term;
    let category = parsedQS.category;
    let gender = parsedQS.gender;

    let subtitle = (
      <React.Fragment>
        <span style={{ fontSize: 12, color: "gray", marginTop: 5 }}>
          {totalItemsCount +
            " result" +
            (totalItemsCount === 1 ? " " : "s ") +
            (keyword ? "for " : "")}
        </span>
        {keyword && (
          <span
            style={{
              fontWeight: "bold",
              fontSize: 12,
              color: "gray",
              marginTop: 5,
            }}
          >
            {keyword}
          </span>
        )}
      </React.Fragment>
    );

    return (
      <div>
        <div style={{ padding: 10, display: "flex", alignItems: "center" }}>
          <div style={{ flex: 2, fontSize: 24 }}>
            <div>{ category ? category.toUpperCase() : "All Products"}</div>
            {subtitle}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductsHeader);
