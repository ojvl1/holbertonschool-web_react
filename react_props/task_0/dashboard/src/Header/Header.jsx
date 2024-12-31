import holbertonlogo from './assets/holberton-logo.jpg';

function Header() {
  return (
    <>
      <header>
        <div className='App-header'>
          <img src={holbertonlogo} alt="holberton logo" />
          <h1>School dashboard</h1>
        </div>
      </header>
    </>
  );
}

export default Header