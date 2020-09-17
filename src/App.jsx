import React, { lazy, Suspense } from "react";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { Route, Switch } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";

// root redux & root saga
import RootRedux from "store/index";
import RootSaga from "saga/index";

// style reset
import StyleReset from "components/styleReset";

// global Layout
import GlobalLayout from "components/Common/GlobalLayout";

// router pages
const Home = lazy(() => import("pages/Home"));
const Search = lazy(() => import("pages/Search"));
const Tags = lazy(() => import("pages/Tags"));
const Register = lazy(() => import("pages/Register"));
const PostDetail = lazy(() => import("pages/PostDetail"));
const Setting = lazy(() => import("pages/Setting"));
const Write = lazy(() => import("pages/Write"));
const Saves = lazy(() => import("pages/Saves"));
const ReadingList = lazy(() => import("pages/ReadingList"));
const User = lazy(() => import("pages/User"));

// redux 및 redux-saga 세팅
const store = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const config = createStore(RootRedux, enhancer);
  sagaMiddleware.run(RootSaga);
  return config;
};

const App = () => (
  <Provider store={store()}>
    <StyleReset />
    <GlobalLayout>
      <Suspense fallback={<></>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recent" exact component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/tags" exact component={Tags} />
          <Route path="/tags/:tag" exact component={Tags} />
          <Route path="/@:author/:title" component={PostDetail} />
          <Route path="/profile/@:username" exact component={User} />
          <Route path="/profile/@:username/:tab" component={User} />
          <Route path="/register" component={Register} />
          <Route path="/lists/:tab" component={ReadingList} />
          <Route path="/saves" component={Saves} />
          <Route path="/write" component={Write} />
          <Route path="/setting" exact component={Setting} />
        </Switch>
      </Suspense>
    </GlobalLayout>
  </Provider>
);

export default App;
