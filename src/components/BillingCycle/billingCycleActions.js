import axios from 'axios'
import billingCycle from './billingCycle';
const BASE_URL = 'http://localhost:3000/api'

export function getList() {
  const request = axios.get(`${BASE_URL}/billingCycle`)
  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}

export function create(values) {
  console.log(values)
  const request = axios.post(`${BASE_URL}/billingCycle`, values)
  return {
    type: 'TEMPORARY',
    payload: request
  }
}