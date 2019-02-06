import { GET_ERRORS, SET_CURRENT_USER } from "./constant";
import axios from "axios";
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

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

// Login with token
export const loginUser = userData => dispatch => {
  axios
    .post("https://blooming-cove-35281.herokuapp.com/api/oauth/token", userData)
    .then(res => {
        //save to local storage
        const {access_token} = res.data;
        console.log("token", access_token);
        
        // set token to ls
        localStorage.setItem('jwtToken', access_token)
        // Set token to auth header
        setAuthToken(access_token)
        // Decode token to get user data
        const {decode} = res.data
        // const decode = jwt_decode(access_token);
        console.log("Ude", decode);
        
        // Set current user
        dispatch(setCurrentUser(decode))

    })
    // .catch(err =>
    //   dispatch({
    //     type: GET_ERRORS,
    //     payload: err.response.data
    //   })
    // );
};

// Set Current user
export const setCurrentUser = decode => {
    return {
        type: SET_CURRENT_USER,
        payload: decode
    };
};
