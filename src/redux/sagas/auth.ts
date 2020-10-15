import { takeLatest, call, put } from 'redux-saga/effects';
import api, { authRequest } from 'services/api';
import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR
} from 'redux/types';

function* loginUser() {
  try {
    const { data } = yield call([api, 'get'], authRequest.LOGIN);
    yield put({
      type: SIGN_IN_SUCCESS,
      payload: { data },
    });
  } catch (error) {
    yield put({
      type: SIGN_IN_ERROR,
    });
  }
}


export default function* authSaga() {
  yield takeLatest(SIGN_IN_REQUEST, loginUser);

}
