import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';
import Header from '../Header/Header.jsx';
import Login from '../Login/Login.jsx';
import Footer from '../Footer/Footer.jsx';
import Notifications from '../Notifications/Notifications.jsx';
import CourseList from '../CourseList/CourseList.jsx';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils.js';

const notificationsList = [
  {
    id: 1,
    type: 'default',
    value: 'New course available'
  },
  {
    id: 2,
    type: 'urgent',
    value: 'New resume available'
  },
  {
    id: 3,
    type: 'urgent',
    value: '',
    html: { __html: getLatestNotification }
  }
];

const coursesList = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

class App extends React.Component{
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress(this);
  }

  handleKeyPress(event) {
    if (event.ctrlKey && event.key === "h") {
      window.alert("Logging you out");
      this.props.logOut();
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }22 

  render() {
    const { isLoggedIn } = this.props;
    return (
      <>
        <Notifications notifications={notificationsList} displayDrawer={true} />
        <Header />
        {isLoggedIn ? (
          <CourseList courses={coursesList} />
          ) : (
          <Login />
          )}
        <Footer />
      </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

App.propTupes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

if (document.getElementById('root')) {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
