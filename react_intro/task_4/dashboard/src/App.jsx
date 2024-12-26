import holbertonlogo from './assets/holberton-logo.jpg';
import './App.css';
import { getCurrentYear, getFooterCopy } from './utils';
import Notifications from "./Notifications.jsx";

function App() {
  const isIndex = window.location.pathname === '/';

  return (
    <>
      <header>
        <Notifications />
        <div className='App-header'>
          <img src={holbertonlogo} alt="holberton logo" />
          <h1>School dashboard</h1>
        </div>
      </header>
      <main>
        <div className='line'></div>
        <div className='App-body'>
          <p>Login to access the full dashboard</p>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <button>OK</button>
        </div>
      </main>
      <footer>
        <div className='line'></div>
        <div className='App-footer'>
          <p>
            Copyright {getCurrentYear()} - {getFooterCopy(isIndex)}
          </p>
        </div>
      </footer>
    </>
  );
}

export default App
