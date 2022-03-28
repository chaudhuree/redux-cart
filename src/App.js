import React from "react";
import { createStore } from "redux";
// items
import cartItems from "./cart-items";
import CartContainer from "./components/CartContainer";
// components
import Navbar from "./components/Navbar";
// redux stuff
const initialState = { count: 0 };
function reducer(state, action) {
  console.log("reducer");
}

const store = createStore(reducer, initialState);

function App() {
  // cart setup

  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
