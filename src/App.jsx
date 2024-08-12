import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import Profile from "./components/Profile";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import particlesConfig from './components/particlesConfig';
import { BrowserRouter as Router } from "react-router-dom";
import { loadSlim } from "@tsparticles/slim";

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        className="h-screen"
        options={particlesConfig}
      />
      <div className="position-absolute top-0 left-0 w-100 h-100 bg-dark-40">
        <div className="container d-flex vh-100 justify-content-center "  >
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
      </div>
    </Router>
  );
}

export default App;
