import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const ColorLinearProgress = withStyles({
  colorPrimary: {
    width: "250px",
    margin: "auto",
    backgroundColor: "#ba5563",
  },
  barColorPrimary: {
    backgroundColor: "#f0f700",
  },
})(LinearProgress);

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    color: "#000",
    margin: "auto",
    textAlign: "center",
    "& h1": {
      fontFamily: "Bangers",
      fontSize: "35px",
      paddingTop: "25%",
      margin: "0",
      textShadow: "2px 3px 0px yellow",
      color: "#ba5563",
      marginBottom: "10px",
    },
  },
}));

function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Carregando</h1>
      <ColorLinearProgress />
    </div>
  );
}

export default Loading;
