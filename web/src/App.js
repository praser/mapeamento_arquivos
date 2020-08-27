import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login, Logout } from './components/session';
import PrivateRoute from './components/privateRoute';
import { UserProvider } from './contexts';
import FileExplorer, { Filter } from './components/fileExplorer';
import { ApolloProvider, useQuery } from '@apollo/client';
import client, { LIST_FILES_QUERY } from './services/filesGraphql'

const Hello = () => {
  const { loading, error, data } = useQuery(LIST_FILES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Logout />
      <Filter placeholder= "Pesquisar..." />
      <FileExplorer files={data.files} />
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
