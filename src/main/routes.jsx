import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import AuthOrApp from './authOrApp'
import BillingCycle from '@/BillingCycle'
import Dashboard from '@/Dashboard'

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={AuthOrApp}>
      <IndexRoute component={Dashboard} />
      <Route path='billingCycles' component={BillingCycle} />
    </Route>
    <Redirect from='*' to='/' />
  </Router>
)