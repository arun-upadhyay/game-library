import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import thunk from "redux-thunk"
import {combineReducers, createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux'
import gameReducer from "./reducers/GameRuducer";

const store = createStore(combineReducers({
    gameReducer
}), applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
