import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {AccountCircleIcon} from '@material-ui/icons/AccountCircle';
import {LocalMallIcon} from '@material-ui/icons/LocalMall';
import {FavoriteBorderIcon} from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
  Tab: {
    fontSize: .3,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,

  }
});

 class IconLabelTabs extends React.Component {
   render(){
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab icon={FavoriteBorderIcon} label="RECENTS" />
        {/* <Tab icon={<LocalMallIcon />} label="FAVORITES" />
        <Tab icon={<AccountCircleIcon />} label="NEARBY" /> */}
      </Tabs>
      <div>

      
      
      </div>

  );
}
 }

 export default IconLabelTabs;
