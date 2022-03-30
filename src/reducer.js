import { CLEAR_CART, DECREASE, INCREASE, REMOVE } from "./components/action";
export default function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
  }
  if (action.type === INCREASE) {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        item = { ...item, amount: item.amount + 1 };
      }
      return item;
    });

    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === DECREASE) {
    return {};
  }

  return state;
}
