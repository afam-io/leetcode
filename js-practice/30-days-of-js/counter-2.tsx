type ReturnObj = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

const createCounter2 = (init: number): ReturnObj => {
  let currentValue: number = init;
  return {
    increment: () => ++currentValue,
    decrement: () => --currentValue,
    reset: () => (currentValue = init),
  };
};
