import React from "react";
import { createStore } from "redux";
// items
import cartItems from "./cart-items";
// import actions
import { DECREASE, INCREASE } from "./components/action";
import CartContainer from "./components/CartContainer";
// components
import Navbar from "./components/Navbar";
import reducer from "./reducer";
// redux stuff
const initialState = { count: 14, name: "chaudhuree" };


const store = createStore(reducer, initialState);

// store.getState() returns the current state of the store
store.dispatch({ type: DECREASE });
store.dispatch({ type: INCREASE });

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
