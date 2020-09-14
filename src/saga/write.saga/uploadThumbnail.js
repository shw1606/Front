// import axios from "axios";
import { call, delay, put, takeLatest } from "redux-saga/effects";

import {
  UPLOAD_THUMBNAIL_REQUEST,
  UPLOAD_THUMBNAIL_SUCCESS,
  UPLOAD_THUMBNAIL_FAILURE,
} from "store/actions/writeAction";

// dummy
import uploadThumbnailDummy from "saga/_dummy/uploadThumbnail.json";

function uploadThumbnailAPI(data) {
  //   return axios.post("/", data);
  return uploadThumbnailDummy;
}

function* uploadThumbnail(action) {
  try {
    yield delay(1000);
    const result = yield call(uploadThumbnailAPI, action.data);
    yield put({ type: UPLOAD_THUMBNAIL_SUCCESS, data: result.data });
  } catch (error) {
    yield put({ type: UPLOAD_THUMBNAIL_FAILURE, data: error });
  }
}

export default function* () {
  yield takeLatest(UPLOAD_THUMBNAIL_REQUEST, uploadThumbnail);
}
