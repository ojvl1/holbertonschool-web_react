import React from 'react';
import './Footer.css'
import { getCurrentYear, getFooterCopy } from '../utils/utils.js';

function Footer() {
  const isIndex = window.location.pathname === '/';

  return (
    <>
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

export default Footer