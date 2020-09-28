// import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";

import {
  SUBMIT_WRITTEN_POST_REQUEST,
  SUBMIT_WRITTEN_POST_SUCCESS,
  SUBMIT_WRITTEN_POST_FAILURE,
} from "store/actions/writeAction";

function submitPostAPI() {
  //   return axios.get();
  return { data: { title: "sdfdsfjkdsfds" } };
}

function* submitPost(action) {
  try {
    const result = yield call(submitPostAPI, action.data);
    yield put({ type: SUBMIT_WRITTEN_POST_SUCCESS, data: result.data });
    yield put(push(`/@Lawson/${result.data.title}`));
  } catch (error) {
    yield put({ type: SUBMIT_WRITTEN_POST_FAILURE, data: error });
  }
}

export default function* () {
  yield takeLatest(SUBMIT_WRITTEN_POST_REQUEST, submitPost);
}
