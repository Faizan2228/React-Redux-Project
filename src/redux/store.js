import { configureStore, createStore } from "@reduxjs/toolkit";
import cakeReducer from "./cakes/CakeReducer";
import rootReducers from "./rootReducer";
import logger from "redux-logger";
import {composeWithDevTools} from 'redux-devtools-extension'

const store = configureStore({reducer: rootReducers,
    middleware: (getInitialState) => getInitialState().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store