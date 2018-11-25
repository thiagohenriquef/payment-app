import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import BillingCycle from '../components/BillingCycle'
import Dashboard from '../components/Dashboard'

export default props => (
  <div className='content-wrapper'>
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route exact path='/billingCycle' component={BillingCycle} />
      <Redirect from='*' to='/' />
    </Switch>
  </div>
)