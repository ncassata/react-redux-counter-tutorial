export const increment = (nr: number) => {
  return {
    type: "INCREMENT",
    payload: nr,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export interface CounterAction {
  type: string;
  payload: number;
}
