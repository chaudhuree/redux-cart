import {
  CLEAR_CART,
  DECREASE,
  GET_TOTALS,
  INCREASE,
  REMOVE
} from "./components/action";
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
    let tempCart = [];
    if (action.payload.amount === 1) {
      tempCart = state.cart.filter((item) => item.id !== action.payload.id);
    } else {
      tempCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...item, amount: item.amount - 1 };
        }
        return item;
      });
    }
    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === GET_TOTALS) {
let {total,amount} = state.cart.reduce(
      (cartTotal, cartItem) => {
        cartTotal.total += cartItem.price * cartItem.amount;
        cartTotal.amount += cartItem.amount;
        return cartTotal;
      },  
      { total: 0, amount: 0 }
    );
    console.log(total,amount);
    total=total.toFixed(2);
    return {
      ...state,
      total,
      amount,
    };
  }

  return state;
}
