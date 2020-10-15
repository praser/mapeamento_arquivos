import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login, Logout } from './components/session';
import PrivateRoute from './components/privateRoute';
import { UserProvider } from './contexts';
import FileExplorer from './components/fileExplorer';
import { ApolloProvider } from '@apollo/client';
import client from './services/filesGraphql'
import useCurrentUser from './hooks/useCurrentUser'

const Hello = () => {
  const user = useCurrentUser();
  console.log(user);
  return (
    <div>
      <Logout />
      <FileExplorer />
    </div>
  )
};

const App = () => {
  return (
    <ApolloProvider client={client}>  
      <UserProvider>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/" component={Hello} />
          </Switch>
        </Router>
      </UserProvider>
    </ApolloProvider>
  );
}

export default App;
