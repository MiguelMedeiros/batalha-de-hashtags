import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Loading from "../../components/Basic/Loading";
import Title from "./../../components/Basic/Title";
import Text from "./../../components/Basic/Text";

let styles = {
  contentPages: {
    textAlign: "left",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "30px",
    minHeight: "calc(100vh - 114px)",
  },
  battle: {
    margin: "20px auto 40px",
  },
  battleTitle: {
    textAlign: "left",
    marginBottom: "10px",
    fontSize: "30px",
    fontFamily: "Bangers",
    textShadow: "2px 3px 0px yellow",
    color: "#282c34",
    "& span": {
      color: "#ba5563",
    },
  },
  battleImage: {
    width: "100%",
    borderRadius: "10px",
    boxShadow: "1px 1px 15px rgba(0,0,0,0.2)",
  },
  navlink: {
    textDecoration: "none",
  },
};

class List extends Component {
  state = {
    battles: null,
    isLoading: true,
  };

  componentDidMount() {
    axios.get("/api/v1/battles").then(res => {
      this.setState({ battles: res.data, isLoading: false });
    });
  }

  render() {
    const { classes } = this.props;
    const { battles, isLoading } = this.state;
    if (isLoading) {
      return <Loading />;
    } else {
      return (
        <div className={classes.contentPages}>
          <Title h={"h1"} text="Batalhas" />
          <Text>
            Fique ligado nas batalhas que estão ativas e nas que já foram
            finalizadas!
          </Text>
          {battles.map((row, index) => {
            return (
              <div className={classes.battle} key={row.id}>
                <NavLink
                  to={"/batalha/" + row.slug}
                  className={classes.navlink}
                >
                  <div className={classes.battleTitle}>
                    <span>#{row.hashtag}</span> - {row.name}
                  </div>
                  <img
                    className={classes.battleImage}
                    src={row.image}
                    alt={row.name}
                  />
                </NavLink>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default withStyles(styles)(List);
