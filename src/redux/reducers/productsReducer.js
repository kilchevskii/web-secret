import {
  GET_PRODUCTS_REQUESTED,
  GET_PRODUCTS_SUCCESS,
  PRODUCTS_FAILED,
  GET_SORT_NAME_REQUESTED,
  GET_SORT_VALUE_SUCCESS,
  GET_SORT_COST_REQUESTED,
  GET_SORT_NAME_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  data: [],
  loading: false,
  error: null,
  success: false,
};

const sortByName = (data, name) => {
  const copyData = JSON.parse(JSON.stringify(data));
  const resultArray = [];
  let namesArray = [];
  namesArray = name.toLowerCase().split(",");
  if (namesArray[0] === "") {
    return copyData;
  } else if (namesArray.length === 1) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].title.split(" ")[0].toLowerCase() === namesArray.join()) {
        resultArray.push(data[i]);
      }
    }
  } else if (namesArray.length >= 1) {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (data[i].title.split(" ")[0].toLowerCase() === namesArray[j]) {
          resultArray.push(data[i]);
        }
      }
    }
  }
  return resultArray;
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_REQUESTED:
      return { ...state, loading: true };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case PRODUCTS_FAILED:
      return { ...state, loading: false, error: action.payload };
    case GET_SORT_COST_REQUESTED:
      return { ...state, loading: true };
    case GET_SORT_VALUE_SUCCESS:
      const copyData = action.payload[1];
      const [min, max] = action.payload[0];
      return {
        ...state,
        loading: true,
        data: copyData.filter((item) => item.price > min && item.price < max),
      };
    case GET_SORT_NAME_SUCCESS:
      const copyDataForName = action.payload[1];
      const sortName = action.payload[0].join("");
      return {
        ...state,
        loading: true,
        data: sortByName(copyDataForName, sortName),
      };
    case GET_SORT_NAME_REQUESTED:
      return { ...state, loading: true };
    default:
      return state;
  }
}
