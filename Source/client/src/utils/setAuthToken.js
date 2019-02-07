import axios from 'axios';

const setAuthToken = token => {
    if(token) {
        console.log("setAuth", token);
        // Apply to all api request
        axios.defaults.headers.common['Authorization'] = token;
    } 
    else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export default setAuthToken;