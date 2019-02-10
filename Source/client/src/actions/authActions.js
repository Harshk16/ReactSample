import { GET_ERRORS, SET_CURRENT_USER } from "./constant";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

// Register User
export const registerUser = (userData, history) => dispatch => {
  var headers = {
    "Content-Type": "application/json"
  };
  axios
    .post(
      "https://blooming-cove-35281.herokuapp.com/api/users",
      { user: userData },
      { headers: headers }
    )
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login- Get token
export const loginUser = userData => dispatch => {
  axios
    .post("https://blooming-cove-35281.herokuapp.com/api/oauth/token", userData)
    .then(res => {
      //save to local storage
      const { access_token } = res.data;

      // set token to local storage
      localStorage.setItem("jwtToken", access_token);

      // Set token to auth header
      setAuthToken(access_token);
      
      // Set Current User
      const data = res.data;
      const user = JSON.parse(JSON.stringify(data));
      // Set current user
      dispatch(setCurrentUser(user));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set Current user
export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};

// Logout User
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  //Remove auth header for new request
  setAuthToken(false);
  // Set current user to empty and authenticated to false
  dispatch(setCurrentUser({}));
};
