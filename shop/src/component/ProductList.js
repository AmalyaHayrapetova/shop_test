import React, { Component } from "react";
import Product from "./Product";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Titles from "./Titles";
import storeProducts from "../data/data.js";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import Menu from "./CategoryMenu/CategoryFilter";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 50,
    display: "inline-block",
  },
});

class ProductList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Menu />
        <CssBaseline />
        <Product />
        {/* <ProductConsumer>
            {(value) => {
                return <Titles gender={value} />;
            }}
          </ProductConsumer> */}
      </div>
    );
  }
}

ProductList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductList);
