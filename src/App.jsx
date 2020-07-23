import React from "react";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";

// router pages
import Home from "pages/Home";
import Search from "pages/Search";
import Tags from "pages/Tags";

// root redux & root saga
import RootRedux from "store/index";
import RootSaga from "saga/index";

// style reset
import StyleReset from "src/components/StyleReset";

// global Layout
import GlobalLayout from "components/Layout/GlobalLayout";

/*
> Provider : react-redux에서 제공하는 컴포넌트
> StyleReset : 모든 페이지에 공통적으로 적용되는 style reset
> GlobalLayout : 모든 페이지에 공통적인 레이아웃(상단은 헤더 영역, 하단은 페이지 별 UI)
> BrowserRouter, Switch, Route : react-router-dom에서 제공하는 컴포넌트
*/
const App = () => {
  return (
    <>
      <Provider store={store()}>
        <StyleReset />
        <GlobalLayout>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/search" component={Search} />
              <Route path="/tags" exact component={Tags} />
              <Route path="/tags:tag" exact component={Tags} />
            </Switch>
          </BrowserRouter>
        </GlobalLayout>
      </Provider>
    </>
  );
};

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

export default App;
