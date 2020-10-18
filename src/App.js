import React, { Component } from 'react'
import Main from "./components/Main";
import Profile from "./components/Profile";
import {
  BrowserRouter as Router
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="container">
          <div className="row vh-100">
            <div className="col-lg-3 my-auto p-0 mobile-fix">
              <div className="profile bg-white p-3"><Profile /></div>
            </div>
            <div className="col-lg-9 my-auto p-0 mobile-fix">
              <div className="main bg-white px-4 py-3 "><Main /></div>
            </div>
          </div>
        </div >
      </Router >
    )
  }
}

export default App

