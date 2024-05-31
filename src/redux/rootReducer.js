import { combineReducers } from "redux";
import { IceCreamReducer } from "./IceCream/IceCreamReducer";
import cakeReducer from "./cakes/CakeReducer";

const rootReducers = combineReducers({
    cake: cakeReducer,
    IceCream: IceCreamReducer
})

export default rootReducers