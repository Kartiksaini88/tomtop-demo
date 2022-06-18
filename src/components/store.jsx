import { legacy_createStore as createstore , combineReducers } from "redux";
import { cartitemreducer } from "./redux/cart.reducer";


export const rooreducer = combineReducers({
    cart : cartitemreducer
})


export const store = createstore(rooreducer)