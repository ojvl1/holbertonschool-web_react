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
    html: { __html: getLatestNotification() }
  }
];

const coursesList = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];
class App extends Component{
  constructor(props) {
    super(props);
  }
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
};

App.propTupes = {
  isLoggedIn: PropTypes.bool,
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
