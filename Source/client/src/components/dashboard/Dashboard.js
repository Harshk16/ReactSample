import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGeo } from "../../actions/geoAction";

class dashboard extends Component {
  componentDidMount() {
    this.props.getGeo();
  }

  render() {
    return <div>Dashboard</div>;
  }
}
export default connect(
  null,
  { getGeo }
)(dashboard);
