import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    border: "4px solid #fff",
    padding: "0px",
    background: "#ba5563",
    width: "100%",
    margin: "10px 1% 0px 10px",
    borderRadius: "0px 10px 10px 0px",
    "&:first-child": {
      margin: "10px 10px 0px 1%",
      borderRadius: "10px 0px 0px 10px"
    }
  },
  life: props => ({
    width: props.width,
    float: props.float,
    background: "yellow",
    height: "30px"
  }),
  flipImage: {
    transform: "scaleX(-1)"
  }
});

export default function LifeBar({ battleChallanger, floatPosition = [] }) {
  let width =
    (battleChallanger.health_point / battleChallanger.max_health_point) * 100;

  // if (width > 99.9) {
  //   width = 95;
  // }
  const props = {
    width: width + "%",
    float: floatPosition
  };
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <div className={classes.life} />
    </div>
  );
}
