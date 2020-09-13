// import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import {
  UPLOAD_MARKDOWN_IMAGE_REQUEST,
  UPLOAD_MARKDOWN_IMAGE_SUCCESS,
  UPLOAD_MARKDOWN_IMAGE_FAILURE,
} from "store/actions/writeAction";

// dummy
import markdownImage from "saga/_dummy/uploadThumbnail.json";

function uploadMarkdownImageAPI(data) {
  //   return axios.get();
  return markdownImage;
}

function* uploadMarkdownImage(action) {
  try {
    const result = yield call(uploadMarkdownImageAPI, action.data);
    yield put({ type: UPLOAD_MARKDOWN_IMAGE_SUCCESS, data: result.data });
  } catch (error) {
    yield put({ type: UPLOAD_MARKDOWN_IMAGE_FAILURE, data: error });
  }
}

export default function* () {
  yield takeLatest(UPLOAD_MARKDOWN_IMAGE_REQUEST, uploadMarkdownImage);
}
