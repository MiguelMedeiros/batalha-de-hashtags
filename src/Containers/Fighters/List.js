import React, { useState, useEffect } from "react";
import api from "./../../Services/Api";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import LoadingComponent from "../../Components/Basic/Loading";
import Grid from "@material-ui/core/Grid";
import Title from "./../../Components/Basic/Title";
import Text from "./../../Components/Basic/Text";
import isEmpty from "./../../Helpers/isEmpty";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "800px",
    margin: "auto",
    textAlign: "left",
    padding: "30px"
  },
  navlink: {
    textDecoration: "none"
  },
  challanger: {
    padding: "50px 35px",
    transition: "50ms all ease-in",
    "&:hover": {
      transform: "scale(1.025)",
      "& h1": {
        textShadow: "2px 3px 0px yellow",
        color: "#ba5563"
      }
    },
    "& img": {
      maxWidth: "100%",
      margin: "auto"
    }
  }
}));

export default function List() {
  const classes = useStyles();
  const [challangers, setChallangers] = useState(null);

  useEffect(() => {
    api.get("/api/v1/challangers").then(res => {
      setChallangers(res.data);
    });
  }, []);

  if (isEmpty(challangers)) {
    return <LoadingComponent />;
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
                <Link
                  to={"/personagem/" + row.slug}
                  className={classes.navlink}
                >
                  <Title h={"h2"} text={row.name} />
                  <Text>{row.content}</Text>
                  <img src={row.avatar_right} alt={row.name} />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}
