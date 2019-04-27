import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
//redux-related imports
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
//pages
import Registerpage from './pages/registerpage';
import Homepage from './pages/homepage'
//styles
import './index.css'
import * as serviceWorker from './serviceWorker'

const store= createStore(rootReducer)

render(
  <Provider store={store}>
    <Router>
      <Route path="/register" component={Registerpage} />
      <Route path="/home" component={Homepage} />
  </Router>
  </Provider>
  , document.getElementById('root')
)

serviceWorker.register()
/*
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

render(
    <ApolloClient client={client}>
    <App/>
  </ApolloClient>
  ,document.getElementById('root')
)
*/