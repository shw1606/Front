// import axios from "axios";
import { call, cancel, delay, fork, put, takeLatest } from "redux-saga/effects";

import {
  SUBMIT_SAVED_POST_REQUEST,
  SUBMIT_SAVED_POST_SUCCESS,
  SUBMIT_SAVED_POST_FAILURE,
} from "store/actions/writeAction";
import { LOCAL_RQEUEST_ALERT } from "store/actions/commonAction";
import { ADD_SAVED_LIST_SUCCESS } from "store/actions/savesAction";

function submitSavedPostAPI() {
  return { data: "5d8fda2d-06c5-48cc-8ad4-b80cc23f643a" };
}

function* submitSavedPost(action) {
  try {
    if (action.status === 1) {
      const result = yield fork(submitSavedPostAPI, action.data);
      yield cancel(result);
    } else {
      if (action.status) yield delay(1000 * 10);
      const result = yield call(submitSavedPostAPI, action.data);
      yield put({ type: SUBMIT_SAVED_POST_SUCCESS, data: result.data });
      if (action.status) yield put({ type: LOCAL_RQEUEST_ALERT, data: "save" });
      yield put({ type: ADD_SAVED_LIST_SUCCESS, data: action.data });
    }
  } catch (error) {
    yield put({ type: SUBMIT_SAVED_POST_FAILURE, data: error });
  }
}

export default function* () {
  yield takeLatest(SUBMIT_SAVED_POST_REQUEST, submitSavedPost);
}
