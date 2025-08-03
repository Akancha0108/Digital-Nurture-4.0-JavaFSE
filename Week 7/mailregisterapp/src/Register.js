
import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      password: '',
      errors: {
        fullName: '',
        email: '',
        password: ''
      }
    };
  }

  validateForm = (errors) => {
    return !Object.values(errors).some(error => error.length > 0);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName':
        errors.fullName = value.length < 5 ? 'Full Name must be 5 characters long!' : '';
        break;
      case 'email':
        const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
        break;
      case 'password':
        errors.password = value.length < 8 ? 'Password must be 8 characters long!' : '';
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { errors } = this.state;
    if (this.validateForm(errors)) {
      alert("Valid Form");
    } else {
      if (errors.fullName !== '') alert(errors.fullName);
      if (errors.email !== '') alert(errors.email);
      if (errors.password !== '') alert(errors.password);
    }
  };

  render() {
    return (
      <div className="form-wrapper">
        <h1>Register Here!!!</h1>
        <form onSubmit={this.handleSubmit} noValidate>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="fullName"
              onChange={this.handleChange}
              noValidate
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              noValidate
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              noValidate
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
