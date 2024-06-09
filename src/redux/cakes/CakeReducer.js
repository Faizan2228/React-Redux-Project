import { BUY_CAKE } from "./CakeTypes"

const initialStates = {
    numOfCakes: 10
}

const cakeReducer = (state = initialStates, action) => {
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                numOfCakes: state.numOfCakes - action.Payload
            }
            default: return state
    }
}

export default cakeReducer