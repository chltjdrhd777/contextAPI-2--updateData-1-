import React, { Component } from "react";
import Headpresenter from "./Header";

class HeaderComp extends Component {
  static propTypes = {};
  state = {};
  render() {
    return <Headpresenter {...this.state} />;
  }
}

export default HeaderComp;
