import { configureStore, createStore } from "@reduxjs/toolkit";
import cakeReducer from "./cakes/CakeReducer";
import rootReducers from "./rootReducer";
import logger from "redux-logger";

const store = configureStore({reducer: rootReducers,
    middleware: (getInitialState) => getInitialState().concat(logger),
})

export default store