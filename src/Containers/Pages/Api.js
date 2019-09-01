import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import Title from "../../Components/Basic/Title";
import Text from "../../Components/Basic/Text";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "auto",
    textAlign: "left",
    maxWidth: "1000px",
    minHeight: "calc(100vh - 114px)",
    width: "100%",
    padding: "30px",
    "& a": {
      wordBreak: "break-all"
    }
  },
  table: {
    maxWidth: "100%",
    "& td, th": {
      color: "#fff !important",
      textShadow: "1px 1px 1px rgba(0,0,0,0.5)"
    }
  },
  tableContainer: {
    width: "100%",
    overflow: "overlay"
  }
}));

export default function Api() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Title h={"h1"} text="Manual da API" />
      <Text>
        Para contribuir com código disponibilizamos o projeto utilizado no
        front-end.
        <br />
        Basta fazer um fork e mandar seu Pull Request!
      </Text>
      <Text>
        <a
          href="https://github.com/MiguelMedeiros/direita-vs-esquerda-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/MiguelMedeiros/direita-vs-esquerda-app
        </a>
      </Text>
      <Title h={"h2"} text="Endpoints" />
      <div className={classes.tableContainer}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Tipo</b>
              </TableCell>
              <TableCell>
                <b>URL</b>
              </TableCell>
              <TableCell align="left">
                <b>Parâmetros</b>
              </TableCell>
              <TableCell align="right">
                <b>Descrição</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                GET
              </TableCell>
              <TableCell component="th" scope="row">
                /api/v1/battles
              </TableCell>
              <TableCell align="left">--</TableCell>
              <TableCell align="right">
                Retorna JSON com todas as Batalhas ativas.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                GET
              </TableCell>
              <TableCell component="th" scope="row">
                /api/v1/battle/:slug
              </TableCell>
              <TableCell align="left">slug</TableCell>
              <TableCell align="right">
                Retorna JSON com Batalha por slug.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                GET
              </TableCell>
              <TableCell component="th" scope="row">
                /api/v1/challangers
              </TableCell>
              <TableCell align="left">--</TableCell>
              <TableCell align="right">
                Retorna JSON com todos os personagens.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                GET
              </TableCell>
              <TableCell component="th" scope="row">
                /api/v1/challanger/:slug
              </TableCell>
              <TableCell align="left">slug</TableCell>
              <TableCell align="right">
                Retorna JSON com personagem pelo slug.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                GET
              </TableCell>
              <TableCell component="th" scope="row">
                /api/v1/battle_challanger/:id
              </TableCell>
              <TableCell align="left">id</TableCell>
              <TableCell align="right">
                Retorna JSON Personagens das Batalhas pelo id.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                GET
              </TableCell>
              <TableCell component="th" scope="row">
                /api/v1/battle_challangers/:battle_id
              </TableCell>
              <TableCell align="left">battle_id</TableCell>
              <TableCell align="right">
                Retorna JSON Personagens das Batalhas pelo battle_id.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
