import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import image1 from "../../images/25041.jpg";
import Slideshow from "./SlideShow"

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    // marginTop: theme.spacing(10),
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    textAlign: "center",

  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    textAlign: "center",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(30),
      paddingRight: 0,
    },
  },
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();

  return (
    <div>
      <Paper
        className={classes.mainFeaturedPost}
         style={{ backgroundImage: {image1} }}
      >
      {/* <Slideshow> */}
        {/* Increase the priority of the hero background image */}
        {/* {<Image style={{ display: "none" }} src={image1} alt="test" />} */}
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                Shopaholic
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                Let's do shopping!
              </Typography>
              {/* <Link variant="subtitle1" href="#">
              {post.linkText}
            </Link> */}
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
