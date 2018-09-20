import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* mySaga() {
  console.log('Hello Sagas!')
}

export default mySaga;