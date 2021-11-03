import {
  GET_PRODUCTS_REQUESTED,
  GET_PRODUCTS_SUCCESS,
  PRODUCTS_FAILED,
  GET_SORT_REQUESTED,
  GET_SORT_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  data: [],
  loading: false,
  error: null,
  success: false,
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_REQUESTED:
      return { ...state, loading: true };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case PRODUCTS_FAILED:
      return { ...state, loading: false, error: action.payload };
    case GET_SORT_REQUESTED:
      return { ...state, loading: true };
    case GET_SORT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
}
