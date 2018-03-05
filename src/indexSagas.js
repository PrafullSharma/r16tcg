import SignupSaga from './signup/sagas'
import LoginSaga from './login/sagas'
import LogoutSaga from './logout/sagas'

export default function* IndexSaga () {
  yield [
    SignupSaga(),
    LoginSaga(),
    LogoutSaga(),
  ]
}