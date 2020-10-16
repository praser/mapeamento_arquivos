import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Login } from "./components/session"
import ListFiles from "./components/listFiles"
import PrivateRoute from "./components/privateRoute"
import { UserProvider } from "./contexts"
import { ApolloProvider } from "@apollo/client"
import client from "./services/filesGraphql"

const App = () => {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <Router>
          <Switch>
            <Route path='/login' component={Login} />
            <PrivateRoute path='/' component={ListFiles} />
          </Switch>
        </Router>
      </UserProvider>
    </ApolloProvider>
  )
}

export default App
