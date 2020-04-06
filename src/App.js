import React, { useState, useEffect } from "react";

import Tile from './components/Tile/Tile';
// import TopBar from './components/TopBar/TopBar';

import './style.scss';
// import colour from './resources/styles/colours';


const App = () => {
  return (
    <>
      {/* <TopBar /> */}
      <div className="container-fluid">
        <div className="d-flex justify-content-left">
          <div className="d-flex justify-content-center">
            <h1>Colour Generator</h1>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="d-flex justify-content-center">
            <Tile />
          </div>
          <div className="align-self-center">
            <button type="button" className="btn btn-primary">Generate</button>
          </div>
          <div className="d-flex justify-content-center">
            <Tile />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
