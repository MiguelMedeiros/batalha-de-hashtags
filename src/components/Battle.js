import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import Loading from "./Loading";
import LifeBar from "./Battle/LifeBar";
import Fighters from "./Battle/Fighters";
import Audience from "./Battle/Audience";
import Tweets from "./Battle/Tweets";

let styles = {
  contentPages: {
    textAlign: "left",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "0 30px",
  },
};

class Battle extends Component {
  state = {
    battle: null,
    isLoading: true,
  };

  constructor(props) {
    super(props);
    setInterval(() => {
      this.getBattle(this.props.slug);
    }, 10000);
  }

  getBattle(slug) {
    axios.get("/api/v1/battle/" + slug).then(res => {
      this.setState({ battle: res.data, isLoading: false });
    });
  }

  render() {
    const { battle, isLoading } = this.state;
    if (isLoading) {
      return <Loading />;
    } else {
      return (
        <div className="battle-container">
          <div className="battle-top">
            <LifeBar
              floatPosition="right"
              battleChallanger={battle.challangers[0]}
            />
            <div className="battle-ko">KO</div>
            <LifeBar
              floatPosition="left"
              battleChallanger={battle.challangers[1]}
            />
          </div>
          <div className="battle-info">
            <div className="battle-hashtag">#{battle.hashtag}</div>
            <div className="battle-name">{battle.name}</div>
            <div className="battle-content">{battle.content}</div>
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

export default withStyles(styles)(Battle);
