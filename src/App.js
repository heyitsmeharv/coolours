import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

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
                <Redirect exact from='/' to="/random" />
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
