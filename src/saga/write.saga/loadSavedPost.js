// import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import {
  LOAD_SAVED_POST_REQUEST,
  LOAD_SAVED_POST_SUCCESS,
  LOAD_SAVED_POST_FAILURE,
} from "store/actions/writeAction";

// dummy
import loadSavedPostDummy from "saga/_dummy/loadSavedPost.json";

function logicAPI() {
  //   return axios.get();
  return loadSavedPostDummy;
}

function* logic(action) {
  try {
    const result = yield call(logicAPI, action.data);
    yield put({ type: LOAD_SAVED_POST_SUCCESS, data: result.data });
  } catch (error) {
    yield put({ type: LOAD_SAVED_POST_FAILURE, data: error });
  }
}

export default function* watchlogic() {
  yield takeLatest(LOAD_SAVED_POST_REQUEST, logic);
}
