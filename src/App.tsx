import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { InitialState } from "./reducers";
import { increment, decrement } from "./actions";

function App() {
  const counter: number = useSelector((state: InitialState) => state.counter);
  const isLogged: boolean = useSelector(
    (state: InitialState) => state.isLogged
  );
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Valuable information I shouldn't see</h3> : ""}
    </div>
  );
}
export default App;
