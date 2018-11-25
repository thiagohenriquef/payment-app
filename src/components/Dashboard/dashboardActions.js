import axios from 'axios'
import BASE_URL from '../../consts'

export const getSummary = () => {
  const request = axios.get(`${BASE_URL.API_URL}/billingCycle/summary`)
  return {
    type: 'BILLING_SUMMARY_FETCHED',
    payload: request
  }
}