import React from 'react'
import Main from "./components/Main";
import Profile from "./components/Profile";
import Particles from '@tsparticles/react';
import particlesConfig from './components/particlesConfig';

import {
  BrowserRouter as Router
} from "react-router-dom";


function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Particles
        params={particlesConfig}
        style={{
          width: '100 %',
          height: '100 %',
          position: 'absolute',
          background: `#000000`
        }}
      />

      <div className="container d-flex vh-100 justify-content-center">
        <div className="row my-auto">
          <div className="profile col-lg-3 py-3">
            <Profile />
          </div>
          <div className="col-lg-9 pl-3 pr-0 mobile-fix">
            <div className="main">
              <Main />
            </div>
          </div>
        </div>
      </div>
    </Router >
  )
}

export default App

