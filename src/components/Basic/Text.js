import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

let styles = {
  root: {
    fontSize: "18px",
    color: "#000",
    textShadow: "1px 0px 0px white",
  },
};

class Text extends Component {
  render() {
    const { classes, children } = this.props;
    return <p className={classes.root}>{children}</p>;
  }
}

export default withStyles(styles)(Text);
