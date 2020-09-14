import { all, fork } from "redux-saga/effects";

// saga
import loadSaveList from "./loadSaveList";
import deleteSaveItem from "./deleteSaveItem";

export default function* () {
  yield all([fork(loadSaveList), fork(deleteSaveItem)]);
}
