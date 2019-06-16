import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TwitterShareButton } from "react-twitter-embed";

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

const Fighters = ({ battleChallangers, hastagBattle, slug }) => {
  const classes = useStyles();
  return (
    <div className="battle-fighters">
      {battleChallangers.map((x, i) => (
        <div key={x.id}>
          <div className="hashtag">#{x.hashtag}</div>
          <div className="twitter-share">
            <TwitterShareButton
              url={window.location.href}
              options={{
                text: "#" + hastagBattle + " #" + x.hashtag,
                // via: "saurabhnemade",
                size: "large",
                // screenName: "Clique aqui para compartilhar",
              }}
            />
          </div>
          <div className="fighter-image">
            <img
              alt="personagem"
              className={classes.flipImage}
              src={x.challanger.avatar}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fighters;
