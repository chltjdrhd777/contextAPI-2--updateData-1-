import React, { Component } from "react";
import NotificationPresenter, { NotiPropType } from "./Notification";

// to define props types, I used generic
class NotificationContainer extends Component<NotiPropType> {
  static propTypes = {};
  state = {};
  render() {
    return <NotificationPresenter {...this.props} {...this.state} />;
  }
}

export default NotificationContainer;
