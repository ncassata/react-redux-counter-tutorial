import { AnyAction } from "redux";
import { CounterAction } from "../actions/";

const loggedReducer = (state = false, action: CounterAction) => {
  switch (action.type) {
    case "SIGN_IN":
      return !state;
    default:
      return false;
  }
};
export default loggedReducer;
