import React, { Component } from "react";
import Title from "./../../components/Basic/Title";
import Text from "./../../components/Basic/Text";
// import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

let styles = {
  root: {
    maxWidth: "800px",
    margin: "auto",
    textAlign: "left",
    minHeight: "calc(100vh - 114px)",
    padding: "30px",
  },
};
class Rules extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Title h={"h1"} text="Instruções" />
        <Text>
          As instruções são bem simples! Basta fazer um tweet com a hashtag ta
          batalha e a hashtag correspondente ao seu personagem. Veja o exemplo
          na imagem abaixo:
        </Text>
        {/* vai aparecer um gif aqui */}
        <Text>
          A batalha termina quando os tweets computados ultrapassarem a vida
          máxima do personagem, assim como em qualquer batalha de Street
          Fighter! :)
        </Text>
        {/* vai aparecer um gif aqui */}
      </div>
    );
  }
}

export default withStyles(styles)(Rules);
