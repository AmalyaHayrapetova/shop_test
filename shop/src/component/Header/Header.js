import React, { Component } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Header.css";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {  showCartDlg,  logout } from "../../Redux/Actions";
import Auth from "../../Auth";
import Person from "@material-ui/icons/PersonOutline";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import CssBaseline from "@material-ui/core/CssBaseline";
import Input from "@material-ui/core/Input";
import CancelIcon from "@material-ui/icons/Cancel";
import FavoriteIcon from "@material-ui/icons/Favorite";

const mapStateToProps = (state) => {
  return {
    nrOfItemsInCard: state.cartItems.length,
    nrOfItemsInFav: state.favouriteItems.length,
    loggedInUser: state.loggedInUser,
  };
};

// Option items for product categories.
// const categoryOptions = categories.map(x => {
//   return (
//     <MenuItem key={x.name} value={x.name}>
//       {x.name}
//     </MenuItem>
//   );
// });

class ConnectedHeader extends Component {
  state = {
    searchTerm: "",
    anchorEl: null,
    store: ""
  };

  render() {
    let { anchorEl } = this.state;

    return (
      <div className="main">
        <CssBaseline />
        <AppBar
          style={{ background: "#F9A825", padding: 10, position: "static" }}
        >
          <Toolbar>
            <div className="left-part">
              <Typography
                variant="h4"
                noWrap
                style={{ cursor: "default", fontWeight: "bold" }}
                onClick={() => {
                  this.props.history.push("/");
                }}
              >
                Shopaholic
              </Typography>
              <Input
                mdc_style={["dense", "smooth", "search"]}
                placeholder="Search for store and categories..."
                value={this.state.searchTerm}
                icon_opacity={0.3}
                icon_clear={<CancelIcon />}
                icon_start={<SearchIcon />}
                style={{
                  borderRadius: 4,
                  marginLeft: 30,
                  width: 250,
                  marginBottom: 15,
                }}
                onChange={(e) => {
                  this.setState({ searchTerm: e.target.value });
                }}
              />

              <SearchIcon
                type="button"
                style={{ marginLeft: 20 }}
                variant="outlined"
                color="primary"
                onClick={() => {
                  //change
                  this.props.history.push(
                    "/product-list?store=" +
                      this.state.searchTerm.split(" ")[0] +
                      "&subcategory=" +
                      this.state.searchTerm.split(" ")[1]
                  );
                }}
              />
            </div>
            <div className="right-part">
              {!this.props.loggedInUser ? (
                <Button
                  variant="outlined"
                  style={{ marginRight: 20, padding: "5px 15px" }}
                  color="primary"
                  onClick={() => {
                    this.props.history.push("/sign-in");
                  }}
                >
                  Log in
                </Button>
              ) : (
                <Avatar
                  onClick={(event) => {
                    this.setState({ anchorEl: event.currentTarget });
                  }}
                  style={{ backgroundColor: "#3f51b5", marginRight: 10 }}
                >
                  <Person />
                </Avatar>
              )}
              <IconButton
                aria-label="Favourite"
                onClick={() => {
                  this.props.history.push("/saved-items");
                }}
              >
                <Badge badgeContent={this.props.nrOfItemsInFav} color="primary">
                  <FavoriteIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="Cart"
                onClick={() => {
                  this.props.dispatch(showCartDlg(true));
                }}
              >
                <Badge
                  badgeContent={this.props.nrOfItemsInCard}
                  color="primary"
                >
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => {
                  this.setState({ anchorEl: null });
                }}
              >
                <MenuItem
                  onClick={() => {
                    this.setState({ anchorEl: null });
                    this.props.history.push("/profile");
                  }}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    this.setState({ anchorEl: null });
                    this.props.history.push("/order-history");
                  }}
                >
                  Orders
                </MenuItem>
                <MenuItem
                  onClick={() => {
                      this.props.dispatch(logout());
                      this.props.history.push("/");
                      this.setState({loggedInUser : false})
                    this.setState({ anchorEl: null });
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const Header = withRouter(connect(mapStateToProps)(ConnectedHeader));
export default Header;
