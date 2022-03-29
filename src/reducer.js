import { CLEAR_CART } from "./components/action";
export default function reducer(state, action) {
  if(action.type === CLEAR_CART){
    return {
      ...state,
      cart: [],
      total: 0,
      amount: 0
    }
  }


  return state;
}
