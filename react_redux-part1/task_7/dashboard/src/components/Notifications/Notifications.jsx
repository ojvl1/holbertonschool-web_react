import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showDrawer, hideDrawer, markNotificationAsRead } from "../../app/notificationsSlice";
import "./Notifications.css";

const Notifications = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications.list);
  const displayDrawer = useSelector((state) => state.notifications.displayDrawer);

  const handleDisplayDrawer = () => dispatch(showDrawer());
  const handleHideDrawer = () => dispatch(hideDrawer());
  const handleMarkAsRead = (id) => dispatch(markNotificationAsRead(id));

  return (
    <div className="notifications-container">
      <div className="menuItem" onClick={handleDisplayDrawer}>
        Your notifications
      </div>
      {displayDrawer && (
        <div className="notifications">
          <button onClick={handleHideDrawer} className="close-btn">
            Close
          </button>
          <ul>
            {notifications.length > 0 ? (
              notifications.map((notif) => (
                <li key={notif.id} onClick={() => handleMarkAsRead(notif.id)}>
                  {notif.message}
                </li>
              ))
            ) : (
              <li>No new notifications</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default memo(Notifications);