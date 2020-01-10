const validPass = "1111";

let errors = [];

const initialState = {
  codeValue: "",
  calcValue: "",
  disabled: false,
  entDisabled: false,
  succsess: false,
  fail: false,
  isEqual: false
};

const isCorrectValue = value => {
  errors = [];
  const checkArray = value.split(/[+\-*\\/]/);
  checkArray.map(el => isNaN(el) && errors.push(`${el}`));
  return !errors.length;
};

const counting = value => {
  if (isCorrectValue(value)) {
    // eslint-disable-next-line
    const equals = eval(value);
    return equals.toString().length > 16
      ? equals.toFixed(1).toString()
      : equals.toString();
  } else {
    return `Wrong number: ${errors.join(", ")}`;
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NUMBER":
      return state.codeValue.length + 1 !== 4
        ? { ...state, codeValue: (state.codeValue += action.value) }
        : {
            ...state,
            codeValue: (state.codeValue += action.value),
            disabled: true,
            entDisabled: false
          };
    case "DEL_NUMBER":
      return state.codeValue.length > 4
        ? {
            ...state,
            codeValue: (state.codeValue = ""),
            disabled: false,
            succsess: false,
            fail: false
          }
        : {
            ...state,
            codeValue: state.codeValue.slice(0, state.codeValue.length - 1),
            disabled: false
          };
    case "CHECK_NUMBER":
      return state.codeValue === validPass
        ? {
            ...state,
            codeValue: (state.codeValue = action.succsess),
            succsess: true,
            entDisabled: true
          }
        : {
            ...state,
            codeValue: (state.codeValue = action.fail),
            fail: true,
            entDisabled: true
          };
    case "ADD_VALUE":
      return state.isEqual
        ? {
            ...state,
            enteredValue: (state.calcValue = action.value),
            isEqual: false
          }
        : {
            ...state,
            calcValue: (state.calcValue += action.value),
            isEqual: false
          };
    case "ADD_SIGN":
      return {
        ...state,
        calcValue: (state.calcValue += action.value),
        isEqual: false
      };
    case "DEL_LAST_VALUE":
      return {
        ...state,
        calcValue: state.calcValue.slice(0, state.calcValue.length - 1),
        disabled: false
      };
    case "CLEAR_ALL_VALUE":
      return {
        ...state,
        calcValue: (state.calcValue = "")
      };
    case "EQUALS":
      return {
        ...state,
        calcValue: (state.calcValue = counting(state.calcValue)),
        isEqual: !state.isEqual
      };
    default:
      return state;
  }
};

export default reducer;