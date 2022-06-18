import { ADD_TO_CART, REMOVE_TO_CART} from "./cart.type";


let initstate = {
    cart:[]
}

export const cartitemreducer = (store = initstate , {type , payload})=>{
   switch(type){
     case ADD_TO_CART:{
        return {...store , cart:[...store.cart,payload] }
     }
     case REMOVE_TO_CART:{
        return{
            ...store , cart:store.cart.filter((e)=>e.id !== payload)
        }
     }
     default:{
        return store
     }
   }
}