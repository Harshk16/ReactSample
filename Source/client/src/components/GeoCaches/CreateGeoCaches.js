import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CreateGeoCaches extends Component {
  constructor(props) {
    super(props);
    this.this.state = {
      title: "",
      message: "",
      lat: "",
      lng: "",
      errors: {}
    };
  }
  render() {
    return <div />;
  }
}

CreateGeoCaches.PropTypes = {
    geo: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    geo: state.geo,
    errors: state.error
    
})

export default connect() (CreateGeoCaches);
