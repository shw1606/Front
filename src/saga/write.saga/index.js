import { all, fork } from "redux-saga/effects";

// saga
import submitSeries from "./submitSeries";
import loadSeries from "./loadSeries";
import uploadThumbnail from "./uploadThumbnail";
import uploadMarkdownImage from "./uploadMarkdownImage";
import submitSavedPost from "./submitSavedPost";
import loadSavedPost from "./loadSavedPost";
import submitPost from "./submitPost";

export default function* () {
  yield all([
    fork(submitSeries),
    fork(loadSeries),
    fork(uploadThumbnail),
    fork(uploadMarkdownImage),
    fork(submitSavedPost),
    fork(loadSavedPost),
    fork(submitPost),
  ]);
}
