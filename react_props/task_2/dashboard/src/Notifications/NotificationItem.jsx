import React from "react";
import PropTypes from "prop-types";

function NotificationItem({ type, value = '', html = null }) {
  return value ? (<li data-notification-type={type}>{value}</li>)
        : (<li data-notification-type={type} dangerouslySetInnerHTML={html}></li>);
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

export default NotificationItem
