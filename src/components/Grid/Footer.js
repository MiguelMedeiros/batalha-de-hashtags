import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    paddingLeft: "15px",
    paddingRight: "15px",
    backgroundColor: "#282c34",
    color: "#fff",
    fontFamily: "Luckiest Guy",
    height: "50px"
  },
  link: {
    marginRight: "10px",
    color: "yellow",
    fontFamily: "Roboto",
    textDecoration: "none",
    top: "1px",
    position: "relative"
  },
  copy: {
    fontSize: "20px",
    marginRight: "6px;"
  },
  grow: {
    flexGrow: 1
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      Batalha de Hashtags
      <div className={classes.grow} />
      <Link to={"/api"} className={classes.link}>
        API v1.0
      </Link>
      <span className={classes.copy}>&copy;</span> 2019
    </footer>
  );
}
