import { AnyAction } from "redux";

const counterReducer = (state = 0, action: AnyAction) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
export default counterReducer;
