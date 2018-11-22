import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset, initialize } from 'redux-form'
import billingCycle from './billingCycle'
import {
  showTabs,
  selectTab
} from '../../common/tab/tabActions'

const BASE_URL = 'http://localhost:3000/api'
const INITIAL_VALUES = {}

export function getList() {
  const request = axios.get(`${BASE_URL}/billingCycle`)
  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}

export function update(values) {
  return submit(values, 'put')
}

export function create(values) {
  return submit(values, 'post')
}

function submit(values, method) {
  return dispatch => {
    const id = values._id ? values._id : ''
    axios[method](`${BASE_URL}/billingCycle/${id}`, values)
      .then(resp => {
        toastr.success('Sucesso', 'Operação Realizada com sucesso.')
        dispatch(init())
      })
      .catch(e => e.response.data.errors.forEach(error => toastr.error('Erro', error)))
    }
}

export function showUpdate (billingCycle) {
  return [
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    getList(),
    initialize('billingCycleForm', billingCycle)
  ]
}

export function init() {
  return [
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('billingCycleForm', INITIAL_VALUES)
  ]
}