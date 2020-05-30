import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  submit = e => {
    e.preventDefault();
    if (this.props.submit) {
      this.props.submit(this.state);
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.submit} className="col-md-3" autoComplete="off">
        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            value={email}
            onChange={this.handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            value={password}
            onChange={this.handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    );
  }
}
export default LoginForm;
