import React from "./node_modules/react";
import { makeStyles } from "./node_modules/@material-ui/core/styles";

const useStyles = makeStyles({
  battleAudience: {
    display: "flex",
    justifyContent: "space-evenly",
  },
});

const Audience = ({ tweets = [] }) => {
  const classes = useStyles();
  return (
    <div className={classes.battleAudience}>
      {tweets.map((x, i) => (
        <p key={i}>{x} tweets</p>
      ))}
    </div>
  );
};

export default Audience;
