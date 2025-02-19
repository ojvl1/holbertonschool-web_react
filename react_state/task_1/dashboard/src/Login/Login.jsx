import React from "react";
import { StyleSheet, css } from 'aphrodite';
import WithLogging from "../HOC/WithLogging";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };
  }

  handleLoginSubmit = (e) => {
    e.preventDefault();
    this.setState({ isLoggedIn: true });
  };

  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value }, this.checkFormValidity);
  };

  handleChangePassword = (e) => {
    this.setState({ password: e.target.value }, this.checkFormValidity);
  };

  checkFormValidity = () => {
    const { email, password } = this.state;
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordValid = password.length >= 8;
    this.setState({ enableSubmit: emailValid && passwordValid });
  };

  render() {
    return (
      <>
        <main className={css(styles.appLogin)}>
          <div className={css(styles.responsive)}>
            <p>Login to access the full dashboard</p>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" autoComplete="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" autoComplete="current-password" />
            <button className={css(styles.button)}>OK</button>
          </div>
        </main>
      </>
    );
  }
}

const styles = StyleSheet.create({
  appLogin: {
    flexDirection: 'column',
    gap: '20px',
    display: 'flex',
    justifyContent: 'space-around',
  },

  button: {
    alignSelf: 'flex-start',
    marginTop: '10px'
  },

  responsive: {
    '@media (max-width: 899px)': {
      display: 'flex',
      flexDirection: 'column',
    }
  }
});

export default WithLogging(Login);