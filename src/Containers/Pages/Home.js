import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import api from "./../../Services/Api";
import LoadingComponent from "../../Components/Basic/Loading";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import Title from "../../Components/Basic/Title";
import Text from "../../Components/Basic/Text";
import isEmpty from "./../../Helpers/isEmpty";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "800px",
    margin: "auto",
    textAlign: "left",
    minHeight: "calc(100vh - 114px)",
    padding: "30px",
    "& h1": {
      marginTop: "0px"
    }
  },
  carousel: {
    background: "transparent",
    boxShadow: "1px 1px 10px rgba(0,0,0,0.5) !important",
    "& .slide": {
      background: "transparent !important"
    },
    "& img": {
      borderRadius: "10px"
    },
    "& button": {
      padding: "0px 30px 0px 40px !important"
    }
  },
  divider: {
    width: "100%",
    background: "yellow",
    height: "1px",
    margin: "30px 0px",
    boxShadow: "1px 1px 3px rgba(yellow,0.2)"
  },
  link: {
    display: "inline-block",
    textDecoration: "none"
  },
  containerCenter: {
    margin: "auto",
    width: "100%",
    textAlign: "center"
  },
  buttonFeatured: {
    textTransform: "none",
    margin: "40px auto",
    minWidth: "260px",
    width: "100%",
    textAlign: "center",
    padding: "20px 20px 40px",
    background: "yellow",
    color: "#000",
    fontWeight: "bold",
    "&:hover": {
      color: "#fff"
    }
  },
  avatarContainer: {
    textAlign: "center",
    marginBottom: "30px",
    transition: "1000ms all",
    "& :hover": {
      transform: "scale(1.025)"
    }
  }
}));

export default function Home() {
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
      <div className={classes.root}>
        <Title h={"h1"} text="Novas Batalhas" />
        <Carousel
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          className={classes.carousel}
        >
          {battles.map((row, index) => {
            return (
              <div key={index}>
                <Link to={"/batalha/" + row.slug} className={classes.link}>
                  <img src={row.image} alt={row.name} />
                </Link>
              </div>
            );
          })}
        </Carousel>
        <div className={classes.containerCenter}>
          <Link to={"/instrucoes"} className={classes.link}>
            <Fab
              variant="extended"
              color="primary"
              aria-label="Add"
              className={classes.buttonFeatured}
            >
              Entenda como funciona!
            </Fab>
          </Link>
        </div>
        <div className={classes.divider} />
        <Title h={"h2"} text="Nossa História" />
        <Text>
          Tudo começou com uma conversa no Discord. O Miguel estava falando
          sobre uma ideia de usar a API do Twitter para fazer um app que resolve
          um cubo mágico coletivamente...
        </Text>
        <div className={classes.containerCenter}>
          <Link to={"/sobre"} className={classes.link}>
            <Fab
              variant="extended"
              color="primary"
              aria-label="Add"
              className={classes.buttonFeatured}
            >
              Conheça nossa história...
            </Fab>
          </Link>
        </div>
      </div>
    );
  }
}
