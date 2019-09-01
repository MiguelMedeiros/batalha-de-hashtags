import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TwitterShareButton } from "react-twitter-embed";

const useStyles = makeStyles({
  life: props => ({
    width: props.width,
    float: props.float,
    background: "yellow",
    height: "30px"
  }),
  flipImage: {
    transform: "scaleX(-1)"
  },
  battleFighters: {
    display: "flex",
    justifyContent: "space-evenly",
    "& img": {
      maxWidth: "100%"
    }
  },
  hashtag: {
    textShadow: "2px 3px 0px yellow",
    color: "#282c34",
    fontSize: "30px",
    fontFamily: "Bangers",
    display: "block",
    "@media screen and (min-width: 768px)": {
      display: "inline-block"
    }
  },
  twitterShare: {
    margin: "auto 20px",
    top: "3px",
    position: "relative",
    display: "block",
    "@media screen and (min-width: 768px)": {
      display: "inline-block"
    }
  },
  fighterImage: {
    maxHeight: "520px"
  }
});

export default function Fighters({ battleChallangers, hastagBattle, slug }) {
  const classes = useStyles();
  return (
    <div className={classes.battleFighters}>
      {battleChallangers.map((x, i) => (
        <div key={x.id}>
          <div className={classes.hashtag}>#{x.hashtag}</div>
          <div className={classes.twitterShare}>
            <TwitterShareButton
              url={window.location.href}
              options={{
                text: "#" + hastagBattle + " #" + x.hashtag,
                size: "large"
                // via: "saurabhnemade",
                // screenName: "Clique aqui para compartilhar",
              }}
            />
          </div>
          <div className={classes.fighterImage}>
            <img
              alt="personagem"
              className={classes.flipImage}
              src={x.challanger.avatar_right}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
