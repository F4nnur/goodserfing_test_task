import createSagaMiddleware from "redux-saga";
import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {rootWatcher} from "../saga";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({});

export const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);