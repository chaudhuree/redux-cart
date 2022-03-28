import React from "react";
import { createStore } from "redux";
// items
import cartItems from "./cart-items";
import CartContainer from "./components/CartContainer";
// components
import Navbar from "./components/Navbar";
// redux stuff
const initialState = { count: 14 };
function reducer(state, action) {
  if (action.type === "DECREASE") {
    return {
      count: state.count - 1,
    };
  }
  return state;
}

const store = createStore(reducer, initialState);

// store.getState() returns the current state of the store
store.dispatch({ type: "DECREASE" });
store.dispatch({ type: "DECREASE" });

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
