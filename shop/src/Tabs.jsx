import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  Tab :{
      fullWidth :false
  }
});

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        // event.
        console.log("Tesy");
      }}
      {...props}
    />
  );
}

class CenteredTabs extends React.Component{
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  render() {
  // const classes = useStyles();

  return (
    // <Paper className={classes.root}>
    <Tabs
    //   value={value}
      // onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      centered

    >
      <LinkTab label="CLOTHING"/>
      <Tab label="SHOES" />
      <Tab label="ACCESSORIZE" />
      <Tab label="BRIDAL" />
      <Tab label="STORES" />
      <Tab label="BLOG" />
    </Tabs>
    // </Paper>
  );
}
}
export default CenteredTabs;
