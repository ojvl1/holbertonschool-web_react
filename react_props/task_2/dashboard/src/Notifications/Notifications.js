import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem.jsx";
import "./Notifications.css";
import closeButton from "../assets/close-button.png";

function Notifications({ notifications }) {
  return React.createElement(
    "div",
    { className: "Notifications" },
    React.createElement(
      "button",
      {
        style: {
          right: 30,
          border: "none",
          position: "absolute",
          background: "transparent",
        },
        "aria-label": "close",
        onClick: () => console.log("Close button has been clicked"),
      },
      React.createElement("img", { src: closeButton, alt: "close button icon" })
    ),
    React.createElement("p", null, "Here is the list of notifications"),
    React.createElement(
      "ul",
      null,
      notifications.map((notification) =>
        React.createElement(NotificationItem, {
          key: notification.id,
          type: notification.type,
          value: notification.value,
          html: notification.html,
        })
      )
    )
  );
}

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string,
      html: PropTypes.shape({
        __html: PropTypes.string,
      }),
    })
  ),
};

export default Notifications;
