import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {getGeo} from '../../actions/geoAction';

class EditGeoCaches extends Component {
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
  }

  componentDidMount() {
    this.props.getGeo()
  }

  componentWillReceiveProps(nextProps) {
      if(nextProps.geo) {
          const data = nextProps.geo
          console.log("data edit", data);
          
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

EditGeoCaches.propTypes = {
  createGeo: PropTypes.object.isRequired,
  getGeo: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  geo: state.geo,
  errors: state.error
});

export default connect(mapStateToProps, {getGeo})(withRouter(EditGeoCaches));
