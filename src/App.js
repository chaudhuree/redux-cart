import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
// items
import cartItems from "./cart-items";
// import actions
import CartContainer from "./components/CartContainer";
// components
import Navbar from "./components/Navbar";
import reducer from "./reducer";
// redux stuff
const initialState = { cart: cartItems,total:0,amount:4 };


const store = createStore(reducer, initialState);

// store.getState() returns the current state of the store
// store.dispatch({ type: DECREASE });
// store.dispatch({ type: INCREASE });

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer cart={cartItems} />
    </Provider>
  );
}

export default App;
