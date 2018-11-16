import axios from 'axios'
const BASE_URL = 'http://localhost:3000/api'

export const getSummary = () => {
  const request = axios.get(`${BASE_URL}/billingCycle/summary`)
  return {
    type: 'BILLING_SUMMARY_FETCHED',
    payload: request
  }
}