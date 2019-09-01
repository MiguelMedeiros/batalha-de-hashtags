import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: "18px",
    color: "#000",
    textShadow: "1px 0px 0px white"
  }
}));

function Text({ children }) {
  const classes = useStyles();
  return <p className={classes.root}>{children}</p>;
}

export default Text;
