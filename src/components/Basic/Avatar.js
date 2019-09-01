import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    width: "275px",
    display: "inline-block",
    margin: "15px",
    transition: "100ms all",
    "& img": {
      width: "100%",
      borderRadius: "50%",
      border: "5px solid #ba5563",
      boxShadow: "2px 4px 0px yellow"
    },
    "& a": {
      display: "inline-block"
    }
  },
  role: {
    fontSize: "14px",
    color: "#fff",
    textShadow: "1px 1px 0px #000"
  }
}));

function ImageAvatars(props) {
  const classes = useStyles();

  const { name, pic, button } = props;

  return (
    <div className={classes.root}>
      <img alt={name} src={"/img/" + pic} />
      <Title h={"h3"} text={name} />
      <div className={classes.role}>{button}</div>
    </div>
  );
}

export default ImageAvatars;
