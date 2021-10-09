import React, { Component } from 'react';
import NotificationAlert from 'react-notification-alert';

var options = {};
options = {
  place: 'tc',
  message: (
    <div>
      Copied to Clipboard!
    </div>
  ),
  type: "success",
  icon: "now-ui-icons ui-1_bell-53",
  autoDismiss: 1.25
}


class Notifications extends Component {
  myFunc() {
    this.refs.notify.notificationAlert(options);
  }
  render() {
    return (
      <div>
        <NotificationAlert ref="notify" zIndex={9999} onClick={() => { }} />
        <button onClick={() => this.myFunc()}>Hey</button>
      </div>
    );
  }
}

export default Notifications;

