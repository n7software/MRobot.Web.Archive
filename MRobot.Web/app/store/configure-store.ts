/// <reference path="../../typings/index.d.ts" />

import { createStore, combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import reducers from "./reducers";

export default function configureStore(initialState: any) {
    const store = createStore(
        combineReducers(Object.assign({
            routing: routerReducer
        }, reducers)),
        initialState
    );

    return store;
}