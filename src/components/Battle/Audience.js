import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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
