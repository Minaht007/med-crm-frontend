import { Component } from "react";
import styles from "./_SignUpForm.module.scss";

const INITIAL_STATE = {
  login: "",
  pass: "",
  phone: "",
  email: "",
};

class SignUpForm extends Component {
  state = { INITIAL_STATE };

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    const { login, email, pass, phone } = this.state;
    console.log(
      `Login: ${login}, Email: ${email}, Password: ${pass}, Phone: ${phone}`
    );
    this.props.onSubmit({ ...this.state });
    this.reset();
  };
  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };
  render() {
    const { login, email, pass, phone } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.lableName}>Name</label>
        <input
          className={styles.dataInput}
          type="text"
          id="name"
          placeholder="Enter login"
          name="login"
          value={login}
          onChange={this.handleChange}
        />

        <label className={styles.lableName}>Email</label>
        <input
          className={styles.dataInput}
          type="email"
          id="Email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={this.handleChange}
        />

        <label className={styles.lableName}>Pass</label>
        <input
          className={styles.dataInput}
          type="password"
          id="pass"
          placeholder="Enter password"
          name="password"
          value={pass}
          onChange={this.handleChange}
        />

        <label className={styles.lableName}>Phone</label>
        <input
          className={styles.dataInput}
          type="password"
          id="phone"
          placeholder="Enter password"
          name="password"
          value={phone}
          onChange={this.handleChange}
        />

        <button className={styles.submitBtm} type="submit">
          Sign up as {login}
        </button>
      </form>
    );
  }
}

export default SignUpForm;
