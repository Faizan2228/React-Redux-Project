import { BUY_ICECREAM } from "./IceCreamTypes";

const initialIceCream = {
    numOfIceCreams : 20
}

export const IceCreamReducer = (state = initialIceCream, action) => {
    switch(action.type){
        case BUY_ICECREAM: 
        return{
            ...state,
            numOfIceCreams: state.numOfIceCreams - 2
        }
        default: return state
    }
}