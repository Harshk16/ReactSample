import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./actions/authActions";
import { clearGeoData } from "./actions/geoAction";
import { logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/Navbar";
import Register from "./components/User/Register";
import Login from "./components/User/Login";
import Dashboard from "./components/dashboard/Dashboard";
import CreateGeoCaches from "./components/GeoCaches/CreateGeoCaches"
import EditGeoCaches from "./components/GeoCaches/EditGeoCaches"
import "./App.css";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);

  // Decode token and get info
  // const decoded = jwt_decode(localStorage.jwtToken);
  const decoded = localStorage.jwtToken;

  // Set user  and isAuthneticate
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    // store.dispatch(logoutUser());
    // Clear Geo Data
    // store.dispatch(clearGeoData());
    // Route to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/create-geo" component={CreateGeoCaches} />
              <Route exact path="/edit-geo" component={EditGeoCaches} />

            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
