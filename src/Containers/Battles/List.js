import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import api from "../../Services/Api";
import { Link } from "react-router-dom";
import LoadingComponent from "../../Components/Basic/Loading";
import Title from "./../../Components/Basic/Title";
import Text from "./../../Components/Basic/Text";
import isEmpty from "./../../Helpers/isEmpty";

const useStyles = makeStyles(theme => ({
  contentPages: {
    textAlign: "left",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "30px",
    minHeight: "calc(100vh - 114px)"
  },
  battle: {
    margin: "20px auto 40px"
  },
  battleTitle: {
    textAlign: "left",
    marginBottom: "10px",
    fontSize: "30px",
    fontFamily: "Bangers",
    textShadow: "2px 3px 0px yellow",
    color: "#282c34",
    "& span": {
      color: "#ba5563"
    }
  },
  battleImage: {
    width: "100%",
    borderRadius: "10px",
    boxShadow: "1px 1px 15px rgba(0,0,0,0.2)"
  },
  navlink: {
    textDecoration: "none"
  }
}));

export default function List() {
  const classes = useStyles();
  const [battles, setBattles] = useState(null);

  useEffect(() => {
    api.get("/api/v1/battles").then(res => {
      setBattles(res.data);
    });
  }, []);

  if (isEmpty(battles)) {
    return <LoadingComponent />;
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
              <Link to={"/batalha/" + row.slug} className={classes.navlink}>
                <div className={classes.battleTitle}>
                  <span>#{row.hashtag}</span> - {row.name}
                </div>
                <img
                  className={classes.battleImage}
                  src={row.image}
                  alt={row.name}
                />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
