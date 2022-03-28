import { DECREASE, INCREASE } from "./components/action";
export default function reducer(state, action) {
  if (action.type === DECREASE) {
    return { ...state, count: state.count - 1 };
  }
  if (action.type === INCREASE) {
    return { ...state, count: state.count + 1, name: "sOhan chaudhuree" };
  }


  return state;
}
