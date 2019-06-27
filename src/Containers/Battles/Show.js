import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import Loading from "./../../Components/Basic/Loading";
import LifeBar from "./../../Components/Battle/LifeBar";
import Fighters from "./../../Components/Battle/Fighters";
import Audience from "./../../Components/Battle/Audience";
import Tweets from "./../../Components/Battle/Tweets";

let styles = {
  contentPages: {
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "0 30px",
  },
  battleContainer: {
    textAlign: "center",
    width: "100%",
    padding: "1rem 0",
    alignItems: "stretch",
    display: "flex",
    flexDirection: "column",
  },
  battleTop: {
    display: "flex",
    justifyContent: "space-between",
    height: "48px",
    marginBottom: "20px",
  },
  battleKo: {
    fontFamily: "Bangers",
    fontSize: "55px",
    transform: "rotate(5deg)",
    marginTop: "-1.25vh",
    textShadow: "2px 3px 0px #ba5563",
    color: "yellow",
  },
  battleName: {
    fontSize: "25px",
    textShadow: "2px 3px 0px #ba5563",
    color: "yellow",
    fontFamily: "Bangers",
    "@media screen and (min-width: 426px)": {
      fontSize: "35px",
    },
  },
  battleContent: {
    marginVottom: "10px",
    color: "#fff",
    fontSize: "20px",
    textShadow: "1px 1px 1px #000",
  },
  battleHashtag: {
    fontFamily: "Bangers",
    fontSize: "30px",
    textShadow: "2px 3px 0px yellow",
    color: "#ba5563",
    "@media screen and (min-width: 426px)": {
      fontSize: "50px",
    },
  },
};

class Show extends Component {
  state = {
    battle: null,
    isLoading: true,
    // intervalBattle: null,
  };

  constructor(props) {
    super(props);

    this.intervalId = setInterval(() => {
      this.getBattle(this.props.match.params.slug);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  getBattle(slug) {
    axios.get("/api/v1/battle/" + slug).then(res => {
      this.setState({ battle: res.data, isLoading: false });
    });
  }

  render() {
    const { classes } = this.props;
    const { battle, isLoading } = this.state;
    if (isLoading) {
      return <Loading />;
    } else {
      return (
        <div className={classes.battleContainer}>
          <div className={classes.battleTop}>
            <LifeBar
              floatPosition="right"
              battleChallanger={battle.challangers[0]}
            />
            <div className={classes.battleKo}>KO</div>
            <LifeBar
              floatPosition="left"
              battleChallanger={battle.challangers[1]}
            />
          </div>
          <div className={classes.battleInfo}>
            <div className={classes.battleHashtag}>#{battle.hashtag}</div>
            <div className={classes.battleName}>{battle.name}</div>
            <div className={classes.battleContent}>{battle.content}</div>
          </div>
          <Fighters
            battleChallangers={battle.challangers}
            slug={battle.slug}
            hastagBattle={battle.hashtag}
          />
          <Audience tweets={Tweets(battle)} />
        </div>
      );
    }
  }
}

export default withStyles(styles)(Show);
