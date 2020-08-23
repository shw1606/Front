import { delay, call, put, takeLatest } from "redux-saga/effects";

import {
  LOAD_USER_PROFILE_REQUEST,
  LOAD_USER_PROFILE_SUCCESS,
  LOAD_USER_PROFILE_FAILURE,
} from "store/actions/userAction";

import dummy from "../userDummy.json";

function loadUserProfileAPI(id) {
  return dummy;
}

function* loadUserProfile(action) {
  try {
    const result = yield call(loadUserProfileAPI, action.id);
    yield put({
      type: LOAD_USER_PROFILE_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield put({
      type: LOAD_USER_PROFILE_FAILURE,
      data: error
    });
  }
}


export default function* watchLoadUser() {
  yield takeLatest(LOAD_USER_PROFILE_REQUEST, loadUserProfile);
}
