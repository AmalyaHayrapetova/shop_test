import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Products from "../data/data.js";
import GridList from "@material-ui/core/GridList";
import queryString from "query-string";
import CircularProgress from "@material-ui/core/CircularProgress";
import Item from "./Item/Item";
import Paging from "./paging/Paging";
import ProductsHeader from "./ProductHeader/ProductHeader"

import Api from "../Api"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(4),
    marginLeft: theme.spacing(50),
    display: "inline",
  },
  main: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(10),
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 350,
  },
  img: {
    marginLeft: "20",
    marginRight: "20",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },

  // grid: {
  //   diraction: "row",

  // },
}));

class Product extends Component {
  //const classes = useStyles();
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      totalItemsCount: null,
      items: [],
    };
    this.updateQueryString = this.updateQueryString.bind(this);
  }

  async fetchData() {
    this.setState({ loading: true });

    // Parse the query string
    let qsAsObject = queryString.parse(this.props.location.search);

    let results = await Api.searchItems(qsAsObject);

    this.setState({
      items: results.data,
      loading: false,
      totalItemsCount: results.totalLength,
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  updateQueryString(newValues) {
    let currentQS = queryString.parse(this.props.location.search);
    let newQS = { ...currentQS, ...newValues };
    this.props.history.push("/?" + queryString.stringify(newQS));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let currentQS = queryString.parse(this.props.location.search);
    let oldQS = queryString.parse(prevProps.location.search);

    let areSameObjects = (a, b) => {
      if (Object.keys(a).length !== Object.keys(b).length) return false;
      for (let key in a) {
        if (a[key] !== b[key]) return false;
      }
      return true;
    };

    // We will refetch products only when query string changes.
    if (!areSameObjects(currentQS, oldQS)) {
      this.fetchData();
    }
  }

  render() {
    let parsedQS = queryString.parse(this.props.location.search);

    if (this.state.loading) {
      return <CircularProgress className="circular" />;
    }

    return (
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <ProductsHeader
          parsedQS={parsedQS}
          updateQueryString={this.updateQueryString}
          totalItemsCount={this.state.totalItemsCount}
        />

        <div style={{ flex: 1 }}>
          {this.state.items.map((item) => {
            return <Item key={item.id} item={item} />;
          })}
        </div>

        <Paging
          parsedQS={parsedQS}
          updateQueryString={this.updateQueryString}
          totalItemsCount={this.state.totalItemsCount}
        />
      </div>
    );
  }
}

export default Product;

/*
    <div className={classes.root}>
      <Grid
        container
        spacing={6}
        direction="row"
        justify="space-around"
      >
        {Products.map((product) => {
          //   if (product.category === cat && product.gender === gend)
          return (
            <Paper className={classes.main}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src={product.img}
                  />
                </ButtonBase>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={6}>
                    <Grid item xs>
                      <Typography variant="body2" gutterBottom>
                        {product.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {product.store}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">{product.price}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          );
        })}
      </Grid>
    </div>
    */
