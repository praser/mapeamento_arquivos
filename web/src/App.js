import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login, Logout } from './components/session';
import PrivateRoute from './components/privateRoute';
import { UserProvider } from './contexts';

const Hello = () => (
  <div>
    <h1>Hello World</h1>
    <Logout />
  </div>
);

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/" component={Hello} />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
