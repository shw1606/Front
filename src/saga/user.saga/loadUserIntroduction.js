import { delay, call, put, takeLatest } from 'redux-saga/effects';

import {
  LOAD_USER_INTRODUCTION_REQUEST,
  LOAD_USER_INTRODUCTION_SUCCESS,
  LOAD_USER_INTRODUCTION_FAILURE
} from "store/actions/userAction";

import dummy from "../postDetailDummy.json";

function loadUserIntroductionAPI() {
  return dummy;
}

function* loadUserIntroduction(action) {
  try {
    delay(1000);
    const result = yield call(loadUserIntroductionAPI, action.id);
    yield put({
      type: LOAD_USER_INTRODUCTION_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield put({
      type: LOAD_USER_INTRODUCTION_FAILURE,
      data: error
    });
  }
}

export default function* watchLoadUserInstruction() {
  yield takeLatest(LOAD_USER_INTRODUCTION_REQUEST, loadUserIntroduction);
}
