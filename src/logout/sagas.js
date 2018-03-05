import {put, takeLatest} from "redux-saga/effects"
import browserHistory from "../history"

import {
  unsetClient,
} from '../client/actions'

import {
  LOGOUT_REQUEST,
} from './constants'

function* logout () {
  console.log('fired first')
  // dispatches the CLIENT_UNSET action
  yield put(unsetClient())
  // remove our token
  localStorage.removeItem('token')

  // redirect to the /login screen
  browserHistory.push('/login')
  console.log('fired last')
}

export function *watchLogoutRequested() {
  yield takeLatest(LOGOUT_REQUEST, logout);
}

export default watchLogoutRequested