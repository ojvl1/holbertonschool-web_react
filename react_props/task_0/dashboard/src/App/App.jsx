import { Fragment } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from '../Header/Header.jsx';
import Login from '../Login/Login.jsx';
import Footer from '../Footer/Footer.jsx';


createRoot(document.getElementById('root')).render(
  <Fragment>
    <Header />
    <Login />
    <Footer />
  </Fragment>,
)

