import { ADD_TO_CHICKIN_CART,ADD_TO_CHICK_OUT_CART,REMOVE_FROM_ALLRESOURCES_CART,
  REMOVE_FROM_CHECKIN_CART,REMOVE_FROM_CHECKOUT_CART } from "./types";
export const addToCheckInCart = (items, product) => dispatch => {
  const cartItems = items.slice();
  let productAlreadyInCart = false;
  cartItems.forEach(item => {
    if (item.id === product.id) {
      productAlreadyInCart = true;
      return null;
    }
  });
  if (!productAlreadyInCart) {
    cartItems.push({ ...product,});
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  //   console.log("ITEMS",cartItems)
  return dispatch({
type:ADD_TO_CHICKIN_CART,
    payload: { cartItems }
  });
};
export const removeFromAllResources=(items,product)=>(dispatch)=>{
  const cartItems=items.slice().filter(ele=>ele.id !== product.id)
  // localStorage.setItem("cartItems",JSON.stringify(cartItems))
  return dispatch({
       type:REMOVE_FROM_ALLRESOURCES_CART,
          payload: { cartItems }
        });

}
export const removeFromCheckIn=(items,product)=>(dispatch)=>{
  const cartItems=items.slice().filter(ele=>ele.id !== product.id)
  // localStorage.setItem("cartItems",JSON.stringify(cartItems))
  return dispatch({
       type:REMOVE_FROM_CHECKIN_CART,
          payload: { cartItems }
        });

}
export const removeFromCheckOut=(items,product)=>(dispatch)=>{
  const cartItems=items.slice().filter(ele=>ele.id !== product.id)
  // localStorage.setItem("cartItems",JSON.stringify(cartItems))
  return dispatch({
       type:REMOVE_FROM_CHECKOUT_CART,
          payload: { cartItems }
        });

}
export const addToCheckOutCart = (items, product) => dispatch => {
  const cartItems = items.slice();
  let productAlreadyInCart = false;
  cartItems.forEach(item => {
    if (item.id === product.id) {
      productAlreadyInCart = true;
    }
  });
  if (!productAlreadyInCart) {
    cartItems.push({ ...product,});
  }
  
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  //   console.log("ITEMS",cartItems)
  return dispatch({
type:ADD_TO_CHICK_OUT_CART,
    payload: { cartItems }
  });
};

