import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client';
import Header from '../Header/Header.jsx';
import Login from '../Login/Login.jsx';
import Footer from '../Footer/Footer.jsx';
import Notifications from '../Notifications/Notifications.jsx';
import CourseList from '../CourseList/CourseList.jsx';

function App({ isLoggedIn = true }) {
  const notificationsList = [
    {
      id: Math.random(),
      type: 'default',
      value: 'New course available'
    },
    {
      id: Math.random(),
      type: 'urgent',
      value: 'New resume available'
    },
    {
      id: Math.random(),
      type: 'urgent',
      value: '',
      html: { __html: '<strong>Urgent requirement</strong>' }
    }
  ];

  const coursesList = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  return (
    <>
      <Notifications notifications={notificationsList} displayDrawer={true} />
      <Header />
      {isLoggedIn ? <CourseList courses={coursesList} /> : <Login />}
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
