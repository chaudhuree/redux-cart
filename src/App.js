import React from "react";
import { createStore } from "redux";
// items
import cartItems from "./cart-items";
import CartContainer from "./components/CartContainer";
// components
import Navbar from "./components/Navbar";
// redux stuff
const initialState = { count: 14 ,name:'chaudhuree'};

function reducer(state, action) {
  if (action.type === "DECREASE") {
    return {...state, count: state.count - 1};
 
  }
  if (action.type === "INCREASE") {
return{...state, count: state.count + 1,name:'sOhan chaudhuree'};
  }
  if(action.type === "RESET"){
    return {...state, count: 0};
  }
  if(action.type === "CHANGE_NAME"){
    return {...state, name: action.payload};
  }
  
  return state;
}

const store = createStore(reducer, initialState);

// store.getState() returns the current state of the store
store.dispatch({ type: "DECREASE" });
store.dispatch({ type: "RESET" });
store.dispatch({ type: "INCREASE" });
store.dispatch({ type: "CHANGE_NAME", payload: "sOhan" });
console.log(store.getState().name);

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
