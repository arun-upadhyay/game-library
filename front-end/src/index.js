import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {combineReducers, createStore} from "redux";
import {Provider} from 'react-redux'
import gameReducer from "./reducers/GameRuducer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={createStore(combineReducers({
        gameReducer
    }))}>
        <App/>
    </Provider>
);
