import { Component } from "react";

const INITIAL_STATE = {
  login: "",
  pass: "",
  phone: "",
  email: "",
};

class SignUpForm extends Component() {
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
      <form>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              placeholder="Enter login"
              name="login"
              value={login}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Pass
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={pass}
              onChange={this.handleChange}
            />
          </label>

          <label>
            phone
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={phone}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Sign up as {login}</button>
        </form>
      </form>
    );
  }
}

export default SignUpForm;
