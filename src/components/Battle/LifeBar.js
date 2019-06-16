import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  life: props => ({
    width: props.width,
    float: props.float,
    background: "yellow",
    height: "30px",
  }),
  flipImage: {
    transform: "scaleX(-1)",
  },
});

const LifeBar = ({ battleChallanger, floatPosition = [] }) => {
  let width =
    (battleChallanger.health_point / battleChallanger.max_health_point) * 100;

  // if (width > 99.9) {
  //   width = 95;
  // }
  const props = {
    width: width + "%",
    float: floatPosition,
  };
  const classes = useStyles(props);
  return (
    <div className="lifebar">
      <div className={classes.life} />
    </div>
  );
};

export default LifeBar;
