import axios from 'axios'
import BASE_URL from '../../consts'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import {
  showTabs,
  selectTab
} from '../../common/tab/tabActions'

const INITIAL_VALUES = {credits: [{}], debits: [{}]}

export function getList() {
  const request = axios.get(`${BASE_URL.API_URL}/billingCycle`)
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

export function remove(values) {
  return submit(values, 'delete')
}

function submit(values, method) {
  return dispatch => {
    const id = values._id ? values._id : ''
    axios[method](`${BASE_URL.API_URL}/billingCycle/${id}`, values)
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
    initialize('billingCycleForm', billingCycle)
  ]
}

export function showDelete (billingCycle) {
  return [
    showTabs('tabDelete'),
    selectTab('tabDelete'),
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