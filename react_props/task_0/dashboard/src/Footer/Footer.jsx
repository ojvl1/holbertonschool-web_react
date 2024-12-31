import { getCurrentYear, getFooterCopy } from './utils/utils.jsx';

function Footer() {
  const isIndex = window.location.pathname === '/';

  return (
    <>
      <footer>
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
