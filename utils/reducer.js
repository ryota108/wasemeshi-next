export const categoryReducer = (state, action) => {
  if (action.type === "MEAT") {
    return {
      meat: !state.meat,
      cafe: false,
      noodle: false,
      izakaya: false,
      chinese: false,
    };
  }
  if (action.type === "CAFE") {
    return {
      cafe: !state.cafe,
      meat: false,
      noodle: false,
      izakaya: false,
      chinese: false,
    };
  }
  if (action.type === "NOODLE") {
    return {
      noodle: !state.noodle,
      meat: false,
      cafe: false,
      izakaya: false,
      chinese: false,
    };
  }
  if (action.type === "IZAKAYA") {
    return {
      noodle: false,
      meat: false,
      cafe: false,
      izakaya: !state.izakaya,
      chinese: false,
    };
  }
  if (action.type === "CHINESE") {
    return {
      noodle: false,
      meat: false,
      cafe: false,
      izakaya: false,
      chinese: !state.chinese,
    };
  }
  if (action.type === "RESET") {
    return categoryInitialState;
  }
};

export const moneyReducer = (state, action) => {
  if (action.type === "ONE_COIN") {
    return {
      oneCoin: !state.oneCoin,
      twoCoin: false,
      oneBill: false,
      twoBill: false,
      manyBill: false,
    };
  }
  if (action.type === "TWO_COIN") {
    return {
      oneCoin: false,
      twoCoin: !state.twoCoin,
      oneBill: false,
      twoBill: false,
      manyBill: false,
    };
  }
  if (action.type === "ONE_BILL") {
    return {
      oneCoin: false,
      twoCoin: false,
      oneBill: !state.oneBill,
      twoBill: false,
      manyBill: false,
    };
  }
  if (action.type === "TWO_BILL") {
    return {
      oneCoin: false,
      twoCoin: false,
      oneBill: false,
      twoBill: !state.twoBill,
      manyBill: false,
    };
  }
  if (action.type === "MANY_BILL") {
    return {
      twoCoin: false,
      oneBill: false,
      twoBill: false,
      manyBill: !state.manyBill,
    };
  }
  if (action.type === "RESET") {
    return moneyInitialState;
  }
};

export const moneyInitialState = {
  oneCoin: false,
  twoCoin: false,
  oneBill: false,
  twoBill: false,
  manyBill: false,
};
export const categoryInitialState = {
  noodle: false,
  cafe: false,
  meat: false,
  izakaya: false,
  chinese:false
};
