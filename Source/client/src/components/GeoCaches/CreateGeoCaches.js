import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {createGeo} from '../../actions/geoAction';

class CreateGeoCaches extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      message: "",
      lat: "",
      lng: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getMyLocation = this.getMyLocation.bind(this);
  }

  componentDidMount() {
    this.getMyLocation();
  }

  getMyLocation() {
    const location = window.navigator && window.navigator.geolocation;

    if (location) {
      location.getCurrentPosition(
        position => {
          this.setState(
            {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            },
            console.log("lat lng", this.state)
          );
        },
        error => {
          this.setState({
            latitude: "err-latitude",
            longitude: "err-longitude"
          });
        }
      );
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newGeo = {
      title: this.state.title,
      message: this.state.message,
      lat: this.state.latitude,
      lng: this.state.longitude

    };
    console.log("new Geo", newGeo);
    
    this.props.createGeo(newGeo, this.props.history);
  }
  render() {
    const { latitude, longitude } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="title"
                    className="form-control form-control-lg"
                    placeholder="title"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="message"
                    className="form-control form-control-lg"
                    placeholder="message"
                    name="message"
                    value={this.state.message}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="lat"
                    className="form-control form-control-lg"
                    placeholder="lat"
                    name="lat"
                    value={latitude}
                   
                  />
                </div>
                <div className="form-group">
                  <input
                    type="lng"
                    className="form-control form-control-lg"
                    placeholder="lng"
                    name="lng"
                    value={longitude}
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

CreateGeoCaches.propTypes = {
  createGeo: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  geo: state.geo,
  errors: state.error
});

export default connect(mapStateToProps, {createGeo})(withRouter(CreateGeoCaches));
