import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import Random from './pages/Random';
import Converter from './pages/Converter';

const App = () => {
  return (
    <Router>
      <Route
        render={({ location }) => {
          return (
            <>
              <Switch location={location}>
                <Route exact path='/random' component={Random} />
                <Route exact path='/convert' component={Converter} />
              </Switch>
            </>
          );
        }}
      />
    </Router>
  );
}

export default App;
