function Login() {
  return (
    <>
      <main>
        <div className='App-login'>
          <p>Login to access the full dashboard</p>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <button>OK</button>
        </div>
      </main>
    </>
  );
}

export default Login