import { BUY_CAKE } from "./CakeTypes"

export const buyCake = (num = 1) => {
    return {
        type: BUY_CAKE,
        Payload: num,
    }
}