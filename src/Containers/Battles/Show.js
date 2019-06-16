import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import Battle from "../../components/Battle";

class Show extends Component {
  render() {
    return <Battle slug={this.props.match.params.slug} />;
  }
}

export default Show;
