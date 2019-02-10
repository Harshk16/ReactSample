import axios from "axios";
import {
  GET_GEO,
  LOADING,
  CLEAR_GEO,
  GET_ERRORS,
  DELETE_GEO
} from "./constant";

// Create geo
export const createGeo = (newGeo, history) => dispatch => {
  var headers = {
    "Content-Type": "application/json"
  };
  axios
    .post(
      "https://blooming-cove-35281.herokuapp.com/api/geo_caches",
      { geo_cache: newGeo },
      { headers: headers }
    )
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// GET ALL GEO Data
export const getGeo = () => dispatch => {
  dispatch(setGeoLoading());

  axios
    .get("https://blooming-cove-35281.herokuapp.com/api/geo_caches")
    .then(res =>
      dispatch({
        type: GET_GEO,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_GEO,
        payload: {}
      })
    );
};

// Delete Geo
export const deleteGeo = (geoId, history) => dispatch => {
  console.log("Id", geoId);
  axios
    .delete(`https://blooming-cove-35281.herokuapp.com/api/geo_caches/${geoId}`)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Geo Loading
export const setGeoLoading = () => {
  return {
    type: LOADING
  };
};

// Clear Geo Indde
export const clearGeoData = () => {
  return {
    type: CLEAR_GEO
  };
};
