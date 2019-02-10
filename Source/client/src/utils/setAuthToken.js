import axios from 'axios';

const setAuthToken = access_token => {
    if(access_token) {
        console.log("setAuth", access_token);
        // Apply to all api request
        axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    } 
    else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export default setAuthToken;