import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Title from "./Title";

let styles = {
  root: {
    textAlign: "center",
    width: "200px",
    display: "inline-block",
    margin: "auto 15px",
    "& img": {
      width: "100%",
      borderRadius: "50%",
      border: "5px solid #ba5563",
      boxShadow: "2px 4px 0px yellow",
    },
    "& a": {
      display: "inline-block",
    },
  },
  role: {
    fontSize: "14px",
    color: "#fff",
    textShadow: "1px 1px 0px #000",
  },
};

class ImageAvatars extends Component {
  render() {
    const { classes, name, pic, button } = this.props;

    return (
      <div className={classes.root}>
        <img alt={name} src={"/img/" + pic} />
        <Title h={"h3"} text={name} />
        <div className={classes.role}>{button}</div>
      </div>
    );
  }
}

export default withStyles(styles)(ImageAvatars);
