import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import { NavLink } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(0),
    position: "relative",
    height: "60px",
  },
  tabs: {
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(0),
    scrollButtons: "auto",
    indicator: {
      backgroundColor: "white",
    },
  },
  paper: {
    height: "70px",
  },
}));

const items = [
  { pathName: "/product-list/?gender=men", label: "MEN" },
  { pathName: "/product-list/?gender=women", label: "WOMEN" },
  { pathName: "/product-list/?gender=boys", label: "BOY" },
  { pathName: "/product-list/?gender=girls", label: "GIRL" },
  { pathName: "/stores", label: "STORES" },
];

class CenterTabs extends Component {
  state = {
    value: 0,
    open: false,
    anchorEl: null,
  };

  handleMenuOpen = (index, event) => {
    const { currentTarget } = event;
    this.setState({
      open: true,
      anchorEl: currentTarget,
      value: index,
    });
  };

  handleMenuClose = () => {
    this.setState({
      open: false,
      anchorEl: null,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div
        className={classes.root}
        onMouseLeave={this.handleMenuClose.bind(this)}
      >
        <CssBaseline />
        <AppBar position="static">
          <Paper position="static" className={classes.paper}>
            <Tabs
              centered
              value={this.state.value}
              aria-label="nav tabs example"
              className={classes.tabs}
            >
              {items.map((item, index) => (
                <NavLink
                  to={item.pathName}
                  style={{
                    textDecoration: "none",
                    color: "rgb(32, 32, 34)",
                  }}
                >
                   <Tab
                    key={index}
                    onMouseEnter={this.handleMenuOpen.bind(this, index)}
                    data-key={index}
                    classes={{ root: classes.tabItem }}
                    label={item.label}
                    aria-owns={this.state.open ? "menu-list-grow" : undefined}
                    aria-haspopup={"true"}
                  /> 
                </NavLink>
              ))}{" "}
            </Tabs>
            {/* <Popper
              anchorEl={this.state.anchorEl}
              id="menu-list-grow"
              placement="bottom"
              open={this.state.open}
            >
              <div role="tabpanel">
                <Paper position="static">
                  {subItems.map((item, index) => (
                    <Box p={2}  key={index} display="inline-block">
                      <Typography>{item}</Typography>
                    </Box>
                  ))}
                </Paper>
              </div>
            </Popper> */}
          </Paper>
        </AppBar>
      </div>
    );
  }
}

const MainCategories = connect()(CenterTabs);
export default withStyles(useStyles)(MainCategories);
