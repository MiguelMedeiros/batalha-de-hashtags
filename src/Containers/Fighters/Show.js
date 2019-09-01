import React, { useState, useEffect } from "react";
import api from "./../../Services/Api";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import LoadingComponent from "../../Components/Basic/Loading";
import Title from "../../Components/Basic/Title";
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
  }
}));

export default function Show(props) {
  const classes = useStyles();
  const [challanger, setChallanger] = useState(null);

  useEffect(() => {
    const { slug } = props.match.params;

    api.get("/api/v1/challanger/" + slug).then(res => {
      setChallanger(res.data);
    });
  }, [props.match.params]);

  if (isEmpty(challanger)) {
    return <LoadingComponent />;
  } else {
    return (
      <div className={classes.root}>
        <Title h={"h1"} text={challanger.name} />
        <Text>{challanger.content}</Text>
        <img src={challanger.avatar_right} alt={challanger.name} />
        {challanger.battleChallangersComplete.length > 0 && (
          <Title h={"h2"} text="Batalhas desse Personagem" />
        )}
        {challanger.battleChallangersComplete.map((row, index) => {
          return (
            <div className={classes.battle} key={row.id}>
              <Link
                to={"/batalha/" + row.battle.slug}
                className={classes.navlink}
              >
                <div className={classes.battleTitle}>
                  <span>#{row.battle.hashtag}</span> - {row.battle.name}
                </div>
                <img
                  className={classes.battleImage}
                  src={"/" + row.battle.image}
                  alt={row.battle.name}
                />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
