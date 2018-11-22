import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from '@/Dashboard/dashboardReducer'
import tabReducer from '../common/tab/tabReducer'
import billingCycleReducer from '../components/BillingCycle/billingCycleReducer'

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: tabReducer,
  billingCycle: billingCycleReducer,
  form: formReducer,
  toastr: toastrReducer
})

export default rootReducer
