import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import PropTypes from "prop-types";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Notifications from "../Notifications/Notifications.jsx";
import CourseList from "../CourseList/CourseList.jsx";
import Login from "../Login/Login.jsx";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom.jsx";
import BodySection from "../BodySection/BodySection.jsx";
import { StyleSheet, css } from "aphrodite";
import AppContext from "../Context/context.js";

const notificationsList = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", value: "Urgent requirement - complete by EOD" }
];

const coursesList = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const App = () => {
  const [displayDrawer, setDisplayDrawer] = useState(false);
  const [user, setUser] = useState({
    email: '',
    password: '',
    isLoggedIn: false
  });
  const [notifications, setNotifications] = useState(notificationsList);
  const [courses] = useState(coursesList);

  const handleDisplayDrawer = useCallback(() => {
    setDisplayDrawer(true);
  }, []);

  const handleHideDrawer = useCallback(() => {
    setDisplayDrawer(false);
  }, []);

  const logIn = useCallback((email, password) => {
    setUser({
      email,
      password,
      isLoggedIn: true,
    });
  }, []);

  const logOut = useCallback(() => {
    setUser({
      email: '',
      password: '',
      isLoggedIn: false,
    });
  }, []);

  const markNotificationAsRead = useCallback((id) => {
    console.log(`Notification ${id} has been marked as read`);
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  return (
    <AppContext.Provider value={{ user, logOut }}>
      <Notifications
        notifications={notifications}
        displayDrawer={displayDrawer}
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
        markNotificationAsRead={markNotificationAsRead}
      />
      <Header />
      {user.isLoggedIn ? (
        <BodySectionWithMarginBottom className={css(styles.responsive)} title="Course list">
          <CourseList courses={courses} />
        </BodySectionWithMarginBottom>
      ) : (
        <BodySectionWithMarginBottom title="Log in to continue">
          <Login logIn={logIn} />
        </BodySectionWithMarginBottom>
      )}
      <BodySection title="News from the School">
        <p>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis
          aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </BodySection>
      <Footer />
    </AppContext.Provider>
  );
};

const styles = StyleSheet.create({
  responsive: {
    '@media (max-width: 899px)': {
      display: 'flex',
      flexWrap: 'nowrap',
      flexDirection: 'column'
    }
  }
});

if (document.getElementById("root")) {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

export default App;
