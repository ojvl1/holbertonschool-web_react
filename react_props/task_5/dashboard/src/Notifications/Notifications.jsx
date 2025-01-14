import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "../Notifications/NotificationItem.jsx";
import "./Notifications.css";
import closeButton from "../assets/close-button.png";

function Notifications({ notifications = [], displayDrawer = false }) {
  return (
    <>
      <div className="notifications-title">Your Notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          <button
            style={{
              right: 30,
              border: "none",
              position: "absolute",
              background: "transparent",
            }}
            aria-label="close"
            onClick={() => console.log("Close button has been clicked")}
          >
            <img src={closeButton} alt="close button icon" />
          </button>
          <p>
            {notifications.length > 0
              ? "Here is the list of notifications"
              : "No new notification for now"}
          </p>
          {notifications.length > 0 && (
            <ul>
              {notifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                />
              ))}
            </ul>
          )}
        </div>
      )}
    </>
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
  displayDrawer: PropTypes.bool,
};

export default Notifications;
