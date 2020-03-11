import {ADD_TO_CHICKIN_CART,ADD_TO_CHICK_OUT_CART,REMOVE_FROM_ALLRESOURCES_CART,
    REMOVE_FROM_CHECKIN_CART,REMOVE_FROM_CHECKOUT_CART} from '../actions/types'
    import response from '../attendance_data'
const initialState={
    items:response.data,
    checkInItems:[],
    checkOutItems:[]
}
export default function(state=initialState,action){
    switch(action.type){
        case ADD_TO_CHICKIN_CART:
            return{...state,checkInItems:action.payload.cartItems}
            case ADD_TO_CHICK_OUT_CART:
                return{...state,checkOutItems:action.payload.cartItems}
            case REMOVE_FROM_ALLRESOURCES_CART:
                return{...state,items:action.payload.cartItems}
                case REMOVE_FROM_CHECKIN_CART:
                    
            return{...state,checkInItems:action.payload.cartItems}
            
            case REMOVE_FROM_CHECKOUT_CART:
                return{...state,checkOutItems:action.payload.cartItems}
            default :
            return state
    }
}