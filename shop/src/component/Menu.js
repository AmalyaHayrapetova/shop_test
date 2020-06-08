import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import ReactHoverObserver from 'react-hover-observer';
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(0),
    position:"relative",
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
  link: {
    color: "inherit",
    textDecoration: "inherit",
    padding: theme.spacing(2),
  },
  tabpanel: {
    textAlign: "center",
  },
}));

function TabPanel(props) {
  const { children, value, index, isHiden, ...other } = props;

  return (
    <div
      role="tabpanel"
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {isHiden === true && (
        <Box p={3} bgcolor="#f5f5f5">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function CenterTabs() {
  const classes = useStyles();
  const [value, setValue, open] = React.useState(0);
     var isHovering = false;
  const handleChange = (event, newValue, open) => {
    setValue(newValue);
  };

  const onMouseOver = () =>{
      isHovering=true;
  }

  return (
    <div className={classes.root}>
    <CssBaseline/>
      <Paper position="static" className={classes.paper}>
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          className={classes.tabs}
        //   onMouseOver={onMouseOver}
        >
          <LinkTab label="MEN" {...a11yProps(0)} />
          <LinkTab label="WOMEN" {...a11yProps(1)} />
          <LinkTab label="BOY" {...a11yProps(2)} />
          <LinkTab label="GIRL" {...a11yProps(3)} />
          <LinkTab label="BLOG" {...a11yProps(4)} />
        </Tabs>
      </Paper>
        <TabPanel value={value} index={0} className={classes.tabpanel}>
          <Link to="/women/clothing" className={classes.link}>
            Clothings
          </Link>
          <Link to="/women/shoes" className={classes.link}>
            Shoes
          </Link>
          <Link to="/women/accessorises" className={classes.link}>
            Accessorises
          </Link>
          <Link to="/women/face-and-body" className={classes.link}>
            Face&Body
          </Link>
          <Link to="/women/outlet" className={classes.link}>
            Outlet
          </Link>
          <Link to="/women/outlet" className={classes.link}>
            Brands
          </Link>
        </TabPanel>
      
      <TabPanel value={value} index={1}>
        Page Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Page Three
      </TabPanel>
          </div>
  );
}
