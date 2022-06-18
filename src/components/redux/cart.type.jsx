import { type } from "@testing-library/user-event/dist/type";


export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_TO_CART = "REMOVE_TO_CART"



export const addtocart = (data)=>{
   return{
    type:ADD_TO_CART,
    payload:data,
   }
}


export const deleteitem = (id)=>{
    return{
        type:REMOVE_TO_CART,
        payload:id
    }
}