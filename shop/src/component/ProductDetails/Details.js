import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CircularProgress from "@material-ui/core/CircularProgress";
import { addItemInCart } from "../../Redux/Actions";
import Api from "../../Api";
import Item from "../Item/Item";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/styles";
import Menu from "../CategoryMenu/CategoryFilter";
import HoverRating from "../Rating.js";

const useStyles = (theme) => ({
  formControl: {
    marginTop: 100,
    width: 200,
  },
  selectEmpty: {
    marginTop: 20,
  },
});

class ConnectedDetails extends Component {
  constructor(props) {
    super(props);

    this.isCompMounted = false;

    this.state = {
      relatedItems: [],
      quantity: 1,
      item: null,
      itemLoading: false,
      size: null,
      errorMessage: "",
      count: 0,
      color: null,
    };
  }

  async fetchProductAndRelatedItems(productId) {
    this.setState({ itemLoading: true });

    let item = await Api.getItemUsingID(productId);

    let relatedItems = await Api.searchItems({
      category: item.category,
      gender:item.gender
    });

    // Make sure this component is still mounted before we set state..
    if (this.isCompMounted) {
      this.setState({
        item,
        quantity: 1,
        relatedItems: relatedItems.data.filter(x => x.id !== item.id),
        itemLoading: false,
      });
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // If ID of product changed in URL, refetch details for that product
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.fetchProductAndRelatedItems(this.props.match.params.id);
    }
  }

  componentDidMount() {
    this.isCompMounted = true;
    this.fetchProductAndRelatedItems(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.isCompMounted = false;
  }

  //fixme
  checkIsSizeAvailable(sizeQuantity, quantity) {
    return sizeQuantity >= quantity;
  }

  render() {
    const { classes } = this.props;

    if (this.state.itemLoading) {
      return <CircularProgress className="circular" />;
    }

    if (!this.state.item) {
      return null;
    }

    return (
      <div style={{ padding: 10, display: "flex" }}>
        <div>
          <Menu />
        </div>
        <div style={{ float: "right", marginLeft: "200px" }}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                marginBottom: 20,
                marginTop: 10,
                fontSize: 22,
              }}
            >
              {this.state.item.name}
            </div>
            <HoverRating itemValue={this.state.item.rating} />
          </div>
          <div style={{ display: "flex" }}>
            <img
              src={this.state.item.imageUrls[0]}
              alt=""
              width={500}
              height={500}
              style={{
                border: "1px solid lightgray",
                borderRadius: "5px",
                objectFit: "cover",
                padingTop: 10,
              }}
            />
            <div
              style={{
                flex: 1,
                marginLeft: 20,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontSize: 16,
                }}
              >
                Price: {this.state.item.price} AMD
              </div>
              {this.state.item.popular && (
                <div style={{ fontSize: 14, marginTop: 5, color: "#228B22" }}>
                  (Popular product)
                </div>
              )}

              <div>
                <FormControl
                  required
                  variant="outlined"
                  className={classes.formControl}
                  style={{ marginTop: 10 }}
                >
                  <InputLabel htmlFor="outlined-age-native-simple">
                    {" "}
                    Please Select
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    native
                    onChange={(e) => {
                      this.setState({ size: e.target.value });
                    }}
                    value={this.state.size}
                    label="Size"
                    inputProps={{
                      name: "size",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    {this.state.item.sizes.map((size, index) => {
                      if (size.count > 0)
                        return (
                          <option key={size.size} value={size.size}>
                            {size.size}
                          </option>
                          //                   return (
                          //   <MenuItem disabled value="">
                          //     {size.size}
                          //     {" - Not Available "}
                          //   </MenuItem>
                          // );
                        );
                      return (
                        <option disabled key={size.size} value={size.size}>
                          {size.size}
                          {" - Not Available "}
                        </option>
                      );
                    })}
                  </Select>
                  <FormHelperText>Required</FormHelperText>
                </FormControl>
              </div>
              <div
                className="flex-row"
                style={{
                  border: "1px solid rgb(0, 0, 0, 0.23)",
                  padding: "18.5px 14px",
                  borderRadius: 4,
                  marginTop: 20,
                  overflowX: "hidden",
                  overflowY: "auto",
                }}
              >
                {this.state.item.colors.map((color, index) => {
                  return (
                    <Button
                      style={{
                        borderRadius: "50%",
                        backgroundColor:  "red",
                      }}
                      onClick={(e) => {
                        this.setState({ color: color });
                      }}
                    ></Button>
                  );
                })}
              </div>
              <TextField
                type="number"
                value={this.state.quantity}
                style={{ marginTop: 20, marginBottom: 10, width: 70 }}
                label="Quantity"
                inputProps={{ min: 1, max: 4, step: 1 }}
                onChange={(e) => {
                  this.setState({ quantity: parseInt(e.target.value) });
                }}
              />
              <Button
                style={{ width: 170, marginTop: 5 }}
                color="primary"
                variant="outlined"
                onClick={() => {
                  if (this.state.size !== null) {
                    console.log(this.state.size);
                    this.props.dispatch(
                      addItemInCart({
                        ...this.state.item,
                        quantity: this.state.quantity,
                        size: this.state.size,
                      })
                    );
                  }
                }}
              >
                Add to Cart <AddShoppingCartIcon style={{ marginLeft: 5 }} />
              </Button>
            </div>
          </div>
          <div>
            {this.state.item.imageUrls.map((image) => {
              return (
                <img
                  src={image}
                  alt=""
                  width={70}
                  height={70}
                  style={{
                    border: "1px solid lightgray",
                    objectFit: "cover",
                    spacing: 10,
                    margin: "25px 10px",
                  }}
                />
              );
            })}
          </div>
          {/* Product description */}
          <div
            style={{
              marginTop: 20,
              marginBottom: 20,
              fontSize: 22,
            }}
          >
            <Typography variant="h6">Product Details</Typography>
          </div>
          <div
            style={{
              maxHeight: 200,
              fontSize: 13,
              overflow: "auto",
            }}
          >
            <Grid container spacing={2} style={{ backgroundColor: "" }}>
              <Grid item xs={12} md={6}>
                <List>
                  {this.state.item.description.map((desc) => {
                    return (
                      <ListItem>
                        <ListItemText primary={desc} />
                      </ListItem>
                    );
                  })}
                </List>
              </Grid>
            </Grid>
          </div>

          {/* Relateditems */}
          <div
            style={{
              marginTop: 20,
              marginBottom: 10,
              fontSize: 22,
            }}
          >
            Related Items
          </div>
          {this.state.relatedItems.slice(0, 3).map((x) => {
            return <Item key={x.id} item={x} />;
          })}
        </div>
      </div>
    );
  }
}

let Details = connect()(ConnectedDetails);
export default withStyles(useStyles)(Details);
