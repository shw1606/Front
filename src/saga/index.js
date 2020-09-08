import { all, call } from "redux-saga/effects";

import common from "./common.saga";
import home from "./home.saga";
import postDetail from "./postDetail.saga";
import register from "./register.saga";
import user from "./user.saga";
import modal from "./modal.saga";
import postList from "./postList.saga";

export default function* () {
  yield all([
    call(common),
    call(home),
    call(postDetail),
    call(register),
    call(user),
    call(modal),
    call(postList)
  ]);
}
