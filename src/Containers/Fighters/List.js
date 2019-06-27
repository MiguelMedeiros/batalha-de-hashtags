import React, { Component } from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import Loading from "../../Components/Basic/Loading";
import Grid from "@material-ui/core/Grid";
import Title from "./../../Components/Basic/Title";
import Text from "./../../Components/Basic/Text";

let styles = {
  root: {
    maxWidth: "800px",
    margin: "auto",
    textAlign: "left",
    padding: "30px",
  },
  navlink: {
    textDecoration: "none",
  },
  challanger: {
    padding: "50px 35px",
    transition: "50ms all ease-in",
    "&:hover": {
      transform: "scale(1.025)",
      "& h1": {
        textShadow: "2px 3px 0px yellow",
        color: "#ba5563",
      },
    },
    "& img": {
      maxWidth: "100%",
      margin: "auto",
    },
  },
};

class List extends Component {
  state = {
    challangers: null,
    isLoading: true,
  };

  componentDidMount() {
    axios.get("/api/v1/challangers").then(res => {
      this.setState({ challangers: res.data, isLoading: false });
    });
  }
  render() {
    const { classes } = this.props;
    const { challangers, isLoading } = this.state;

    if (isLoading) {
      return <Loading />;
    } else {
      return (
        <div className={classes.root}>
          <Title h={"h1"} text="Personagens" />
          <Text>Conheça todos os nossos Textersonagens!</Text>
          <Grid container className={classes.challangers}>
            {challangers.map((row, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  key={row.id}
                  className={classes.challanger}
                >
                  <NavLink
                    to={"/personagem/" + row.slug}
                    className={classes.navlink}
                  >
                    <Title h={"h2"} text={row.name} />
                    <Text>{row.content}</Text>
                    <img src={row.avatar_right} alt={row.name} />
                  </NavLink>
                </Grid>
              );
            })}
          </Grid>
        </div>
      );
    }
  }
}

export default withStyles(styles)(List);
