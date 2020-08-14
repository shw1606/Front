import { all, call } from "redux-saga/effects";

import common from "./common.saga";
import home from "./home.saga";
import postDetail from "./postDetail.saga";
import user from "./user.saga";

export default function* () {
  yield all([call(common), call(home), call(postDetail), call(user)]);
}
