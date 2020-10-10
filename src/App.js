import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Header from './header';
import routes from './config/routes';

const isUserAuthenticated = false;

const PrivateRoute = ({ component: Component }) => {
  return (
    <Route
      render={() => {
        if (isUserAuthenticated) {
          return <Component />;
        }
        return <Redirect to="/home" />;
      }}
    />
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {routes.map((route) => {
          if (route.isPublic) {
            return (
              <Route
                path={route.path}
                component={route.component}
                key={route.path}
              />
            );
          }
          return (
            <PrivateRoute
              path={route.path}
              component={route.component}
              key={route.path}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
