import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      username: "",
      first_name: "",
      last_name: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
      username: this.state.username,
      first_name: this.state.first_name,
      last_name: this.state.last_name
    };

    axios.post(' https://blooming-cove-35281.herokuapp.com/api/users', user, {
        headers: { 'Content-Type': 'text/plain' }
      });
    // axios.post(' https://blooming-cove-35281.herokuapp.com/api/users', user)
    //     .then(res => console.log("server response",res.data))
    //     .catch(err => console.log("err",err))
    // console.log("User", user);
    
  }

  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
            
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="User Name"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                    
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="First Name"
                    name="first_name"
                    value={this.state.first_name}
                    onChange={this.onChange}
                    
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Last Name"
                    name="last_name"
                    value={this.state.last_name}
                    onChange={this.onChange}
                    
                  />
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
