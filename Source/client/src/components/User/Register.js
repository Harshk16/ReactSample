import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter} from 'react-router-dom'
import classnames from "classnames";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
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

    this.props.registerUser(user, this.props.history);

    // var headers = {
    //   "Content-Type": "application/json"
    // };

    // axios
    //   .post(
    //     "https://blooming-cove-35281.herokuapp.com/api/users",
    //     { user: user },
    //     { headers: headers }
    //   )
    //   .then(res => console.log("server response", res.data))
    //   .catch(err => this.setState({ errors: err.response.data }));
  }

  render() {
    const { errors } = this.state;
    console.log("catch", errors.errors);

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.email
                    })}
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && <div className="invalid-feedback" />}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && <div className="invalid-feedback" />}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.username
                    })}
                    placeholder="User Name"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                  {errors.username && <div className="invalid-feedback" />}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.first_name
                    })}
                    placeholder="First Name"
                    name="first_name"
                    value={this.state.first_name}
                    onChange={this.onChange}
                  />
                  {errors.first_name && <div className="invalid-feedback" />}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.last_name
                    })}
                    placeholder="Last Name"
                    name="last_name"
                    value={this.state.last_name}
                    onChange={this.onChange}
                  />
                  {errors.last_name && <div className="invalid-feedback" />}
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
