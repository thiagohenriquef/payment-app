import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import BillingCycle from '@/BillingCycle'
import Dashboard from '@/Dashboard'

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={Dashboard} />
    <Route path='/billingCycles' component={BillingCycle} />
    <Redirect from='*' to='/' />
  </Router>
)