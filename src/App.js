import React from "react";

import { Router, Route, Switch } from "react-router-dom";
import history from "./Helpers/history";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Containers
import Home from "./Containers/Pages/Home";
import Rules from "./Containers/Pages/Rules";
import About from "./Containers/Pages/About";
import Battle from "./Containers/Battles/Show";
import Battles from "./Containers/Battles/List";
// import Fighter from "./Containers/Fighters/Show";
import Fighters from "./Containers/Fighters/List";

function App() {
  return (
    <React.Fragment>
      <Router history={history}>
        <Header />
        <main className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sobre" component={About} />
            <Route exact path="/instrucoes" component={Rules} />
            <Route exact path="/batalhas" component={Battles} />
            <Route path="/batalha/:slug" component={Battle} />
            <Route exact path="/personagens" component={Fighters} />
            {/*
            <Route path="/personagem/:slug" component={Fighter} /> */}
          </Switch>
        </main>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
