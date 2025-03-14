// Notifications.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  markNotificationAsRead,
  showDrawer,
  hideDrawer,
} from "./notificationsSlice";

const Notifications = () => {
  const notifications = useSelector(
    (state) => state.notifications.notifications
  );
  const displayDrawer = useSelector(
    (state) => state.notifications.displayDrawer
  );
  const dispatch = useDispatch();

  const handleMarkAsRead = (notificationId) => {
    dispatch(markNotificationAsRead(notificationId));
  };

  const handleShowDrawer = () => {
    dispatch(showDrawer());
  };

  const handleHideDrawer = () => {
    dispatch(hideDrawer());
  };

  return (
    <div>
      {/* Render the notifications */}
      {notifications.map((notification) => (
        <div key={notification.id}>
          <span>{notification.message}</span>
          {!notification.read && (
            <button onClick={() => handleMarkAsRead(notification.id)}>
              Mark as Read
            </button>
          )}
        </div>
      ))}

      {/* Render the drawer */}
      {displayDrawer && (
        <div>
          {/* Render the drawer content */}
          <button onClick={handleHideDrawer}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Notifications;