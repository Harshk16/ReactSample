import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGeo } from "../../actions/geoAction";
import { deleteGeo } from "../../actions/geoAction";
import Spinner from "../common/spinner";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getGeo();
  }

  delete(data) {
    var geoId = data;
    this.props.deleteGeo(geoId, this.props.history);
    window.location.reload();
  }

  render() {
    const { geo, loading } = this.props.geo;
    const editProfile = (
      <Link to="edit-geo" className="btn btn-lg btn-info">
        edit Geo
      </Link>
    );
    let dashBoardContent;

    if (geo == null || loading) {
      dashBoardContent = <Spinner />;
    } else {
      if (Object.keys(geo).length > 0) {
        dashBoardContent = (
          <tbody>
            {geo.map(obj => {
              return (
                <table className="table table-dark">
                  <thead>
                    <tr key={obj.id}>
                      <th scope="col">Title</th>
                      <th scope="col">Message</th>
                      <th scope="col">Lat</th>
                      <th scope="col">Lng</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={obj.id}>
                      <th>{obj.title}</th>
                      <th>{obj.message}</th>
                      <th>{obj.lat}</th>
                      <th>{obj.lng}</th>
                      <th>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => this.delete(obj.id)}
                        >
                          delete
                        </button>
                      </th>
                    </tr>
                  </tbody>
                </table>
              );
            })}
          </tbody>
        );
      } else {
        dashBoardContent = (
          <div>
            <p className="lead text-muted">Welcome</p>
            <p>Create your first Geo</p>
            <Link to="create-geo" className="btn btn-lg btn-info">
              Create Geo
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="container">
              <Link to="create-geo" className="btn btn-lg btn-info">
                Create Geo
              </Link>
            </div>
            <div className="col-md-12">{dashBoardContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getGeo: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  geo: PropTypes.object.isRequired,
  deleteGeo: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  geo: state.geo,
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { getGeo, deleteGeo }
)(Dashboard);
