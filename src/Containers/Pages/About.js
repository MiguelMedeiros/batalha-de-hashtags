import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "../../components/Basic/Avatar";
import { NavLink } from "react-router-dom";
import Title from "./../../components/Basic/Title";
import Text from "./../../components/Basic/Text";

let styles = {
  root: {
    maxWidth: "800px",
    margin: "0 auto 60px",
    textAlign: "left",
    padding: "30px",
    "& b": {
      fontWeight: "bold",
    },
    "& a": {
      textDecoration: "none",
      fontWeight: "bold",
      color: "#ba5563",
      "&:hover": {
        color: "#000",
        textDecoration: "underline",
      },
    },
  },
  bitcoin: {
    textAlign: "center",
    margin: "40px auto 0",
    "& img": {
      margin: "auto",
    },
    "& span": {
      display: "block",
      color: "#fff",
    },
  },
  divider: {
    width: "100%",
    background: "yellow",
    height: "1px",
    margin: "60px 0px",
    boxShadow: "1px 1px 3px rgba(0,0,0,0.2)",
  },
  avatarContainer: {
    textAlign: "center",
    marginBottom: "30px",
    transition: "1000ms all",
    "& :hover": {
      transform: "scale(1.025)",
    },
  },
};
class About extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Title h={"h1"} text="História" />
        <Text>
          Tudo começou com uma conversa no{" "}
          <a
            href="https://discord.gg/XKWUgV"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord do Cultura Libertária
          </a>
          . O Miguel estava falando sobre uma ideia de usar a{" "}
          <a
            href="https://developer.twitter.com/en/docs.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            API do Twitter
          </a>{" "}
          para fazer um app que resolve um cubo mágico coletivamente.
        </Text>
        <Text>
          O Vinícius, que é designer gráfico, tinha feito dois personagens: a{" "}
          <NavLink to={"/personagem/coxinha"}>coxinha</NavLink> e o{" "}
          <NavLink to={"/personagem/mortadela"}>sanduiche de mortadela</NavLink>
          , brincando com esse momento político que vivemos.
        </Text>
        <Text>
          E foi <b>juntando essas ideias que o Batalha de Hashtags</b> surgiu!
          Num estilo Street Fighter brincamos com essa dicotomia da direita e
          esquerda. Colocamos personagens representativos de cada ala para{" "}
          <b>brigar por sua hashtag no Twitter</b> e vencer a Batalha de
          Hashtags!
        </Text>
        <div className={classes.divider} />
        <Title h={"h1"} text="Criadores" />
        <Text>
          Esse site não foi feito sozinho! A ideia saíu do papel com a ajuda
          desses caras aí:
        </Text>
        <div className={classes.avatarContainer}>
          <a
            href="https://www.miguelmedeiros.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar
              name="Miguel Medeiros"
              pic="miguelmedeiros.jpg"
              button="Desenvolvedor"
            />
          </a>
          <a
            href="https://www.miguelmedeiros.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar
              name="Vinicius Girotto"
              pic="viniciusgirotto.png"
              button="Designer 3D"
            />
          </a>
          <a
            href="https://www.miguelmedeiros.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar
              name="Vicente de Alencar"
              pic="vicente.png"
              button="Desenvolvedor"
            />
          </a>
        </div>
        <div className={classes.divider} />
        <Title h={"h1"} text="Contribua" />
        <Text>
          Curtiu a ideia? Faça uma contribuição pois não existe almoço nem
          servidor grátis!
        </Text>
        {/* colocar endereco de bitcoin */}
        <div className={classes.bitcoin}>
          <img src="./img/donation.png" alt="Donate Bitcoin" />
          <span>18kXMmrDtgfeQgVmwfmygTaYLyQuVS4chK</span>
        </div>
        {/* colocar botao de doacao paypal */}
      </div>
    );
  }
}

export default withStyles(styles)(About);
