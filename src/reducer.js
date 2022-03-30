import { CLEAR_CART, DECREASE, INCREASE, REMOVE } from "./components/action";
export default function reducer(state, action) {
  if(action.type === CLEAR_CART){
    return {
      ...state,
      cart: [],
    }
  }
  if(action.type === REMOVE){
    console.log('remove');
  }
  if(action.type === INCREASE){
    console.log('increase');
  }
  if(action.type === DECREASE){
    console.log('decrease');
  }



  return state;
}
