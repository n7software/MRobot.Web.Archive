/// <reference path="../typings/index.d.ts" />
import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, browserHistory } from "react-router";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";
import configureStore from "../app/store/configure-store";

import App from "../app/App";

const store = configureStore({});
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={ App }>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("client")
);