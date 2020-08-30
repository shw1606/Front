import { call, delay, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// actions
import {
  SUBMIT_SIGN_IN_REQUEST,
  SUBMIT_SIGN_IN_SUCCESS,
  SUBMIT_SIGN_IN_FAILURE,
} from "store/actions/modalAction";

function signInApi() {
  // return axios.get();
}

function* signIn(action) {
  try {
    yield delay(1000);
    const result = yield call(signInApi);
    yield put({
      type: SUBMIT_SIGN_IN_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: SUBMIT_SIGN_IN_FAILURE,
      data: error,
    });
  }
}

export default function* watchsignIn() {
  yield takeLatest(SUBMIT_SIGN_IN_REQUEST, signIn);
}
