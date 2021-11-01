import { GET_PRODUCTS_REQUESTED, GET_SORT_COST_REQUESTED, GET_SORT_NAME_REQUESTED } from "./actionTypes";

export const getProducts = (data) => {
  return {
    type: GET_PRODUCTS_REQUESTED,
    payload: data,
  };
};

export const sortProducts = (data) => {
  return {
    type: GET_SORT_COST_REQUESTED,
    payload: data,
  };
};

export const sortProductsByName = (data) => {
  return {
    type: GET_SORT_NAME_REQUESTED,
    payload: data,
  };
};
