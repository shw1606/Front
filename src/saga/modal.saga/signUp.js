import { call, delay, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// actions
import {
  SUBMIT_SIGN_UP_REQUEST,
  SUBMIT_SIGN_UP_SUCCESS,
  SUBMIT_SIGN_UP_FAILURE,
} from "store/actions/modalAction";

function signUpApi() {
  // return axios.get();
}

function* signUp(action) {
  try {
    yield delay(1000);
    const result = yield call(signUpApi);
    yield put({
      type: SUBMIT_SIGN_UP_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: SUBMIT_SIGN_UP_FAILURE,
      data: error,
    });
  }
}

export default function* watchsignUp() {
  yield takeLatest(SUBMIT_SIGN_UP_REQUEST, signUp);
}
