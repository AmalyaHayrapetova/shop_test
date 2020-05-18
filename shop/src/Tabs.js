import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { MdShoppingCart } from "react-icons/md";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import "./css/styles.css";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function CenteredTabs() {
  const classes = useStyles();

  return (
    <div className="TabsSection">
      <Tabs className={classes.root}>
        <Tab label="CLOTHING" />
        <Tab label="SHOES" />
        <Tab label="ACCESSORIZE" />
        <Tab label="BRIDAL" />
        <Tab label="STORES" />
        <Tab label="BLOG" />
      </Tabs>
    </div>

    // <IconButton>
    //   <SearchIcon />
    // </IconButton>
  );
}
