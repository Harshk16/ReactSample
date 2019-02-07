import axios from "axios";
import { GET_GEO, LOADING, CLEAR_GEO } from "./constant";

// GET ALL GEO
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
