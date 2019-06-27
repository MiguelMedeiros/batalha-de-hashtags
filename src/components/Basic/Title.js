import React, { Component } from "./node_modules/react";
import { withStyles } from "./node_modules/@material-ui/core/styles";

// $font-1: "Permanent Marker";
// $font-2: "Luckiest Guy";
// $font-3: "Bangers";
// $font-4: "Schoolbell", cursive;

let styles = {
  root: {
    fontFamily: "Bangers",
    textShadow: "2px 3px 0px yellow",
    color: "#ba5563",
    "& h1": {
      margin: "15px auto",
      fontSize: "30px",
      "@media screen and (min-width: 426px)": {
        fontSize: "50px",
      },
    },
    "& h2": {
      margin: "10px auto",
      fontSize: "35px",
      textShadow: "2px 3px 0px #ba5563",
      color: "yellow",
    },
    "& h3": {
      margin: "5px auto",
      fontSize: "25px",
      textShadow: "2px 3px 0px yellow",
      color: "#ba5563",
    },
  },
};
class Title extends Component {
  render() {
    const { classes, text, h } = this.props;
    return (
      <div className={classes.root}>
        {h === "h1" && <h1>{text}</h1>}
        {h === "h2" && <h2>{text}</h2>}
        {h === "h3" && <h3>{text}</h3>}
        {h === "h4" && <h4>{text}</h4>}
        {h === "h5" && <h5>{text}</h5>}
        {h === "h6" && <h6>{text}</h6>}
      </div>
    );
  }
}

export default withStyles(styles)(Title);
