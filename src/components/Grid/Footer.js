import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

let styles = {
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    paddingLeft: "15px",
    paddingRight: "15px",
    backgroundColor: "#282c34",
    color: "#fff",
    fontFamily: "Luckiest Guy",
    height: "50px",
  },
  link: {
    marginRight: "10px",
    color: "yellow",
    fontFamily: "Roboto",
    textDecoration: "none",
    top: "1px",
    position: "relative",
  },
  copy: {
    fontSize: "20px",
    marginRight: "6px;",
  },
  grow: {
    flexGrow: 1,
  },
};
class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <footer className={classes.root}>
        Batalha de Hashtags
        <div className={classes.grow} />
        <NavLink to={"/api"} className={classes.link}>
          API v1.0
        </NavLink>
        <span className={classes.copy}>&copy;</span> 2019
      </footer>
    );
  }
}

export default withStyles(styles)(Footer);
