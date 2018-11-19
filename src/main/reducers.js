import { combineReducers } from 'redux'

import DashboardReducer from '@/Dashboard/dashboardReducer'
import tabReducer from '../common/tab/tabReducer'

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: tabReducer
})

export default rootReducer