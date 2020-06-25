import React from "react";
import { Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

title:{
    marginTop: 40,
    textAlign: 'center',
        marginBottom: 30,
    //   fontFamily: [
    //   '"Segoe UI"',
    //   'sans-serif',
    // ].join(','),


}

}));

export default function Titles({ gender, subCategory }) {
      const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" noWrap className={classes.title}>
        {gender}'s {subCategory}
      </Typography>
    </div>
  );
}
