import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
  browserHistory,
  IndexRoute,
  Route,
  Router,
} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import createStore from './middlewares'
import Agencies from './pages/agencies'
import Dashboard from './pages/dashboard'
import Layout from './pages/layout'
import Orders from './pages/orders'
import Salesmen from './pages/salesmen'
import Sample from './pages/sample'
import Signin from './pages/signin'

import './index.scss'

const store = createStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Dashboard} />
          <Route path="dashboard" component={Dashboard} />
          <Route path="agencies" component={Agencies} />
          <Route path="salesmen" component={Salesmen} />
          <Route path="orders" component={Orders} />
          {Sample}
        </Route>
        <Route path="/signin" component={Signin} />
      </Router>
    </Provider>
  ),
  document.getElementById('root'),
)
