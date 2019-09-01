import React from "react";

import { Router, Route, Switch } from "react-router-dom";
import history from "./Helpers/history";

import Header from "./Components/Grid/Header";
import Footer from "./Components/Grid/Footer";
import ScrollToTop from "./Components/Basic/ScrollToTop";

import { makeStyles } from "@material-ui/core/styles";

// Containers
import Home from "./Containers/Pages/Home";
import Rules from "./Containers/Pages/Rules";
import About from "./Containers/Pages/About";
import Api from "./Containers/Pages/Api";
import Battle from "./Containers/Battles/Show";
import Battles from "./Containers/Battles/List";
import Fighter from "./Containers/Fighters/Show";
import Fighters from "./Containers/Fighters/List";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "0",
    fontFamily: "Roboto",
    minHeight: "calc(100vh - 114px)",
    height: "100%",
    minWidth: "320px",
    background:
      "linear-gradient(180deg, rgba(240, 247, 0, 1) 0%, rgba(241, 226, 3, 1) 11%, rgba(255, 141, 0, 1) 100%)"
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Router history={history}>
        <ScrollToTop />
        <Header />
        <main className={classes.root}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sobre" component={About} />
            <Route exact path="/instrucoes" component={Rules} />
            <Route exact path="/api" component={Api} />
            <Route exact path="/batalhas" component={Battles} />
            <Route path="/batalha/:slug" component={Battle} />
            <Route exact path="/personagens" component={Fighters} />
            <Route path="/personagem/:slug" component={Fighter} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </React.Fragment>
  );
}
