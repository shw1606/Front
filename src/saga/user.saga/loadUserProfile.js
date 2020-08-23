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
    yield console.log("API 호출");
    yield put({
      type: LOAD_USER_PROFILE_SUCCESS,
      data: result.data
    });
    yield console.log("성공");
  } catch (error) {
    yield put({
      type: LOAD_USER_PROFILE_FAILURE,
      data: error
    })
    yield console.log("실패");
  }
}


export default function* watchLoadUser() {

}
