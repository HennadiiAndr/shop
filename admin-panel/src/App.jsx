import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Categories from './pages/categories';
import Login from './pages/login';
import PrivateRoute from './components/private-route';
import Home from './pages/home';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <PrivateRoute path="/сategories">
          <Categories />
        </PrivateRoute>

        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
